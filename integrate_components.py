
import os
import re

# Define the paths to start searching
SEARCH_DIRS = ['.'] # Search everything from root

# Regex patterns to find Header and Footer
# Header: <header class="header"> ... </header>
# ServicesNav: <div class="servicesNav"> ... </div> (optional, usually follows header)
# Footer: <footer class="footer"> ... </footer>

# We use DOTALL to match across newlines
HEADER_REGEX = re.compile(r'<header class="header">.*?</header>', re.DOTALL)
SERVICES_NAV_REGEX = re.compile(r'<div class="servicesNav">.*?</div>\s*(?=</div>\s*</section>)', re.DOTALL) # Context wary? Or just remove specifically?
# Better: Remove <div class="servicesNav">...</div> if it appears after the header.

# Simple robust approach:
# 1. Find <header class="header"> ... </header> AND REPLACE with <div id="header-container"></div>
# 2. Find <div class="servicesNav"> ... </div> AND REPLACE with nothing (since it's injected by JS now) - BUT be careful not to remove other things.
#    The servicesNav in index.html is distinct.
# 3. Find <footer class="footer"> ... </footer> AND REPLACE with <div id="footer-container"></div>

# Script Injection
SCRIPT_INJECTION = """
<div id="footer-container"></div>
<script src="assets/js/components.js"></script>
<script src="assets/js/storage.js"></script>
"""

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return

    original_content = content
    modified = False

    # 1. Replace Header
    if '<header class="header">' in content:
        # Check if already replaced (ignoring checking for ID for now, just regex)
        # Actually if we already see id="header-container", skip
        if 'id="header-container"' in content and '<header class="header">' not in content:
             print(f"Skipping Header for {filepath} (already done)")
        else:
            # We want to replace the whole header block
            new_content = HEADER_REGEX.sub('<div id="__next">\n<div id="header-container"></div>', content, count=1)
            
            # The regex above might be too greedy or not greedy enough.
            # Let's try to match specifically.
            # Because regex on HTML is fragile, let's look for specific start/end tags if possible or use the regex carefully.
            # Poprey header seems consistent.
            
            # Use the regex
            content = HEADER_REGEX.sub('<div id="header-container"></div>', content, count=1)
            if content != original_content:
                modified = True
                print(f"Header replaced in {filepath}")

    # 2. Remove ServicesNav (if present and distinct)
    # The servicesNav usually follows the header immediately in the original structure.
    # In components.js it is injected. So we must remove the hardcoded one.
    if '<div class="servicesNav">' in content:
        # We need a robust regex for nested divs? No, usually valid HTML.
        # But allow for simple match
        services_regex = re.compile(r'<div class="servicesNav">.*?</div>\s*</div>', re.DOTALL)
        # Wait, the closing div might be tricky.
        # Let's look at index.html structure:
        # <div class="servicesNav"> ... <nav ...> </nav> ... </div>
        
        # Alternative: Find known unique content inside it?
        # Let's try matching the exact block from one file and generalize? No.
        # Let's use a counter-based approach or just a greedy regex that stops at the right place.
        # Given the complexity, let's remove it if it looks like the standard nav.
        
        content = re.sub(r'<div class="servicesNav">.*?<p class="servicesNav__text">Comments</p>\s*</div>\s*</a>\s*</nav>\s*</div>\s*</div>', '', content, flags=re.DOTALL)
        
        # That's too specific. Let's try a simpler regex that matches the opening class up to the specific closing sequence we know exists in standard files.
        # Standard: ... </nav> </div> </div>
        
        content = re.sub(r'<div class="servicesNav">.*?</nav>\s*</div>\s*</div>', '', content, flags=re.DOTALL)
        
        if content != original_content and not modified: modified = True # Track modification

    # 3. Replace Footer
    # Pattern: <footer class="footer"> ... </footer>
    FOOTER_REGEX = re.compile(r'<footer class="footer">.*?</footer>', re.DOTALL)
    
    if '<footer class="footer">' in content:
        # Check if already done
        if 'id="footer-container"' in content and '<footer class="footer">' not in content:
             pass
        else:
            # We need to inject scripts as well.
            # We replace the footer with container AND scripts.
            # But we should check if scripts already exist?
            # Assuming revert was clean, they don't.
            
            # Fix relative paths for scripts?
            # components.js and storage.js are in assets/js/
            # If file is in subfolder (e.g. es/index.html), src needs to be ../assets/js/
            
            depth = filepath.count('/') - 1 # ./index.html = 0. ./es/index.html = 1
            if filepath.startswith('./'): depth = filepath.count('/') - 2 # readjust
            if depth < 0: depth = 0
            
            prefix = "../" * depth
            
            injection = f"""<div id="footer-container"></div>
<script src="{prefix}assets/js/components.js"></script>
<script src="{prefix}assets/js/storage.js"></script>
"""
            content = FOOTER_REGEX.sub(injection, content, count=1)
            if content != original_content:
                modified = True
                print(f"Footer replaced in {filepath}")

    if modified:
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Saved {filepath}")
        except Exception as e:
            print(f"Error writing {filepath}: {e}")

def main():
    for root, dirs, files in os.walk('.'):
        if '.git' in root: continue
        for file in files:
            if file.endswith('.html'):
                process_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
