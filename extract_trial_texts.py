#!/usr/bin/env python3
"""
Extract and compare trial__wrapper texts from official sites
This script will help identify what texts need to be updated
"""

import requests
from bs4 import BeautifulSoup
import json

SITES = {
    'de': 'https://poprey.de',
    'it': 'https://poprey.it',
    'fr': 'https://poprey.fr',
    'es': 'https://poprey.es',
    'pt': 'https://poprey.pt',
    'cs': 'https://poprey.cz',
    'ro': 'https://poprey.ro',
}

# Common texts to look for in trial__wrapper
TEXTS_TO_CHECK = [
    'für',  # German: for
    'per',  # Italian: for
    'pour', # French: for
    'para', # Spanish/Portuguese: for
    'pro',  # Czech: for
    'pentru', # Romanian: for
]

def fetch_page(url):
    """Fetch page content"""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.text
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def extract_json_data(html):
    """Extract Next.js JSON data from page"""
    try:
        # Find __NEXT_DATA__ script
        soup = BeautifulSoup(html, 'html.parser')
        script = soup.find('script', {'id': '__NEXT_DATA__'})
        if script:
            data = json.loads(script.string)
            return data
        return None
    except Exception as e:
        print(f"Error extracting JSON: {e}")
        return None

def find_translations(data, lang):
    """Find translation strings in JSON data"""
    translations = {}
    
    if not data:
        return translations
    
    try:
        # Navigate through the JSON structure
        if 'props' in data and 'pageProps' in data['props']:
            props = data['props']['pageProps']
            
            # Look for translation keys
            if 'translations' in props:
                trans = props['translations']
                # Common keys we're interested in
                keys_of_interest = [
                    'for', 'For', 'für', 'per', 'pour', 'para', 'pro', 'pentru',
                    'Quantity', 'Quality', 'Speed', 'Support',
                    'Regular', 'Premium',
                ]
                
                for key in keys_of_interest:
                    if key in trans:
                        translations[key] = trans[key]
        
        return translations
    except Exception as e:
        print(f"Error finding translations: {e}")
        return translations

def main():
    print("🔍 Extracting trial__wrapper texts from official sites...\n")
    
    results = {}
    
    for lang, url in SITES.items():
        print(f"\n{'='*60}")
        print(f"🌍 {lang.upper()}: {url}")
        print(f"{'='*60}")
        
        html = fetch_page(url)
        if not html:
            continue
        
        # Extract JSON data
        json_data = extract_json_data(html)
        translations = find_translations(json_data, lang)
        
        if translations:
            print(f"Found translations:")
            for key, value in translations.items():
                print(f"  {key}: {value}")
            results[lang] = translations
        else:
            print(f"No translations found in JSON")
        
        # Also try to find "for" equivalent in HTML
        soup = BeautifulSoup(html, 'html.parser')
        
        # Look for common patterns
        # Pattern: "X Likes for $Y"
        text_content = soup.get_text()
        
        # Try to find the "for" word
        for_words = {
            'de': ['für', 'Für'],
            'it': ['per', 'Per'],
            'fr': ['pour', 'Pour'],
            'es': ['para', 'Para', 'por', 'Por'],
            'pt': ['para', 'Para', 'por', 'Por'],
            'cs': ['pro', 'Pro', 'za', 'Za'],
            'ro': ['pentru', 'Pentru'],
        }
        
        if lang in for_words:
            for word in for_words[lang]:
                if word in text_content:
                    print(f"✓ Found '{word}' in page content")
                    if 'for_word' not in results.get(lang, {}):
                        if lang not in results:
                            results[lang] = {}
                        results[lang]['for_word'] = word.lower()
                    break
    
    # Save results
    print(f"\n{'='*60}")
    print("📊 SUMMARY")
    print(f"{'='*60}")
    
    for lang, data in results.items():
        print(f"\n{lang.upper()}:")
        for key, value in data.items():
            print(f"  {key}: {value}")
    
    # Save to file
    with open('trial_wrapper_translations.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print(f"\n✅ Results saved to trial_wrapper_translations.json")

if __name__ == "__main__":
    main()
