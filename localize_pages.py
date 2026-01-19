#!/usr/bin/env python3
"""
Overwrite & Localize Script
Copies English page structure and injects translated text from donor sites.
"""

import os
import re
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# Language configuration
LANGUAGES = {
    'de': {'donor': 'https://poprey.de', 'name': 'German'},
    'it': {'donor': 'https://poprey.it', 'name': 'Italian'},
    'fr': {'donor': 'https://poprey.fr', 'name': 'French'},
    'es': {'donor': 'https://poprey.es', 'name': 'Spanish'},
    'pt': {'donor': 'https://poprey.pt', 'name': 'Portuguese'},
    'cs': {'donor': 'https://poprey.cz', 'name': 'Czech'},
    'ro': {'donor': 'https://poprey.ro', 'name': 'Romanian'},
}

# Page mapping: local filename -> donor URL path
PAGE_MAPPING = {
    'index.html': '/',
    'buy-instagram-followers.html': '/instagram_followers',
    'buy-instagram-likes.html': '/instagram_likes',
    'buy-instagram-views.html': '/instagram_views', 
    'buy-instagram-comments.html': '/instagram_comments',
    'buy-youtube-views.html': '/youtube_views',
    'buy-youtube-likes.html': '/youtube_likes',
    'buy-youtube-subscribers.html': '/youtube_subscribers',
    'buy-youtube-comments.html': '/youtube_comments',
    'automatic-instagram-likes.html': '/automatic_instagram_likes',
    'free-instagram-likes.html': '/free_instagram_likes',
    'free-ig-followers.html': '/free_instagram_followers',
    'free-trial-instagram-views.html': '/free_instagram_views',
    'services.html': '/services',
    'contact.html': '/contact',
    'faq.html': '/faq',
    'monitoring.html': '/monitoring',
    'rules.html': '/rules',
}

def fetch_donor_page(url):
    """Fetch and parse a donor page."""
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'}
        response = requests.get(url, headers=headers, timeout=15)
        response.raise_for_status()
        return BeautifulSoup(response.text, 'html.parser')
    except Exception as e:
        print(f"  ⚠️ Failed to fetch {url}: {e}")
        return None

def extract_text_elements(soup):
    """Extract key text elements from donor page."""
    texts = {
        'title': '',
        'h1': [],
        'h2': [],
        'h3': [],
        'paragraphs': [],
        'buttons': [],
        'card_titles': [],
        'benefits': [],
    }
    
    if not soup:
        return texts
    
    # Title
    title_tag = soup.find('title')
    if title_tag:
        texts['title'] = title_tag.get_text(strip=True)
    
    # Headings
    for tag in soup.find_all('h1'):
        texts['h1'].append(tag.get_text(strip=True))
    for tag in soup.find_all('h2'):
        texts['h2'].append(tag.get_text(strip=True))
    for tag in soup.find_all('h3'):
        texts['h3'].append(tag.get_text(strip=True))
    
    # Paragraphs
    for p in soup.find_all('p'):
        text = p.get_text(strip=True)
        if text and len(text) > 10:
            texts['paragraphs'].append(text)
    
    # Buttons
    for btn in soup.find_all('button'):
        text = btn.get_text(strip=True)
        if text:
            texts['buttons'].append(text)
    
    return texts

def update_html_lang(content, lang_code):
    """Update the HTML lang attribute."""
    content = re.sub(r'<html\s+lang="[^"]*"', f'<html lang="{lang_code}"', content)
    return content

def fix_asset_paths(content, lang_code):
    """Fix asset paths for language subdirectories."""
    # Change assets/ to ../assets/
    content = content.replace('src="assets/', 'src="../assets/')
    content = content.replace('href="assets/', 'href="../assets/')
    # But don't double-fix already relative paths
    content = content.replace('src="../../assets/', 'src="../assets/')
    content = content.replace('href="../../assets/', 'href="../assets/')
    return content

def process_page(lang_code, page_file, donor_url, local_path):
    """Process a single page: fetch donor text and update local file."""
    print(f"  📄 {page_file}")
    
    # Fetch donor content
    soup = fetch_donor_page(donor_url)
    if not soup:
        print(f"    ⏭️ Skipping (donor unavailable)")
        return False
    
    texts = extract_text_elements(soup)
    
    # Read local file
    try:
        with open(local_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"    ❌ Failed to read {local_path}: {e}")
        return False
    
    # Update HTML lang attribute
    content = update_html_lang(content, lang_code)
    
    # Fix asset paths
    content = fix_asset_paths(content, lang_code)
    
    # Update title
    if texts['title']:
        content = re.sub(r'<title>[^<]*</title>', f"<title>{texts['title']}</title>", content)
    
    # Update H1 (main title)
    if texts['h1']:
        main_h1 = texts['h1'][0]
        # Find and replace first h1 content
        content = re.sub(
            r'(<h1[^>]*class="[^"]*title[^"]*"[^>]*>)(.*?)(</h1>)',
            lambda m: m.group(1) + main_h1 + m.group(3),
            content,
            count=1,
            flags=re.DOTALL
        )
    
    # Write updated content
    try:
        with open(local_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"    ✅ Updated")
        return True
    except Exception as e:
        print(f"    ❌ Failed to write: {e}")
        return False

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    print("=" * 60)
    print("🌍 OVERWRITE & LOCALIZE SCRIPT")
    print("=" * 60)
    
    for lang_code, lang_info in LANGUAGES.items():
        print(f"\n🔷 Processing {lang_info['name']} ({lang_code})")
        print("-" * 40)
        
        lang_dir = os.path.join(base_dir, lang_code)
        if not os.path.exists(lang_dir):
            print(f"  ⚠️ Directory {lang_code}/ not found, skipping")
            continue
        
        for page_file, donor_path in PAGE_MAPPING.items():
            local_path = os.path.join(lang_dir, page_file)
            if not os.path.exists(local_path):
                print(f"  📄 {page_file} - not found, skipping")
                continue
            
            donor_url = lang_info['donor'] + donor_path
            process_page(lang_code, page_file, donor_url, local_path)
    
    print("\n" + "=" * 60)
    print("✅ LOCALIZATION COMPLETE")
    print("=" * 60)

if __name__ == '__main__':
    main()
