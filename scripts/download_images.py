#!/usr/bin/env python3
"""
Download image assets referenced in an HTML file into the mirror folder and update references.
Usage: python3 scripts/download_images.py <mirror_root> <html_path>
"""
import sys
import os
from pathlib import Path
import re
from urllib.parse import urlparse, urljoin
import urllib.request

if len(sys.argv) < 3:
    print("Usage: download_images.py <mirror_root> <html_path>")
    sys.exit(2)

mirror_root = Path(sys.argv[1]).resolve()
html_path = Path(sys.argv[2]).resolve()
if not html_path.exists():
    print('HTML file not found:', html_path)
    sys.exit(1)

html_text = html_path.read_text(encoding='utf-8')

# regex for img src and url(...) in styles
IMG_SRC_RE = re.compile(r'<img[^>]+?src=["\']([^"\']+)["\']', re.I)
CSS_URL_RE = re.compile(r'url\(["\']?([^"\')]+)["\']?\)', re.I)
SRCSET_RE = re.compile(r'<img[^>]+?srcset=["\']([^"\']+)["\']', re.I)

urls = []
for m in IMG_SRC_RE.finditer(html_text):
    urls.append(m.group(1))
for m in SRCSET_RE.finditer(html_text):
    # srcset contains multiple comma-separated items
    for part in m.group(1).split(','):
        urlpart = part.strip().split(' ')[0]
        if urlpart:
            urls.append(urlpart)
for m in CSS_URL_RE.finditer(html_text):
    urls.append(m.group(1))

# also search for background-image in inline styles
STYLE_BG_RE = re.compile(r'style=["\'][^"\']*url\(["\']?([^"\')]+)["\']?\)[^"\']*["\']', re.I)
for m in STYLE_BG_RE.finditer(html_text):
    urls.append(m.group(1))

# normalize unique
unique_urls = []
for u in urls:
    if not u or u.strip().startswith('data:'):
        continue
    if u not in unique_urls:
        unique_urls.append(u)

print(f'Found {len(unique_urls)} image/url references')

def ensure_parent(path: Path):
    path.parent.mkdir(parents=True, exist_ok=True)

changed = False
summary = []
for u in unique_urls:
    orig = u
    # decide local_rel and source_url
    if u.startswith('//'):
        # protocol-relative -> assume https
        source_url = 'https:' + u
        parsed = urlparse(source_url)
        local_rel = os.path.join('external', parsed.netloc, parsed.path.lstrip('/'))
    elif u.startswith('http://') or u.startswith('https://'):
        parsed = urlparse(u)
        source_url = u
        # if host is poprey.com, map path directly
        if parsed.netloc.endswith('poprey.com'):
            local_rel = parsed.path.lstrip('/')
        else:
            local_rel = os.path.join('external', parsed.netloc, parsed.path.lstrip('/'))
    elif u.startswith('/'):
        # site-relative: assume poprey.com origin
        source_url = 'https://poprey.com' + u
        local_rel = u.lstrip('/')
    else:
        # relative path: relative to html file
        local_rel = u
        # treat as file relative to html path; if file exists, skip
        source_url = None

    local_fs = mirror_root / html_path.parent.relative_to(mirror_root) / local_rel
    # if local_fs already exists, skip download
    if local_fs.exists():
        summary.append(('exists', orig, str(local_fs)))
        continue
    # if source_url is None, try to resolve relative to html file location on disk
    if source_url is None:
        # compute candidate relative path on disk
        candidate = html_path.parent / u
        if candidate.exists():
            # copy file to local_fs location
            ensure_parent(local_fs)
            candidate_bytes = candidate.read_bytes()
            ensure_parent(local_fs)
            local_fs.write_bytes(candidate_bytes)
            summary.append(('copied', orig, str(local_fs)))
            changed = True
            continue
        else:
            # treat as not found
            summary.append(('missing', orig, 'no source'))
            continue
    # download from source_url
    try:
        print('Downloading', source_url, '->', local_fs)
        ensure_parent(local_fs)
        with urllib.request.urlopen(source_url, timeout=15) as resp:
            data = resp.read()
            local_fs.write_bytes(data)
        summary.append(('downloaded', orig, str(local_fs)))
        changed = True
    except Exception as e:
        summary.append(('error', orig, str(e)))

# Update HTML with local paths for successful entries (downloaded or exists or copied)
for status, orig, localpath in summary:
    if status in ('downloaded', 'exists', 'copied'):
        # compute relative path from html file directory
        local_rel_from_html = os.path.relpath(localpath, start=str(html_path.parent))
        # replace occurrences of orig with local_rel_from_html
        # make sure to only replace the exact matches
        html_text = html_text.replace(orig, local_rel_from_html)
        changed = True

if changed:
    backup = html_path.with_suffix(html_path.suffix + '.imagesbak')
    html_path.write_text(html_text, encoding='utf-8')
    print('Updated HTML saved; backup at', backup)
else:
    print('No changes made to HTML')

print('\nSummary:')
for line in summary:
    print(line)

print('\nDone')
