#!/usr/bin/env python3
"""
Translate Romanian (ro/) pages based on poprey.ro content
"""

import re
from pathlib import Path

# Romanian translations from poprey.ro
ROMANIAN_TRANS = {
    # Page titles
    "Instagram Likes kaufen": "Cumpărați Instagram Îi place",
    "Instagram Follower kaufen": "Cumpărați Instagram Urmăritori",
    "Instagram Auto-Likes kaufen": "Cumpărați Instagram Auto-Like-uri",
    "Instagram Kommentare kaufen": "Cumpărați Instagram comentarii",
    "YouTube Aufrufe kaufen": "Cumpărați YouTube vizualizări",
    "YouTube Likes kaufen": "Cumpărați YouTube Like-uri",
    
    # UI Elements
    "Regulär": "Regular",
    "Regular": "Regular",
    "Prämie": "Premium",
    "Pojistné": "Premium",
    "Bewertungen": "Recenzii",
    "Recenze": "Recenzii",
    "Recensioni": "Recenzii",
    "Mögen": "Like-uri",
    "Líbí": "Like-uri",
    "Mi Piace": "Like-uri",
    "Likes": "Like-uri",
    "Anhänger": "Followeri",
    "Následovníci": "Urmăritori",
    "Follower": "Followeri",
    "Aufrufe": "Vizualizări",
    "Pohledy": "Vizualizări",
    "Visualizzazioni": "Vizualizări",
    "Kommentare": "Comentarii",
    "Komentáře": "comentarii",
    "Commenti": "comentarii",
    "Abonnenten": "Abonați",
    "Odběratele": "Abonați",
    "Iscritti": "Abonați",
    "für": "Pentru",
    "Pro": "Pentru",
    "Per": "Pentru",
    
    # Benefits
    "Sofortiger Start": "Start instantaneu",
    "Okamžitý start": "Start instantaneu",
    "Inizio istantaneo": "Start instantaneu",
    "Die Erfüllung beginnt unmittelbar nach der Zahlung.": "Îndeplinirea începe imediat după plată.",
    "Plnění začíná ihned po zaplacení.": "Îndeplinirea începe imediat după plată.",
    "L'evasione inizia immediatamente dopo il pagamento.": "Îndeplinirea începe imediat după plată.",
    "Dauerhaft": "Permanent",
    "Trvalý": "Permanent",
    "Permanente": "Permanent",
    "Das Ergebnis bleibt Ihnen für immer erhalten.": "Rezultatul va rămâne cu tine pentru totdeauna.",
    "Výsledek vám zůstane navždy.": "Rezultatul va rămâne cu tine pentru totdeauna.",
    "Il risultato rimarrà con te per sempre.": "Rezultatul va rămâne cu tine pentru totdeauna.",
    "Normal aussehend": "Aspect normal",
    "Normální pohled": "Aspect normal",
    "Aspetto normale": "Aspect normal",
    "Konten sehen gut aus.": "Conturile arată bine.",
    "Účetnictví vypadá dobře.": "Conturile arată bine.",
    "Gli account hanno un bell'aspetto.": "Conturile arată bine.",
    "Sofortige / schrittweise Lieferung": "Livrare instantanee / treptată",
    "Okamžité / postupné doručení": "Livrare instantanee / treptată",
    "Consegna istantanea / graduale": "Livrare instantanee / treptată",
    "Sie können die Lieferoption bei der Bestellung wählen.": "Veți putea alege opțiunea de livrare la comandă.",
    "Při objednávání si budete moci vybrat možnost doručení.": "Veți putea alege opțiunea de livrare la comandă.",
    "Potrai scegliere l'opzione di consegna al momento dell'ordine.": "Veți putea alege opțiunea de livrare la comandă.",
    "Sofortige Lieferung": "Livrare instantanee",
    "Okamžité dodávka": "Livrare instantanee",
    "Consegna immediata": "Livrare instantanee",
    "Ihre Bestellung wird sofort nach der Zahlung geliefert.": "Comanda dvs. va fi livrată imediat după plată.",
    "Vaše objednávka bude doručena ihned po zaplacení.": "Comanda dvs. va fi livrată imediat după plată.",
    "Il tuo ordine verrà consegnato immediatamente dopo il pagamento.": "Comanda dvs. va fi livrată imediat după plată.",
    
    # Stats
    "Erreichen": "Acoperire",
    "Dosáhnout": "Acoperire",
    "Copertura": "Acoperire",
    "Speichert": "Salvări",
    "Uloží": "Salvări",
    "Salvataggi": "Salvări",
    "Eindrücke": "Impresii",
    "Zobrazení": "Impresii",
    "Impressioni": "Impresii",
    "Garantie": "Garanție",
    "Záruka": "Garanție",
    "Garanzia": "Garanție",
    
    # Sections
    "Rückmeldung": "Feedback",
    "Zpětná vazba": "Feedback",
    "Vorteile": "Beneficii",
    "Výhody": "Beneficii",
    "Vantaggi": "Beneficii",
    
    # Quality levels
    "Hohe Qualität": "De înaltă calitate",
    "Vysoká jakost": "De înaltă calitate",
    "Alta qualità": "De înaltă calitate",
    "High Quality": "De înaltă calitate",
    
    # Auto-likes specific
    "Bezahlen Sie für Likes": "Plătiți pentru like-uri",
    "Platit za líbí se": "Plătiți pentru like-uri",
    "Paga per i Mi Piace": "Plătiți pentru like-uri",
    "Bezahlen Sie für Likes separat": "Plătiți pentru like-uri separat",
    "Platit za líbí se zvlášť": "Plătiți pentru like-uri separat",
    "Paga per i Mi Piace separatamente": "Plătiți pentru like-uri separat",
    "30-Tage-Abonnement": "Abonament de 30 de zile",
    "30 Denní předplatné": "Abonament de 30 de zile",
    "Abbonamento di 30 giorni": "Abonament de 30 de zile",
    "Manuelle Erneuerung": "Reînnoire manuală",
    "Ruční obnovení": "Reînnoire manuală",
    "Rinnovo manuale": "Reînnoire manuală",
}

# Romanian H1 mappings from poprey.ro
ROMANIAN_H1 = {
    "index.html": "Cumpărați Instagram Îi place",
    "buy-instagram-followers.html": "Cumpărați Instagram Urmăritori",
    "automatic-instagram-likes.html": "Cumpărați Instagram Auto-Like-uri",
    "buy-instagram-comments.html": "Cumpărați Instagram comentarii",
    "buy-youtube-views.html": "Cumpărați YouTube vizualizări",
    "buy-youtube-likes.html": "Cumpărați YouTube Like-uri",
}

def translate_content(content, translations):
    """Apply translations to content"""
    for source, target in translations.items():
        # Replace in text content (between tags)
        content = content.replace(f'>{source}<', f'>{target}<')
        # Replace in attributes
        content = content.replace(f'"{source}"', f'"{target}"')
        content = content.replace(f"'{source}'", f"'{target}'")
    return content

def fix_h1_in_content(content, new_h1_text):
    """Fix H1 tag in content"""
    patterns = [
        (r'(<h1[^>]*>)[^<]+(</h1>)', rf'\1{new_h1_text}\2'),
        (r'(<h1[^>]*>\s*)[^<]+(\s*</h1>)', rf'\1{new_h1_text}\2'),
    ]
    
    for pattern, replacement in patterns:
        new_content = re.sub(pattern, replacement, content, count=1)
        if new_content != content:
            return new_content
    return content

def translate_file(file_path, translations, h1_text=None, lang_code="ro"):
    """Translate a single file"""
    print(f"Translating {file_path.name} to {lang_code}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update lang attribute
    content = re.sub(r'<html lang="[^"]*">', f'<html lang="{lang_code}">', content)
    
    # Apply translations
    content = translate_content(content, translations)
    
    # Fix H1 if provided
    if h1_text:
        content = fix_h1_in_content(content, h1_text)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Translated {file_path.name}")

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
    
    # Translate Romanian pages
    print("\n=== Translating to Romanian (ro/) ===")
    for page in pages:
        file_path = base_dir / "ro" / page
        if file_path.exists():
            h1_text = ROMANIAN_H1.get(page)
            translate_file(file_path, ROMANIAN_TRANS, h1_text, "ro")
        else:
            print(f"⚠ File not found: {file_path}")
    
    # Translate ALL HTML files in Romanian
    print("\n=== Translating all other Romanian HTML files ===")
    ro_dir = base_dir / "ro"
    for html_file in ro_dir.glob("*.html"):
        if html_file.name not in pages:
            translate_file(html_file, ROMANIAN_TRANS, None, "ro")
    
    print("\n✅ Romanian translation complete!")

if __name__ == "__main__":
    main()
