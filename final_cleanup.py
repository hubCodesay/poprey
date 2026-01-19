#!/usr/bin/env python3
"""
Final cleanup - replace remaining German text with Czech and Italian
"""

import re
from pathlib import Path

def final_cleanup_cs(file_path):
    """Final cleanup for Czech version"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace remaining German text
    replacements = {
        "Instagram Mögen kaufen": "Koupit Instagram Líbí se",
        "Sicher & Echt": "Bezpečnost & Reálný",
        "Nur $": "Pouze $",
        "kaufen": "koupit",
        "Kaufen": "Koupit",
    }
    
    for german, czech in replacements.items():
        content = content.replace(german, czech)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Cleaned up {file_path}")

def final_cleanup_it(file_path):
    """Final cleanup for Italian version"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace any remaining non-Italian text
    replacements = {
        "Sicuro & Reale": "Sicuro e Reale",
        "Solo $": "Solo $",
    }
    
    for old, new in replacements.items():
        content = content.replace(old, new)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Cleaned up {file_path}")

def main():
    base_dir = Path("/Users/gurgen/Downloads/poprey")
    
    pages = [
        "index.html",
        "buy-instagram-followers.html",
        "automatic-instagram-likes.html",
        "buy-instagram-comments.html",
        "buy-youtube-views.html",
        "buy-youtube-likes.html",
        "services.html",
    ]
    
    # Cleanup Czech
    print("\n=== Final cleanup for Czech (cs/) ===")
    for page in pages:
        file_path = base_dir / "cs" / page
        if file_path.exists():
            final_cleanup_cs(file_path)
    
    # Cleanup Italian
    print("\n=== Final cleanup for Italian (it/) ===")
    for page in pages:
        file_path = base_dir / "it" / page
        if file_path.exists():
            final_cleanup_it(file_path)
    
    print("\n✅ Final cleanup complete!")

if __name__ == "__main__":
    main()
