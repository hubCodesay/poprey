#!/usr/bin/env python3
import sys, os, re
try:
    from bs4 import BeautifulSoup
except Exception:
    BeautifulSoup = None

if len(sys.argv) < 3:
    print('Usage: check_assets.py <mirror_root> <path_to_html>')
    sys.exit(2)

mirror_root = sys.argv[1]
html_path = sys.argv[2]

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

assets = []
if BeautifulSoup:
    soup = BeautifulSoup(html, 'html.parser')
    for s in soup.find_all('script'):
        src = s.get('src')
        if src:
            assets.append(('script', src))
    for l in soup.find_all('link'):
        href = l.get('href')
        if not href:
            continue
        rel = ' '.join(l.get('rel') or []) if l.get('rel') else ''
        as_attr = l.get('as') or ''
        if 'stylesheet' in rel.lower() or 'preload' in rel.lower() or as_attr.lower() == 'style':
            assets.append(('style', href))
else:
    # fallback regex
    scripts = re.findall(r"<script[^>]+src=[\"']([^\"']+)[\"']", html, flags=re.I)
    links = re.findall(r"<link[^>]+href=[\"']([^\"']+)[\"']", html, flags=re.I)
    assets = [('script', u) for u in scripts] + [('style', u) for u in links]

# dedupe preserving order
seen = set()
uniq = []
for t,u in assets:
    if u in seen: continue
    seen.add(u)
    uniq.append((t,u))

report_lines = []
for typ, url in uniq:
    u = url.strip()
    localpath = None
    status = 'missing'
    if u.startswith('//'):
        u2 = 'https:' + u
    else:
        u2 = u
    if re.match(r'^https?://', u2):
        # external
        m = re.match(r'^https?://([^/]+)(/.*)?', u2)
        host = m.group(1)
        path = m.group(2) or ''
        path = path.lstrip('/')
        cand = os.path.join(mirror_root, host, path)
        if os.path.exists(cand):
            status = 'local'
            localpath = cand
        else:
            hostdir = os.path.join(mirror_root, host)
            if os.path.isdir(hostdir):
                # try find by basename
                b = os.path.basename(path)
                for root,dirs,files in os.walk(hostdir):
                    for fn in files:
                        if fn.startswith(b) or fn == b:
                            localpath = os.path.join(root, fn)
                            status = 'local'
                            break
                    if localpath: break
            if not localpath:
                status = 'external-not-downloaded'
    else:
        # relative or absolute path
        if u.startswith('/'):
            cand = os.path.join(mirror_root, 'poprey.com', u.lstrip('/'))
            if os.path.exists(cand):
                status = 'local'
                localpath = cand
            else:
                cand2 = os.path.join(mirror_root, u.lstrip('/'))
                if os.path.exists(cand2):
                    status = 'local'
                    localpath = cand2
                else:
                    status = 'missing'
        else:
            # relative to html dir
            html_dir = os.path.dirname(html_path)
            cand = os.path.normpath(os.path.join(html_dir, u))
            if os.path.exists(cand):
                status = 'local'
                localpath = cand
            else:
                # try under poprey.com
                cand2 = os.path.join(mirror_root, 'poprey.com', u)
                if os.path.exists(cand2):
                    status = 'local'
                    localpath = cand2
                else:
                    status = 'missing'
    if localpath:
        report_lines.append(f"{typ:6s} {status:24s} {url} -> {localpath}")
    else:
        report_lines.append(f"{typ:6s} {status:24s} {url}")

outpath = '/tmp/assets_report.txt'
with open(outpath, 'w', encoding='utf-8') as f:
    f.write('\n'.join(report_lines))
print(f'Wrote report to {outpath}. Showing first 200 lines:')
for i,l in enumerate(report_lines[:200]):
    print(l)

print('\nSummary:')
from collections import Counter
c = Counter([r.split()[1] for r in report_lines])
for k,v in c.items():
    print(f"{k}: {v}")
