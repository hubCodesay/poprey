#!/usr/bin/env python3
"""
Fix "Buy Now" button text across all language versions
Ensures button text matches official Poprey websites
"""

import re
from pathlib import Path

# Button text translations from official sites
BUY_NOW_TRANSLATIONS = {
    'de': 'Kaufe jetzt',       # German - poprey.de (updated per user)
    'it': 'Acquista ora',      # Italian - poprey.it
    'fr': 'Acheter maintenant', # French - poprey.fr
    'es': 'Comprar ahora',     # Spanish - poprey.es
    'pt': 'Comprar agora',     # Portuguese - poprey.pt
    'cs': 'Koupit nyní',       # Czech - poprey.cz
    'ro': 'Cumpără acum',      # Romanian - poprey.ro
}

def fix_buy_now_buttons(file_path, lang_code, correct_text):
    """Fix Buy Now button text in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        changes = 0
        
        # Pattern to find global-buy-now buttons
        # Matches: class="...global-buy-now...">TEXT</button>
        pattern = r'(class="[^"]*global-buy-now[^"]*">)([^<]+)(</button>)'
        
        def replace_text(match):
            nonlocal changes
            prefix = match.group(1)
            current_text = match.group(2)
            suffix = match.group(3)
            
            # Check if text needs updating
            if current_text.strip() != correct_text:
                changes += 1
                return f"{prefix}{correct_text}{suffix}"
            return match.group(0)
        
        content = re.sub(pattern, replace_text, content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True, changes
        
        return False, 0
        
    except Exception as e:
        print(f"  ❌ Error processing {file_path}: {e}")
        return False, 0

def main():
    """Main process"""
    print("🛒 Fixing 'Buy Now' button text across all language versions...\n")
    
    base_dir = Path(__file__).parent
    total_files_fixed = 0
    total_changes = 0
    
    for lang_code, button_text in BUY_NOW_TRANSLATIONS.items():
        lang_dir = base_dir / lang_code
        
        if not lang_dir.exists():
            print(f"⚠️  Directory {lang_code} not found")
            continue
        
        print(f"\n{'='*60}")
        print(f"🌍 Processing {lang_code.upper()} - Button text: '{button_text}'")
        print(f"{'='*60}")
        
        html_files = list(lang_dir.glob('*.html'))
        files_fixed_in_lang = 0
        changes_in_lang = 0
        
        for html_file in html_files:
            fixed, changes = fix_buy_now_buttons(html_file, lang_code, button_text)
            
            if fixed:
                print(f"✅ {html_file.name} - Fixed {changes} button(s)")
                files_fixed_in_lang += 1
                changes_in_lang += changes
        
        if files_fixed_in_lang == 0:
            print(f"✅ All buttons already have correct text: '{button_text}'")
        else:
            print(f"\n📊 Fixed {files_fixed_in_lang} files ({changes_in_lang} buttons) in {lang_code.upper()}")
        
        total_files_fixed += files_fixed_in_lang
        total_changes += changes_in_lang
    
    # Summary
    print(f"\n{'='*60}")
    print(f"📊 SUMMARY")
    print(f"{'='*60}")
    print(f"Total files fixed: {total_files_fixed}")
    print(f"Total buttons updated: {total_changes}")
    
    if total_files_fixed > 0:
        print(f"\n✅ Buy Now buttons updated with correct translations!")
        print(f"\nTranslations applied:")
        for lang, text in BUY_NOW_TRANSLATIONS.items():
            print(f"  {lang.upper()}: '{text}'")
    else:
        print(f"\n✅ All Buy Now buttons already have correct text!")

if __name__ == "__main__":
    main()
