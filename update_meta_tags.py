#!/usr/bin/env python3
"""
Update meta tags and titles for Czech and Italian versions
"""

import re
from pathlib import Path

def update_meta_tags_cs(file_path):
    """Update meta tags for Czech version"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update title and meta tags based on page type
    if 'index.html' in str(file_path):
        content = re.sub(
            r'<title>.*?</title>',
            '<title>Koupit Instagram Líbí - 100% Bezpečnost & Reálný | Poprey</title>',
            content
        )
        content = re.sub(
            r'content="Instagram.*?" property="title"',
            'content="Koupit Instagram Líbí se - 100% Bezpečnost & Reálný | Pouze $2.60" property="title"',
            content
        )
        content = re.sub(
            r'content=".*?" name="description"',
            'content="Koupit Instagram následovníky, líbí se a pohledy od Poprey. Toto jsou nejbezpečnější a nejlevnější způsoby, jak získat 100% skutečné následovníky s okamžitým doručením" name="description"',
            content,
            count=1
        )
    elif 'buy-instagram-followers' in str(file_path):
        content = re.sub(
            r'<title>.*?</title>',
            '<title>Koupit levné následovníci Instagram - nejlepší místo pro nákup organických následovníci | Poprey</title>',
            content
        )
    elif 'automatic-instagram-likes' in str(file_path):
        content = re.sub(
            r'<title>.*?</title>',
            '<title>Instagram Auto-Líbí - bez hesla | Poprey</title>',
            content
        )
    elif 'buy-instagram-comments' in str(file_path):
        content = re.sub(
            r'<title>.*?</title>',
            '<title>Koupit komentáře Instagram - 100% anonymní | Poprey</title>',
            content
        )
    elif 'buy-youtube-views' in str(file_path):
        content = re.sub(
            r'<title>.*?</title>',
            '<title>Kupte YouTube Zhlédnutí – Autentická a Cenově Dostupná, 100% bezpečná | Poprey</title>',
            content
        )
    elif 'buy-youtube-likes' in str(file_path):
        content = re.sub(
            r'<title>.*?</title>',
            '<title>Kupte YouTube Lajky – Efektivní, Zapojené a Cenově dostupné za $1.80 | Poprey</title>',
            content
        )
    elif 'services' in str(file_path):
        content = re.sub(
            r'<title>.*?</title>',
            '<title>Staňte se slavnými na Twitter, YouTube, TikTok | Poprey</title>',
            content
        )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Updated meta tags for {file_path}")

def update_meta_tags_it(file_path):
    """Update meta tags for Italian version"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update title and meta tags based on page type
    if 'index.html' in str(file_path):
        content = re.sub(
            r'<title>.*?</title>',
            '<title>Acquista Mi Piace Instagram - 100% Sicurezza e Reali | Poprey</title>',
            content
        )
        content = re.sub(
            r'content=".*?" property="title"',
            'content="Acquista Mi Piace Instagram - 100% Sicuro & Reale | Solo $2.60" property="title"',
            content,
            count=1
        )
        content = re.sub(
            r'content=".*?" name="description"',
            'content="Acquista follower, mi piace e visualizzazioni Instagram da Poprey. Questi sono i modi più sicuri ed economici per ottenere follower reali al 100% con consegna istantanea" name="description"',
            content,
            count=1
        )
    elif 'buy-instagram-followers' in str(file_path):
        content = re.sub(
            r'<title>.*?</title>',
            '<title>Acquista Follower Instagram Economici - Miglior Posto per Follower Organici | Poprey</title>',
            content
        )
    elif 'automatic-instagram-likes' in str(file_path):
        content = re.sub(
            r'<title>.*?</title>',
            '<title>Mi Piace Automatici Instagram - Senza Password | Poprey</title>',
            content
        )
    elif 'buy-instagram-comments' in str(file_path):
        content = re.sub(
            r'<title>.*?</title>',
            '<title>Acquista Commenti Instagram - 100% Anonimi | Poprey</title>',
            content
        )
    elif 'buy-youtube-views' in str(file_path):
        content = re.sub(
            r'<title>.*?</title>',
            '<title>Acquista Visualizzazioni YouTube – Autentiche ed Economiche, 100% Sicure | Poprey</title>',
            content
        )
    elif 'buy-youtube-likes' in str(file_path):
        content = re.sub(
            r'<title>.*?</title>',
            '<title>Acquista Mi Piace YouTube – Efficaci, Coinvolgenti ed Economici a $1.80 | Poprey</title>',
            content
        )
    elif 'services' in str(file_path):
        content = re.sub(
            r'<title>.*?</title>',
            '<title>Diventa Famoso su Twitter, YouTube, TikTok | Poprey</title>',
            content
        )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Updated meta tags for {file_path}")

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
    
    # Update Czech meta tags
    print("\n=== Updating Czech (cs/) meta tags ===")
    for page in pages:
        file_path = base_dir / "cs" / page
        if file_path.exists():
            update_meta_tags_cs(file_path)
    
    # Update Italian meta tags
    print("\n=== Updating Italian (it/) meta tags ===")
    for page in pages:
        file_path = base_dir / "it" / page
        if file_path.exists():
            update_meta_tags_it(file_path)
    
    print("\n✅ Meta tags update complete!")

if __name__ == "__main__":
    main()
