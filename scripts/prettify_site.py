#!/usr/bin/env python3
"""Prettify all HTML files in the mirror so they are more readable.

Backs up originals to the same path with a .bak suffix.
"""
import re
from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path('/Users/gurgen/CODE/poprey/poprey.com/mirror_poprey_com/poprey.com')

def extract_doctype(text: str) -> str:
    m = re.search(r'(?i)<!doctype[^>]*>', text)
    return (m.group(0) + '\n') if m else ''

def prettify_file(p: Path) -> bool:
    txt = p.read_text(encoding='utf-8', errors='ignore')
    doctype = extract_doctype(txt)
    soup = BeautifulSoup(txt, 'html.parser')
    new = doctype + soup.prettify()
    if new.strip() != txt.strip():
        bak = p.with_suffix(p.suffix + '.bak')
        bak.write_text(txt, encoding='utf-8')
        p.write_text(new, encoding='utf-8')
        print('Formatted', p)
        return True
    return False

def main():
    html_files = list(ROOT.rglob('*.html'))
    print('Found', len(html_files), 'HTML files')
    formatted = 0
    for f in html_files:
        try:
            if prettify_file(f):
                formatted += 1
        except Exception as e:
            print('Error formatting', f, e)
    print('Done — formatted', formatted, 'files')

if __name__ == '__main__':
    main()
