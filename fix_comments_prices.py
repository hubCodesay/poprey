import os
import re

def fix_file(file_path):
    print(f"Processing {file_path}")
    with open(file_path, 'r') as f:
        content = f.read()

    # Pattern to find price blocks and normalize them
    # Targets: <p class="box__service-name box__service-name-mt"> ... </p>
    pattern = r'(<p class="box__service-name box__service-name-mt">)(.*?)(</p>)'
    
    def replace_price(match):
        # We use a generic "For 0.00" or similar, or just clear it. 
        # The script will hydrate it.
        return match.group(1) + '\n                          For 0.00\n                        ' + match.group(3)

    new_content = re.sub(pattern, replace_price, content, flags=re.DOTALL)
    
    # Also fix the inner HTML logic if it's the old version
    # Looking for: For $5.90 (older hardcoded variants)
    new_content = re.sub(r'For \$\d+\.\d+', 'For 0.00', new_content)

    with open(file_path, 'w') as f:
        f.write(new_content)

# Find all buy-instagram-comments.html files
for root, dirs, files in os.walk('.'):
    for file in files:
        if file == "buy-instagram-comments.html":
            fix_file(os.path.join(root, file))

print("Cleaned up prices in all comments pages.")
