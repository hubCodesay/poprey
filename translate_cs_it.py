#!/usr/bin/env python3
"""
Translate pages to Czech and Italian based on poprey.cz content
"""

import re
from pathlib import Path

# Czech translations from poprey.cz
CZECH_TRANS = {
    # Page titles
    "Instagram Likes kaufen": "Koupit Instagram Líbí se",
    "Instagram Follower kaufen": "Koupit následovníky Instagram",
    "Instagram Auto-Likes kaufen": "Koupit Instagram Auto-líbí se",
    "Instagram Kommentare kaufen": "Koupit komentáře Instagram",
    "YouTube Aufrufe kaufen": "Koupit pohledy na YouTube",
    "YouTube Likes kaufen": "Koupit YouTube líbi",
    
    # UI Elements
    "Regulär": "Regular",
    "Prämie": "Pojistné",
    "Bewertungen": "Recenze",
    "Mögen": "Líbí",
    "Likes": "Líbí",
    "Anhänger": "Následovníci",
    "Follower": "Následovníci",
    "Aufrufe": "Pohledy",
    "Kommentare": "Komentáře",
    "Abonnenten": "Odběratele",
    "für": "Pro",
    
    # Benefits
    "Sofortiger Start": "Okamžitý start",
    "Die Erfüllung beginnt unmittelbar nach der Zahlung.": "Plnění začíná ihned po zaplacení.",
    "Dauerhaft": "Trvalý",
    "Das Ergebnis bleibt Ihnen für immer erhalten.": "Výsledek vám zůstane navždy.",
    "Normal aussehend": "Normální pohled",
    "Konten sehen gut aus.": "Účetnictví vypadá dobře.",
    "Sofortige / schrittweise Lieferung": "Okamžité / postupné doručení",
    "Sie können die Lieferoption bei der Bestellung wählen.": "Při objednávání si budete moci vybrat možnost doručení.",
    "Sofortige Lieferung": "Okamžité dodávka",
    "Ihre Bestellung wird sofort nach der Zahlung geliefert.": "Vaše objednávka bude doručena ihned po zaplacení.",
    
    # Stats
    "Erreichen": "Dosáhnout",
    "Speichert": "Uloží",
    "Eindrücke": "Zobrazení",
    "Garantie": "Záruka",
    
    # Sections
    "Rückmeldung": "Zpětná vazba",
    "Vorteile": "Výhody",
    "Warum sollten Sie IG-Likes kaufen?": "Proč byste si měli koupit líbí se na IG?",
    "Wie kann ich eine Bestellung aufgeben?": "Jak mohu provést objednávku?",
    "Warum Poprey wählen? Wer ist Poprey.com?": "Proč si vybrat Poprey? Kdo je Poprey.com?",
    
    # Steps
    "Wählen Sie ein Paket": "Výběr balíčku",
    "Daten eingeben und auschecken": "Zadejte údaje a odhlaste se",
    "Genießen Sie die Früchte Ihrer Arbeit": "Vychutnejte si plody své práce",
    
    # Footer
    "Unternehmen": "Company",
    "Registrierung": "Registration",
    "Adresse": "Address",
    "E-Mail": "E-mail",
    "Nutzungsbedingungen": "Smluvní podmínky",
    "Hilfe": "Pomoc",
    "Konto": "Účet",
    "Kontakt": "Kontakt",
    
    # Free trial
    "Kostenlose Testversion": "Zkušební verze zdarma",
    "Kostenlose": "Zdarma",
    
    # Quality levels
    "Hohe Qualität": "Vysoká jakost",
    "High Quality": "Vysoká jakost",
    
    # Auto-likes specific
    "Bezahlen Sie für Likes": "Platit za líbí se",
    "Bezahlen Sie für Likes separat": "Platit za líbí se zvlášť",
    "30-Tage-Abonnement": "30 Denní předplatné",
    "Manuelle Erneuerung": "Ruční obnovení",
}

# Italian translations
ITALIAN_TRANS = {
    # Page titles
    "Instagram Likes kaufen": "Acquista Mi Piace Instagram",
    "Koupit Instagram Líbí se": "Acquista Mi Piace Instagram",
    "Instagram Follower kaufen": "Acquista Follower Instagram",
    "Koupit následovníky Instagram": "Acquista Follower Instagram",
    "Instagram Auto-Likes kaufen": "Acquista Mi Piace Automatici Instagram",
    "Koupit Instagram Auto-líbí se": "Acquista Mi Piace Automatici Instagram",
    "Instagram Kommentare kaufen": "Acquista Commenti Instagram",
    "Koupit komentáře Instagram": "Acquista Commenti Instagram",
    "YouTube Aufrufe kaufen": "Acquista Visualizzazioni YouTube",
    "Koupit pohledy na YouTube": "Acquista Visualizzazioni YouTube",
    "YouTube Likes kaufen": "Acquista Mi Piace YouTube",
    "Koupit YouTube líbi": "Acquista Mi Piace YouTube",
    
    # UI Elements
    "Regulär": "Normale",
    "Regular": "Normale",
    "Prämie": "Premium",
    "Pojistné": "Premium",
    "Bewertungen": "Recensioni",
    "Recenze": "Recensioni",
    "Mögen": "Mi Piace",
    "Líbí": "Mi Piace",
    "Likes": "Mi Piace",
    "Anhänger": "Follower",
    "Následovníci": "Follower",
    "Follower": "Follower",
    "Aufrufe": "Visualizzazioni",
    "Pohledy": "Visualizzazioni",
    "Kommentare": "Commenti",
    "Komentáře": "Commenti",
    "Abonnenten": "Iscritti",
    "Odběratele": "Iscritti",
    "für": "Per",
    "Pro": "Per",
    
    # Benefits
    "Sofortiger Start": "Inizio istantaneo",
    "Okamžitý start": "Inizio istantaneo",
    "Die Erfüllung beginnt unmittelbar nach der Zahlung.": "L'evasione inizia immediatamente dopo il pagamento.",
    "Plnění začíná ihned po zaplacení.": "L'evasione inizia immediatamente dopo il pagamento.",
    "Dauerhaft": "Permanente",
    "Trvalý": "Permanente",
    "Das Ergebnis bleibt Ihnen für immer erhalten.": "Il risultato rimarrà con te per sempre.",
    "Výsledek vám zůstane navždy.": "Il risultato rimarrà con te per sempre.",
    "Normal aussehend": "Aspetto normale",
    "Normální pohled": "Aspetto normale",
    "Konten sehen gut aus.": "Gli account hanno un bell'aspetto.",
    "Účetnictví vypadá dobře.": "Gli account hanno un bell'aspetto.",
    "Sofortige / schrittweise Lieferung": "Consegna istantanea / graduale",
    "Okamžité / postupné doručení": "Consegna istantanea / graduale",
    "Sie können die Lieferoption bei der Bestellung wählen.": "Potrai scegliere l'opzione di consegna al momento dell'ordine.",
    "Při objednávání si budete moci vybrat možnost doručení.": "Potrai scegliere l'opzione di consegna al momento dell'ordine.",
    "Sofortige Lieferung": "Consegna immediata",
    "Okamžité dodávka": "Consegna immediata",
    "Ihre Bestellung wird sofort nach der Zahlung geliefert.": "Il tuo ordine verrà consegnato immediatamente dopo il pagamento.",
    "Vaše objednávka bude doručena ihned po zaplacení.": "Il tuo ordine verrà consegnato immediatamente dopo il pagamento.",
    
    # Stats
    "Erreichen": "Copertura",
    "Dosáhnout": "Copertura",
    "Speichert": "Salvataggi",
    "Uloží": "Salvataggi",
    "Eindrücke": "Impressioni",
    "Zobrazení": "Impressioni",
    "Garantie": "Garanzia",
    "Záruka": "Garanzia",
    
    # Sections
    "Rückmeldung": "Feedback",
    "Zpětná vazba": "Feedback",
    "Vorteile": "Vantaggi",
    "Výhody": "Vantaggi",
    "Warum sollten Sie IG-Likes kaufen?": "Perché dovresti acquistare Mi Piace su IG?",
    "Proč byste si měli koupit líbí se na IG?": "Perché dovresti acquistare Mi Piace su IG?",
    "Wie kann ich eine Bestellung aufgeben?": "Come posso effettuare un ordine?",
    "Jak mohu provést objednávku?": "Come posso effettuare un ordine?",
    "Warum Poprey wählen? Wer ist Poprey.com?": "Perché scegliere Poprey? Chi è Poprey.com?",
    "Proč si vybrat Poprey? Kdo je Poprey.com?": "Perché scegliere Poprey? Chi è Poprey.com?",
    
    # Steps
    "Wählen Sie ein Paket": "Scegli un pacchetto",
    "Výběr balíčku": "Scegli un pacchetto",
    "Daten eingeben und auschecken": "Inserisci i dati e procedi al checkout",
    "Zadejte údaje a odhlaste se": "Inserisci i dati e procedi al checkout",
    "Genießen Sie die Früchte Ihrer Arbeit": "Goditi i frutti del tuo lavoro",
    "Vychutnejte si plody své práce": "Goditi i frutti del tuo lavoro",
    
    # Footer
    "Unternehmen": "Azienda",
    "Company": "Azienda",
    "Registrierung": "Registrazione",
    "Registration": "Registrazione",
    "Adresse": "Indirizzo",
    "Address": "Indirizzo",
    "E-Mail": "E-mail",
    "E-mail": "E-mail",
    "Nutzungsbedingungen": "Termini di servizio",
    "Smluvní podmínky": "Termini di servizio",
    "Hilfe": "Aiuto",
    "Pomoc": "Aiuto",
    "Konto": "Account",
    "Účet": "Account",
    "Kontakt": "Contatto",
    
    # Free trial
    "Kostenlose Testversion": "Prova gratuita",
    "Zkušební verze zdarma": "Prova gratuita",
    "Kostenlose": "Gratis",
    "Zdarma": "Gratis",
    
    # Quality levels
    "Hohe Qualität": "Alta qualità",
    "Vysoká jakost": "Alta qualità",
    "High Quality": "Alta qualità",
    
    # Auto-likes specific
    "Bezahlen Sie für Likes": "Paga per i Mi Piace",
    "Platit za líbí se": "Paga per i Mi Piace",
    "Bezahlen Sie für Likes separat": "Paga per i Mi Piace separatamente",
    "Platit za líbí se zvlášť": "Paga per i Mi Piace separatamente",
    "30-Tage-Abonnement": "Abbonamento di 30 giorni",
    "30 Denní předplatné": "Abbonamento di 30 giorni",
    "Manuelle Erneuerung": "Rinnovo manuale",
    "Ruční obnovení": "Rinnovo manuale",
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

def translate_file(file_path, translations, lang_code):
    """Translate a single file"""
    print(f"Translating {file_path} to {lang_code}...")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update lang attribute
    content = re.sub(r'<html lang="[^"]*">', f'<html lang="{lang_code}">', content)
    
    # Apply translations
    content = translate_content(content, translations)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Translated {file_path}")

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
    
    # Translate Czech pages
    print("\n=== Translating to Czech (cs/) ===")
    for page in pages:
        file_path = base_dir / "cs" / page
        if file_path.exists():
            translate_file(file_path, CZECH_TRANS, "cs")
        else:
            print(f"⚠ File not found: {file_path}")
    
    # Translate Italian pages
    print("\n=== Translating to Italian (it/) ===")
    for page in pages:
        file_path = base_dir / "it" / page
        if file_path.exists():
            translate_file(file_path, ITALIAN_TRANS, "it")
        else:
            print(f"⚠ File not found: {file_path}")
    
    print("\n✅ Translation complete!")

if __name__ == "__main__":
    main()
