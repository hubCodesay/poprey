#!/usr/bin/env python3
"""
Complete cleanup for Romanian - replace ALL remaining German text
"""

from pathlib import Path

def complete_cleanup_ro(file_path):
    """Complete cleanup for Romanian version"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace all German words with Romanian
    replacements = [
        ("Bewertungen", "Recenzii"),
        ("Mögen", "Like-uri"),
        ("für", "Pentru"),
        ("Anhänger", "Followeri"),
        ("Aufrufe", "Vizualizări"),
        ("Kommentare", "Comentarii"),
        ("Abonnenten", "Abonați"),
    ]
    
    for german, romanian in replacements:
        content = content.replace(german, romanian)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Cleaned {file_path.name}")

def main():
    base_dir = Path("/Users/gurgen/Downloads/poprey")
    
    # Cleanup ALL HTML files in Romanian
    print("\n=== Complete cleanup for Romanian (ro/) ===")
    ro_dir = base_dir / "ro"
    for html_file in ro_dir.glob("*.html"):
        complete_cleanup_ro(html_file)
    
    print("\n✅ Romanian cleanup complete!")

if __name__ == "__main__":
    main()
