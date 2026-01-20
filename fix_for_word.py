#!/usr/bin/env python3
"""
Fix "for" word in trial__wrapper blocks across all languages
Ensures the correct translation of "for" is used in price displays
"""

import re
from pathlib import Path

# Correct "for" translations from official sites
FOR_TRANSLATIONS = {
    'de': 'für',      # German
    'it': 'per',      # Italian
    'fr': 'pour',     # French
    'es': 'para',     # Spanish
    'pt': 'para',     # Portuguese
    'cs': 'pro',      # Czech
    'ro': 'pentru',   # Romanian
}

# Wrong variations that might exist
WRONG_VARIATIONS = {
    'de': ['for', 'For', 'per', 'para', 'pour', 'pro', 'pentru'],
    'it': ['for', 'For', 'für', 'para', 'pour', 'pro', 'pentru'],
    'fr': ['for', 'For', 'für', 'per', 'para', 'pro', 'pentru'],
    'es': ['for', 'For', 'für', 'per', 'pour', 'pro', 'pentru'],
    'pt': ['for', 'For', 'für', 'per', 'pour', 'pro', 'pentru'],
    'cs': ['for', 'For', 'für', 'per', 'para', 'pour', 'pentru'],
    'ro': ['for', 'For', 'für', 'per', 'para', 'pour', 'pro'],
}

def fix_for_word_in_file(file_path, lang_code, correct_word):
    """Fix 'for' word in HTML file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        changes = []
        
        # Pattern 1: Find patterns like "> für <" or ">für<" in price displays
        # This matches the word between HTML tags
        wrong_words = WRONG_VARIATIONS.get(lang_code, [])
        
        for wrong_word in wrong_words:
            # Pattern: >WORD< or > WORD < (with optional spaces)
            pattern1 = rf'>\s*{re.escape(wrong_word)}\s*<'
            matches = re.findall(pattern1, content, re.IGNORECASE)
            if matches:
                # Replace with correct word
                content = re.sub(pattern1, f'>{correct_word}<', content, flags=re.IGNORECASE)
                changes.append(f"Fixed '{wrong_word}' to '{correct_word}' ({len(matches)} times)")
            
            # Pattern: > WORD\n or >\nWORD (with newlines)
            pattern2 = rf'>\s*{re.escape(wrong_word)}\s*\n'
            matches2 = re.findall(pattern2, content, re.IGNORECASE)
            if matches2:
                content = re.sub(pattern2, f'>{correct_word}\n', content, flags=re.IGNORECASE)
                if f"Fixed '{wrong_word}'" not in str(changes):
                    changes.append(f"Fixed '{wrong_word}' with newline to '{correct_word}' ({len(matches2)} times)")
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True, changes
        
        return False, []
        
    except Exception as e:
        print(f"  ❌ Error processing {file_path}: {e}")
        return False, []

def main():
    """Main process"""
    print("🔧 Fixing 'for' word in trial__wrapper blocks...\n")
    
    base_dir = Path(__file__).parent
    total_files_fixed = 0
    total_changes = 0
    
    for lang_code, correct_word in FOR_TRANSLATIONS.items():
        lang_dir = base_dir / lang_code
        
        if not lang_dir.exists():
            print(f"⚠️  Directory {lang_code} not found")
            continue
        
        print(f"\n{'='*60}")
        print(f"🌍 Processing {lang_code.upper()} - Correct word: '{correct_word}'")
        print(f"{'='*60}")
        
        html_files = list(lang_dir.glob('*.html'))
        files_fixed_in_lang = 0
        changes_in_lang = 0
        
        for html_file in html_files:
            fixed, changes = fix_for_word_in_file(html_file, lang_code, correct_word)
            
            if fixed:
                print(f"✅ {html_file.name}")
                for change in changes:
                    print(f"   - {change}")
                files_fixed_in_lang += 1
                changes_in_lang += len(changes)
        
        if files_fixed_in_lang == 0:
            print(f"✅ All files already use correct word: '{correct_word}'")
        else:
            print(f"\n📊 Fixed {files_fixed_in_lang} files in {lang_code.upper()}")
        
        total_files_fixed += files_fixed_in_lang
        total_changes += changes_in_lang
    
    # Summary
    print(f"\n{'='*60}")
    print(f"📊 SUMMARY")
    print(f"{'='*60}")
    print(f"Total files fixed: {total_files_fixed}")
    print(f"Total changes made: {total_changes}")
    
    if total_files_fixed > 0:
        print(f"\n✅ 'For' words updated with correct translations!")
        print(f"\nTranslations applied:")
        for lang, word in FOR_TRANSLATIONS.items():
            print(f"  {lang.upper()}: '{word}'")
    else:
        print(f"\n✅ All 'for' words already correct!")

if __name__ == "__main__":
    main()
