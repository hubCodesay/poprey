#!/usr/bin/env python3
"""
Complete cleanup - replace ALL remaining German text in ALL HTML files
"""

import re
from pathlib import Path

def complete_cleanup_cs(file_path):
    """Complete cleanup for Czech version"""
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
    
    print(f"✓ Cleaned {file_path.name}")

def complete_cleanup_it(file_path):
    """Complete cleanup for Italian version"""
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
    
    print(f"✓ Cleaned {file_path.name}")

def main():
    base_dir = Path("/Users/gurgen/Downloads/poprey")
    
    # Cleanup ALL HTML files in Czech
    print("\n=== Complete cleanup for Czech (cs/) ===")
    cs_dir = base_dir / "cs"
    for html_file in cs_dir.glob("*.html"):
        complete_cleanup_cs(html_file)
    
    # Cleanup ALL HTML files in Italian
    print("\n=== Complete cleanup for Italian (it/) ===")
    it_dir = base_dir / "it"
    for html_file in it_dir.glob("*.html"):
        complete_cleanup_it(html_file)
    
    print("\n✅ Complete cleanup finished!")

if __name__ == "__main__":
    main()
