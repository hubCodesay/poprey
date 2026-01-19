import os

# Logic:
# 1. Walk through all HTML files.
# 2. Check if specific scripts are already present.
# 3. If missing, inject them before </body> or </head>.
# 4. Handle relative paths based on file depth.

SKIP_DIRS = ['.git', 'node_modules', '.vscode', '.gemini']

def get_relative_assets_path(filepath, root_dir):
    # Calculate depth relative to root
    # root/index.html -> assets/js/
    # root/es/index.html -> ../assets/js/
    
    rel_path = os.path.relpath(filepath, root_dir)
    depth = rel_path.count(os.sep)
    
    prefix = ""
    if depth > 0:
        prefix = "../" * depth
    
    return f"{prefix}assets/js/"

def process_file(filepath, root_dir):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return False

    assets_path = get_relative_assets_path(os.path.dirname(filepath), root_dir)
    
    script_config = f'<script src="{assets_path}redirect_config.js" defer></script>'
    script_manager = f'<script src="{assets_path}redirect_manager.js" defer></script>'
    
    # Check regular scripts to update
    updated = False
    
    # Simple check if already exists
    if "redirect_config.js" not in content:
        # Inject before closing body
        if "</body>" in content:
            content = content.replace("</body>", f"{script_config}\n{script_manager}\n</body>")
            updated = True
        elif "</html>" in content:
             content = content.replace("</html>", f"{script_config}\n{script_manager}\n</html>")
             updated = True
        else:
             # Just append? Risk of bad structure, but we fixed structure earlier.
             content += f"\n{script_config}\n{script_manager}"
             updated = True

    if updated:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    root_dir = os.getcwd()
    count = 0
    for dirpath, dirnames, filenames in os.walk(root_dir):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for filename in filenames:
            if filename.endswith('.html') and filename != 'admin_settings.html': # Skip admin page? or include? Include is fine.
                if process_file(os.path.join(dirpath, filename), root_dir):
                    count += 1
    print(f"Injected scripts into {count} files.")

if __name__ == "__main__":
    main()
