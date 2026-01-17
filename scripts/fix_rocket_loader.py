#!/usr/bin/env python3
import re
from pathlib import Path

ROOT = Path('/Users/gurgen/CODE/poprey/poprey.com/mirror_poprey_com/poprey.com')

script_type_re = re.compile(r'type\s*=\s*"[^"]*text/javascript"', re.IGNORECASE)
rocket_src_re = re.compile(r'cdn-cgi/scripts/.*/rocket-loader\.min\.js')

def process_file(p: Path):
    text = p.read_text(encoding='utf-8', errors='ignore')
    orig = text
    # remove rocket-loader include tags
    text = re.sub(r'<script[^>]+%s[^>]*>\s*</script>' % rocket_src_re.pattern, '', text, flags=re.IGNORECASE)
    text = re.sub(r'<script[^>]+%s[^>]*/>' % rocket_src_re.pattern, '', text, flags=re.IGNORECASE)
    # normalize script type attributes that were modified by rocket loader
    text = script_type_re.sub('type="text/javascript"', text)
    # also remove any data-cf-settings attributes
    text = re.sub(r'\sdata-cf-settings="[^"]*"', '', text)
    if text != orig:
        bak = p.with_suffix(p.suffix + '.bak')
        p.rename(bak)
        p.write_text(text, encoding='utf-8')
        print('Updated', p)

def main():
    html_files = list(ROOT.rglob('*.html'))
    for f in html_files:
        try:
            process_file(f)
        except Exception as e:
            print('Error', f, e)

if __name__ == '__main__':
    main()
