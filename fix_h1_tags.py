#!/usr/bin/env python3
"""
Fix all H1 tags to match poprey.cz originals
"""

import re
from pathlib import Path

# Czech H1 mappings from poprey.cz
CZECH_H1 = {
    "index.html": "Koupit Instagram Líbí se",
    "buy-instagram-followers.html": "Koupit následovníky Instagram",
    "automatic-instagram-likes.html": "Koupit Instagram Auto-líbí se",
    "buy-instagram-comments.html": "Koupit komentáře Instagram",
    "buy-youtube-views.html": "Koupit pohledy na YouTube",
    "buy-youtube-likes.html": "Koupit YouTube líbi",
}

# Italian H1 mappings (translated from Czech)
ITALIAN_H1 = {
    "index.html": "Acquista Mi Piace Instagram",
    "buy-instagram-followers.html": "Acquista Follower Instagram",
    "automatic-instagram-likes.html": "Acquista Mi Piace Automatici Instagram",
    "buy-instagram-comments.html": "Acquista Commenti Instagram",
    "buy-youtube-views.html": "Acquista Visualizzazioni YouTube",
    "buy-youtube-likes.html": "Acquista Mi Piace YouTube",
}

def fix_h1_in_file(file_path, new_h1_text):
    """Fix H1 tag in a file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find and replace H1 content
    # Pattern matches various H1 formats
    patterns = [
        (r'(<h1[^>]*>)[^<]+(</h1>)', rf'\1{new_h1_text}\2'),
        (r'(<h1[^>]*>\s*)[^<]+(\s*</h1>)', rf'\1{new_h1_text}\2'),
    ]
    
    original_content = content
    for pattern, replacement in patterns:
        content = re.sub(pattern, replacement, content, count=1)
        if content != original_content:
            break
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    base_dir = Path("/Users/gurgen/Downloads/poprey")
    
    # Fix Czech H1 tags
    print("\n=== Fixing Czech (cs/) H1 tags ===")
    for filename, h1_text in CZECH_H1.items():
        file_path = base_dir / "cs" / filename
        if file_path.exists():
            if fix_h1_in_file(file_path, h1_text):
                print(f"✓ Fixed {filename}: {h1_text}")
            else:
                print(f"⚠ No change in {filename}")
        else:
            print(f"⚠ File not found: {filename}")
    
    # Fix Italian H1 tags
    print("\n=== Fixing Italian (it/) H1 tags ===")
    for filename, h1_text in ITALIAN_H1.items():
        file_path = base_dir / "it" / filename
        if file_path.exists():
            if fix_h1_in_file(file_path, h1_text):
                print(f"✓ Fixed {filename}: {h1_text}")
            else:
                print(f"⚠ No change in {filename}")
        else:
            print(f"⚠ File not found: {filename}")
    
    print("\n✅ H1 tags fixed!")

if __name__ == "__main__":
    main()
