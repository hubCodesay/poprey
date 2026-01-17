#!/usr/bin/env python3
"""Comment out external scripts and styles that are not local site assets.

Rules:
- Keep tags whose `src`/`href` are local (start with '/', '_next', 'assets', './', '../' or no scheme and no host)
- Comment out tags that load from CDNs, analytics, payment SDKs, or other external hosts.

Backs up original file to .bak if not already present.
"""
from pathlib import Path
from bs4 import BeautifulSoup, Comment
import re

ROOT = Path('/Users/gurgen/CODE/poprey/poprey.com/mirror_poprey_com/poprey.com')

EXTERNAL_KEYWORDS = [
    'googletagmanager', 'google-analytics', 'gtag', 'googlesyndication', 'doubleclick',
    'apple-pay', 'applepay', 'cdn', 'cloudflare', 'facebook', 'fbq', 'hotjar', 'mixpanel',
    'analytics', 'snap', 'ads', 'omsdk', 'gtm', 'googletag', 'stripe', 'paypal'
]

def is_local_url(u: str) -> bool:
    if not u:
        return False
    u = u.strip()
    # local if starts with / or _next or assets or is relative
    if u.startswith('/') or u.startswith('_next') or u.startswith('assets') or u.startswith('./') or u.startswith('../'):
        return True
    # protocol-relative or absolute remote -> external
    if re.match(r'^[a-zA-Z0-9\-]+:\/\/', u) or u.startswith('//'):
        return False
    # if contains ':' (like mailto:) consider external
    if ':' in u:
        return False
    # otherwise treat as local (relative path)
    return True

def looks_external(u: str) -> bool:
    if not u:
        return False
    lu = u.lower()
    for k in EXTERNAL_KEYWORDS:
        if k in lu:
            return True
    # if URL contains a dot and doesn't look local, consider external
    if re.search(r'[a-z0-9\-]+\.[a-z]{2,}', lu) and not is_local_url(u):
        return True
    return False

def should_comment_tag(tag) -> bool:
    # script tags
    if tag.name == 'script':
        src = tag.get('src')
        if src:
            if is_local_url(src):
                return False
            return True
        # inline script: comment if contains analytics/payment keywords
        text = (tag.string or '')
        if any(k in text.lower() for k in EXTERNAL_KEYWORDS):
            return True
        return False
    # link tags
    if tag.name == 'link':
        href = tag.get('href')
        rel = ' '.join(tag.get('rel') or [])
        # keep local stylesheets
        if href and is_local_url(href):
            return False
        # comment preconnect/dns-prefetch/preload to external hosts
        if 'dns-prefetch' in rel or 'preconnect' in rel or 'preload' in rel:
            return True
        # otherwise comment external stylesheets
        if href and looks_external(href):
            return True
        return False
    return False

def process_file(p: Path):
    text = p.read_text(encoding='utf-8', errors='ignore')
    soup = BeautifulSoup(text, 'html.parser')
    changed = False
    for tag in list(soup.find_all(['script','link'])):
        try:
            if should_comment_tag(tag):
                comment_text = str(tag)
                tag.replace_with(Comment(' ' + comment_text + ' '))
                changed = True
        except Exception as e:
            print('Error processing', p, e)
    if changed:
        bak = p.with_suffix(p.suffix + '.bak')
        if not bak.exists():
            bak.write_text(text, encoding='utf-8')
        p.write_text(soup.prettify(), encoding='utf-8')
        print('Commented externals in', p)

def main():
    files = list(ROOT.rglob('*.html'))
    print('Found', len(files), 'HTML files')
    for f in files:
        process_file(f)
    print('Done')

if __name__ == '__main__':
    main()
