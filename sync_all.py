import os
import re

def sync_file(file_path):
    de_path = os.path.join('de', file_path)
    if not os.path.exists(de_path): return
    
    with open(de_path, 'r', encoding='utf-8') as f: de_content = f.read()
    de_scripts = re.findall(r'<script>(.*?)</script>', de_content, re.DOTALL)
    
    for lang in ['cs', 'es', 'fr', 'it', 'pt', 'ro']:
        target_path = os.path.join(lang, file_path)
        if not os.path.exists(target_path): continue
        
        with open(target_path, 'r', encoding='utf-8') as f: target_content = f.read()
        target_scripts = re.findall(r'<script>(.*?)</script>', target_content, re.DOTALL)
        
        # 1. Sync premium toggle default in index.html
        if file_path == 'index.html':
            target_content = target_content.replace('showTab("regular");', 'showTab("premium");')
            # For index.html, we don't sync the full script because it has hardcoded translations
            with open(target_path, 'w', encoding='utf-8') as f: f.write(target_content)
            continue

        # 2. Sync scripts for logic pages
        new_content = target_content
        for de_s in de_scripts:
            if len(de_s) < 300: continue
            
            # Simple replacement if we find a large script in target
            best_target_script = None
            for ts in target_scripts:
                if len(ts) > 300:
                    best_target_script = ts
                    break
            
            if best_target_script:
                # Since de_s is now robust (uses textContent to get labels), we can sync it directly!
                new_content = new_content.replace(best_target_script, de_s)
        
        # 3. Structural sync (calculators etc)
        # Add id="calculator-..." if missing
        if 'id="calculator' in de_content:
            for cid in ['calculator-reach', 'calculator-impressions', 'calculator-saves']:
                 if f'id="{cid}"' in de_content and f'id="{cid}"' not in new_content:
                    new_content = re.sub(r'class="trial__count active-block"', f'id="{cid}" class="trial__count active-block"', new_content, 1)

        with open(target_path, 'w', encoding='utf-8') as f: f.write(new_content)

all_files = [f for f in os.listdir('de') if f.endswith('.html')]
for f in all_files:
    sync_file(f)
