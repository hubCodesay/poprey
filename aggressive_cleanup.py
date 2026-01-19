#!/usr/bin/env python3
"""
Aggressive cleanup - replace ALL remaining German text
"""

import re
from pathlib import Path

def aggressive_cleanup_cs(file_path):
    """Aggressive cleanup for Czech version"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace all German words
    replacements = [
        ("Bewertungen", "Recenze"),
        ("Instagram-Follower kaufen", "Koupit následovníky Instagram"),
        ("Instagram Follower kaufen", "Koupit následovníky Instagram"),
        ("für", "Pro"),
    ]
    
    for german, czech in replacements:
        content = content.replace(german, czech)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Aggressively cleaned {file_path}")

def aggressive_cleanup_it(file_path):
    """Aggressive cleanup for Italian version"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace all German words
    replacements = [
        ("Bewertungen", "Recensioni"),
        ("Instagram-Follower kaufen", "Acquista Follower Instagram"),
        ("Instagram Follower kaufen", "Acquista Follower Instagram"),
        ("für", "Per"),
    ]
    
    for german, italian in replacements:
        content = content.replace(german, italian)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Aggressively cleaned {file_path}")

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
    print("\n=== Aggressive cleanup for Czech (cs/) ===")
    for page in pages:
        file_path = base_dir / "cs" / page
        if file_path.exists():
            aggressive_cleanup_cs(file_path)
    
    # Cleanup Italian
    print("\n=== Aggressive cleanup for Italian (it/) ===")
    for page in pages:
        file_path = base_dir / "it" / page
        if file_path.exists():
            aggressive_cleanup_it(file_path)
    
    print("\n✅ Aggressive cleanup complete!")

if __name__ == "__main__":
    main()
