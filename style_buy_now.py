import os
import re

# Logic:
# Scan for <button ... class="... (trial__buy | otherServiceCard__buy-btn | footer__sign-in | footer__contact) ..." ...>
# Add class "global-buy-now"
# Add specific ID

TARGET_EXTENSIONS = ['.html']
SKIP_DIRS = ['.git', 'node_modules', '.vscode', '.gemini', 'assets']

def get_page_name(filepath):
    filename = os.path.basename(filepath)
    name = os.path.splitext(filename)[0]
    return name

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    page_name = get_page_name(filepath)
    
    # Target classes
    target_pattern = r'(trial__buy|otherServiceCard__buy-btn|footer__sign-in|footer__contact)'
    regex = re.compile(r'(<button[^>]*class=["\'][^"\']*(?:' + target_pattern + r')[^"\']*["\'][^>]*>)', re.IGNORECASE)
    
    def replacer(match):
        tag = match.group(1)
        
        # Determine ID based on class
        new_id_suffix = "buy-now-btn" # default
        if "footer__sign-in" in tag:
            new_id_suffix = "footer-account-btn"
        elif "footer__contact" in tag:
             new_id_suffix = "footer-contact-btn"
        
        new_id = f'{page_name}-{new_id_suffix}'

        if 'global-buy-now' not in tag:
            tag = re.sub(r'class=["\']([^"\']*)["\']', r'class="\1 global-buy-now"', tag)
        
        # Remove disabled attribute if present
        # This fixes the issue where buttons were unclickable
        tag = re.sub(r'\s*disabled(?:=["\'](?:disabled)?["\'])?', '', tag, flags=re.IGNORECASE)

        # Add ID if missing 
        # User asked for "class same for all", "id unique". 
        # Adding ID if missing is safer. But earlier I might have added buy-now-btn to these? 
        # No, because regex didn't match them before.
        # So just add ID if missing.
        
        if 'id=' not in tag:
             tag = tag.replace('<button', f'<button id="{new_id}"', 1)
            
        return tag

    new_content, count = regex.subn(replacer, content)
    
    if count > 0:
        print(f"Updated {filepath}: {count} buttons")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    root_dir = os.getcwd()
    total_files = 0
    for dirpath, dirnames, filenames in os.walk(root_dir):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for filename in filenames:
            if filename.endswith('.html'):
                if process_file(os.path.join(dirpath, filename)):
                    total_files += 1
    print(f"Processed {total_files} files.")

if __name__ == "__main__":
    main()
