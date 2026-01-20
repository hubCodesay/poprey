#!/usr/bin/env python3
"""
Verify and fix all page translations across all language versions
Compares local files with official Poprey websites
"""

import requests
from bs4 import BeautifulSoup
import os
import re
from pathlib import Path

# Language configurations
LANGUAGES = {
    'de': {'url': 'https://poprey.de', 'dir': 'de'},
    'it': {'url': 'https://poprey.it', 'dir': 'it'},
    'fr': {'url': 'https://poprey.fr', 'dir': 'fr'},
    'es': {'url': 'https://poprey.es', 'dir': 'es'},
    'pt': {'url': 'https://poprey.pt', 'dir': 'pt'},
    'cs': {'url': 'https://poprey.cz', 'dir': 'cs'},
    'ro': {'url': 'https://poprey.ro', 'dir': 'ro'},
}

# Pages to check
PAGES = [
    'index.html',
    'buy-instagram-followers.html',
    'automatic-instagram-likes.html',
    'buy-instagram-comments.html',
    'buy-instagram-views.html',
    'buy-youtube-views.html',
    'buy-youtube-likes.html',
    'buy-youtube-subscribers.html',
    'buy-youtube-comments.html',
    'services.html',
]

def fetch_page_content(url, page):
    """Fetch content from official website"""
    try:
        if page == 'index.html':
            full_url = url
        else:
            page_name = page.replace('.html', '')
            full_url = f"{url}/{page_name}"
        
        print(f"  Fetching: {full_url}")
        response = requests.get(full_url, timeout=10)
        response.raise_for_status()
        return response.text
    except Exception as e:
        print(f"  ❌ Error fetching {full_url}: {e}")
        return None

def extract_h1(html_content):
    """Extract H1 tag from HTML"""
    if not html_content:
        return None
    
    soup = BeautifulSoup(html_content, 'html.parser')
    h1 = soup.find('h1')
    if h1:
        # Get text and clean it
        text = h1.get_text(strip=True)
        return text
    return None

def extract_local_h1(file_path):
    """Extract H1 from local file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        soup = BeautifulSoup(content, 'html.parser')
        h1 = soup.find('h1')
        if h1:
            return h1.get_text(strip=True)
        return None
    except Exception as e:
        print(f"  ❌ Error reading {file_path}: {e}")
        return None

def update_h1_in_file(file_path, new_h1):
    """Update H1 tag in local file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find and replace H1 tag
        pattern = r'<h1[^>]*>.*?</h1>'
        
        # Extract attributes from existing h1
        soup = BeautifulSoup(content, 'html.parser')
        h1_tag = soup.find('h1')
        if h1_tag:
            # Preserve attributes
            attrs = ' '.join([f'{k}="{v if isinstance(v, str) else " ".join(v)}"' for k, v in h1_tag.attrs.items()])
            new_h1_tag = f'<h1 {attrs}>{new_h1}</h1>' if attrs else f'<h1>{new_h1}</h1>'
            
            content = re.sub(pattern, new_h1_tag, content, count=1, flags=re.DOTALL)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            return True
        return False
    except Exception as e:
        print(f"  ❌ Error updating {file_path}: {e}")
        return False

def main():
    """Main verification and fixing process"""
    print("🔍 Starting verification of all pages across all languages...\n")
    
    base_dir = Path(__file__).parent
    issues_found = []
    fixes_applied = []
    
    for lang_code, lang_config in LANGUAGES.items():
        print(f"\n{'='*60}")
        print(f"🌍 Checking {lang_code.upper()} ({lang_config['url']})")
        print(f"{'='*60}")
        
        lang_dir = base_dir / lang_config['dir']
        
        for page in PAGES:
            local_file = lang_dir / page
            
            if not local_file.exists():
                print(f"⚠️  {page}: File not found locally")
                continue
            
            print(f"\n📄 {page}")
            
            # Fetch official content
            official_html = fetch_page_content(lang_config['url'], page)
            if not official_html:
                continue
            
            # Extract H1s
            official_h1 = extract_h1(official_html)
            local_h1 = extract_local_h1(local_file)
            
            if not official_h1:
                print(f"  ⚠️  No H1 found on official site")
                continue
            
            if not local_h1:
                print(f"  ⚠️  No H1 found in local file")
                continue
            
            # Compare
            if official_h1 == local_h1:
                print(f"  ✅ H1 matches: '{official_h1}'")
            else:
                print(f"  ❌ H1 mismatch!")
                print(f"     Official: '{official_h1}'")
                print(f"     Local:    '{local_h1}'")
                
                issues_found.append({
                    'lang': lang_code,
                    'page': page,
                    'official': official_h1,
                    'local': local_h1
                })
                
                # Fix it
                print(f"  🔧 Fixing H1...")
                if update_h1_in_file(local_file, official_h1):
                    print(f"  ✅ Fixed!")
                    fixes_applied.append(f"{lang_code}/{page}")
                else:
                    print(f"  ❌ Failed to fix")
    
    # Summary
    print(f"\n{'='*60}")
    print(f"📊 SUMMARY")
    print(f"{'='*60}")
    print(f"Issues found: {len(issues_found)}")
    print(f"Fixes applied: {len(fixes_applied)}")
    
    if fixes_applied:
        print(f"\n✅ Fixed files:")
        for file in fixes_applied:
            print(f"  - {file}")
    
    if issues_found and not fixes_applied:
        print(f"\n❌ Issues that need manual review:")
        for issue in issues_found:
            print(f"  - {issue['lang']}/{issue['page']}")

if __name__ == "__main__":
    main()
