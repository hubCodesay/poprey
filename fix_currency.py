#!/usr/bin/env python3
"""
Fix currency symbol placement - ensure $ is before the amount
"""

import re
import os
from pathlib import Path

# Language directories to process
LANG_DIRS = ['de', 'it', 'fr', 'es', 'pt', 'cs', 'ro']

def fix_currency_in_file(file_path):
    """Fix currency symbol placement in a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        changes_made = []
        
        # Pattern 1: Find prices like "2.60$" or "10$" and change to "$2.60" or "$10"
        # This pattern looks for numbers followed by $
        pattern1 = r'(\d+\.?\d*)\s*\$'
        matches1 = re.findall(pattern1, content)
        if matches1:
            content = re.sub(pattern1, r'$\1', content)
            changes_made.append(f"Fixed {len(matches1)} instances of 'number$' to '$number'")
        
        # Pattern 2: Find prices in HTML like >2.60$< and change to >$2.60<
        pattern2 = r'>(\d+\.?\d*)\s*\$<'
        matches2 = re.findall(pattern2, content)
        if matches2:
            content = re.sub(pattern2, r'>$\1<', content)
            changes_made.append(f"Fixed {len(matches2)} instances in HTML tags")
        
        # Pattern 3: Find "Only 2.60$" or similar and change to "Only $2.60"
        pattern3 = r'(Only|Nur|Solo|Seulement|Apenas|Pouze|Doar)\s+(\d+\.?\d*)\s*\$'
        matches3 = re.findall(pattern3, content)
        if matches3:
            content = re.sub(pattern3, r'\1 $\2', content)
            changes_made.append(f"Fixed {len(matches3)} instances with 'Only/Nur/etc'")
        
        # Pattern 4: Find prices in meta tags
        pattern4 = r'(\d+\.?\d*)\s*\$'
        # This is already covered by pattern1
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True, changes_made
        
        return False, []
        
    except Exception as e:
        print(f"  ❌ Error processing {file_path}: {e}")
        return False, []

def main():
    """Main process"""
    print("💲 Fixing currency symbol placement across all language versions...\n")
    
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
            fixed, changes = fix_currency_in_file(html_file)
            
            if fixed:
                print(f"✅ {html_file.name}")
                for change in changes:
                    print(f"   - {change}")
                files_fixed_in_lang += 1
                total_changes += len(changes)
        
        if files_fixed_in_lang == 0:
            print(f"✅ All files already have correct currency placement")
        else:
            print(f"\n📊 Fixed {files_fixed_in_lang} files in {lang.upper()}")
        
        total_files_fixed += files_fixed_in_lang
    
    # Summary
    print(f"\n{'='*60}")
    print(f"📊 SUMMARY")
    print(f"{'='*60}")
    print(f"Total files fixed: {total_files_fixed}")
    print(f"Total changes made: {total_changes}")
    
    if total_files_fixed > 0:
        print(f"\n✅ Currency symbols fixed! All prices now show as $X.XX")
    else:
        print(f"\n✅ All currency symbols already correctly placed!")

if __name__ == "__main__":
    main()
