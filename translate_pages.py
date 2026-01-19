#!/usr/bin/env python3
"""
Script to translate pages from Czech (poprey.cz) to Czech and Italian versions
"""

import re
from pathlib import Path

# Czech translations from poprey.cz
CZECH_TRANSLATIONS = {
    # Common UI elements
    "Buy Instagram Likes": "Koupit Instagram Líbí se",
    "Buy Instagram Followers": "Koupit následovníky Instagram",
    "Automatic Instagram Likes": "Instagram Auto-Líbí",
    "Buy Instagram Comments": "Koupit komentáře Instagram",
    "Buy YouTube Views": "Koupit pohledy na YouTube",
    "Buy YouTube Likes": "Koupit YouTube líbi",
    "Services": "Služby",
    
    # Quality/Type
    "Regular": "Regular",
    "Premium": "Pojistné",
    "Reviews": "Recenze",
    
    # Service names
    "Likes": "Líbí",
    "Followers": "Následovníci",
    "Auto-Likes": "Auto-Líbí",
    "Views": "Pohledy",
    "Comments": "Komentáře",
    "Subscribers": "Odběratele",
    
    # Common words
    "For": "Pro",
    "Buy": "Koupit",
    "Free": "Zdarma",
    "Trial": "Zkušební",
    
    # Benefits section
    "Benefits": "Výhody",
    "Instant start": "Okamžitý start",
    "Fulfillment starts immediately after payment.": "Plnění začíná ihned po zaplacení.",
    "Permanent": "Trvalý",
    "The result will stay with you forever.": "Výsledek vám zůstane navždy.",
    "Normal looking": "Normální pohled",
    "Accounts look good.": "Účetnictví vypadá dobře.",
    "Instant / Gradual delivery": "Okamžité / postupné doručení",
    "You will be able to choose the delivery option when ordering.": "Při objednávání si budete moci vybrat možnost doručení.",
    
    # Stats
    "Reach": "Dosáhnout",
    "Saves": "Uloží",
    "Impressions": "Zobrazení",
    
    # Sections
    "Feedback": "Zpětná vazba",
    "Why should you buy IG likes?": "Proč byste si měli koupit líbí se na IG?",
    "How can I place an order?": "Jak mohu provést objednávku?",
    "Why choose Poprey? Who is Poprey.com?": "Proč si vybrat Poprey? Kdo je Poprey.com?",
    
    # Steps
    "Choose a package": "Výběr balíčku",
    "Enter data and check out": "Zadejte údaje a odhlaste se",
    "Enjoy the fruits of your labor": "Vychutnejte si plody své práce",
    
    # Footer
    "Company": "Company",
    "Registration": "Registration",
    "Address": "Address",
    "E-mail": "E-mail",
    "Terms of Service": "Smluvní podmínky",
    "Help": "Pomoc",
    "Account": "Účet",
    "FAQ": "FAQ",
    "Contact": "Kontakt",
}

# Italian translations
ITALIAN_TRANSLATIONS = {
    # Common UI elements
    "Buy Instagram Likes": "Acquista Mi Piace Instagram",
    "Buy Instagram Followers": "Acquista Follower Instagram",
    "Automatic Instagram Likes": "Mi Piace Automatici Instagram",
    "Buy Instagram Comments": "Acquista Commenti Instagram",
    "Buy YouTube Views": "Acquista Visualizzazioni YouTube",
    "Buy YouTube Likes": "Acquista Mi Piace YouTube",
    "Services": "Servizi",
    
    # Quality/Type
    "Regular": "Normale",
    "Premium": "Premium",
    "Reviews": "Recensioni",
    
    # Service names
    "Likes": "Mi Piace",
    "Followers": "Follower",
    "Auto-Likes": "Mi Piace Automatici",
    "Views": "Visualizzazioni",
    "Comments": "Commenti",
    "Subscribers": "Iscritti",
    
    # Common words
    "For": "Per",
    "Buy": "Acquista",
    "Free": "Gratis",
    "Trial": "Prova",
    
    # Benefits section
    "Benefits": "Vantaggi",
    "Instant start": "Inizio istantaneo",
    "Fulfillment starts immediately after payment.": "L'evasione inizia immediatamente dopo il pagamento.",
    "Permanent": "Permanente",
    "The result will stay with you forever.": "Il risultato rimarrà con te per sempre.",
    "Normal looking": "Aspetto normale",
    "Accounts look good.": "Gli account hanno un bell'aspetto.",
    "Instant / Gradual delivery": "Consegna istantanea / graduale",
    "You will be able to choose the delivery option when ordering.": "Potrai scegliere l'opzione di consegna al momento dell'ordine.",
    
    # Stats
    "Reach": "Copertura",
    "Saves": "Salvataggi",
    "Impressions": "Impressioni",
    
    # Sections
    "Feedback": "Feedback",
    "Why should you buy IG likes?": "Perché dovresti acquistare Mi Piace su IG?",
    "How can I place an order?": "Come posso effettuare un ordine?",
    "Why choose Poprey? Who is Poprey.com?": "Perché scegliere Poprey? Chi è Poprey.com?",
    
    # Steps
    "Choose a package": "Scegli un pacchetto",
    "Enter data and check out": "Inserisci i dati e procedi al checkout",
    "Enjoy the fruits of your labor": "Goditi i frutti del tuo lavoro",
    
    # Footer
    "Company": "Azienda",
    "Registration": "Registrazione",
    "Address": "Indirizzo",
    "E-mail": "E-mail",
    "Terms of Service": "Termini di servizio",
    "Help": "Aiuto",
    "Account": "Account",
    "FAQ": "FAQ",
    "Contact": "Contatto",
}

def translate_file(source_file, target_file, translations, lang_code):
    """Translate a file using the provided translations dictionary"""
    print(f"Translating {source_file} -> {target_file}")
    
    with open(source_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update lang attribute
    content = re.sub(r'<html lang="[^"]*">', f'<html lang="{lang_code}">', content)
    
    # Apply translations
    for english, translated in translations.items():
        # Be careful with replacements - only replace in text content, not in URLs or code
        # This is a simple approach - for production, you'd want to parse HTML properly
        content = content.replace(f'>{english}<', f'>{translated}<')
        content = content.replace(f'"{english}"', f'"{translated}"')
    
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Translated {target_file}")

def main():
    base_dir = Path(__file__).parent
    
    # Pages to translate
    pages = [
        "index.html",
        "buy-instagram-followers.html",
        "automatic-instagram-likes.html",
        "buy-instagram-comments.html",
        "buy-youtube-views.html",
        "buy-youtube-likes.html",
        "services.html",
    ]
    
    # Translate to Czech
    print("\n=== Translating to Czech (cs/) ===")
    for page in pages:
        source = base_dir / page
        target = base_dir / "cs" / page
        if source.exists():
            translate_file(source, target, CZECH_TRANSLATIONS, "cs")
        else:
            print(f"⚠ Source file not found: {source}")
    
    # Translate to Italian
    print("\n=== Translating to Italian (it/) ===")
    for page in pages:
        source = base_dir / page
        target = base_dir / "it" / page
        if source.exists():
            translate_file(source, target, ITALIAN_TRANSLATIONS, "it")
        else:
            print(f"⚠ Source file not found: {source}")
    
    print("\n✅ Translation complete!")

if __name__ == "__main__":
    main()
