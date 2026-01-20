#!/usr/bin/env python3
"""
Add $ symbol before prices in box__service-name elements
Ensures all prices display with $ symbol
"""

import re
from pathlib import Path

LANG_DIRS = ['de', 'it', 'fr', 'es', 'pt', 'cs', 'ro']

def fix_prices_in_file(file_path):
    """Add $ before prices in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        changes = []
        
        # Pattern 1: In HTML - find prices without $ in box__service-name
        # Matches: für 2.70 or per 2.70 or pour 2.70 etc. (without $)
        # Should become: für $2.70
        pattern1 = r'(für|per|pour|para|pro|pentru)\s+(\d+\.?\d*)\s*</p>'
        matches1 = re.findall(pattern1, content)
        if matches1:
            content = re.sub(pattern1, r'\1 $\2</p>', content)
            changes.append(f"Fixed {len(matches1)} HTML prices without $")
        
        # Pattern 2: In JavaScript - prices in innerHTML without $
        # Matches: für " + price or für " + pkg.price.toFixed(2)
        pattern2 = r'(für|per|pour|para|pro|pentru)\s+"\s*\+\s*'
        matches2 = re.findall(pattern2, content)
        if matches2:
            content = re.sub(pattern2, r'\1 $" + ', content)
            changes.append(f"Fixed {len(matches2)} JavaScript prices without $")
        
        # Pattern 3: In JavaScript string literals - "für 2.70" should be "für $2.70"
        pattern3 = r'"([^"]*)(für|per|pour|para|pro|pentru)\s+(\d+\.?\d*)([^"]*)"'
        def replace_in_string(match):
            before = match.group(1)
            word = match.group(2)
            price = match.group(3)
            after = match.group(4)
            # Check if $ is already there
            if '$' not in before + word + after:
                return f'"{before}{word} ${price}{after}"'
            return match.group(0)
        
        new_content = re.sub(pattern3, replace_in_string, content)
        if new_content != content:
            matches3_count = len(re.findall(pattern3, content))
            content = new_content
            changes.append(f"Fixed {matches3_count} string literal prices without $")
        
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
    print("💲 Adding $ symbol to all prices...\n")
    
    base_dir = Path(__file__).parent
    total_files_fixed = 0
    total_changes = 0
    
    for lang in LANG_DIRS:
        lang_dir = base_dir / lang
        
        if not lang_dir.exists():
            print(f"⚠️  Directory {lang} not found")
            continue
        
        print(f"\n{'='*60}")
        print(f"🌍 Processing {lang.upper()}")
        print(f"{'='*60}")
        
        html_files = list(lang_dir.glob('*.html'))
        files_fixed_in_lang = 0
        
        for html_file in html_files:
            fixed, changes = fix_prices_in_file(html_file)
            
            if fixed:
                print(f"✅ {html_file.name}")
                for change in changes:
                    print(f"   - {change}")
                files_fixed_in_lang += 1
                total_changes += len(changes)
        
        if files_fixed_in_lang == 0:
            print(f"✅ All prices already have $ symbol")
        else:
            print(f"\n📊 Fixed {files_fixed_in_lang} files in {lang.upper()}")
        
        total_files_fixed += files_fixed_in_lang
    
    # Summary
    print(f"\n{'='*60}")
    print(f"📊 SUMMARY")
    print(f"{'='*60}")
    print(f"Total files fixed: {total_files_fixed}")
    print(f"Total change groups: {total_changes}")
    
    if total_files_fixed > 0:
        print(f"\n✅ $ symbols added to all prices!")
    else:
        print(f"\n✅ All prices already have $ symbol!")

if __name__ == "__main__":
    main()
