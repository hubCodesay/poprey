import requests
import re
import os
from html.parser import HTMLParser
import difflib

# Pair mappings: Local File absolute path -> Donor URL
# Pair mappings: Local File absolute path -> Donor URL
BASE_DIR = "/Users/shevskyi/workdir/poprey/ro"
PAIRS = [
    (os.path.join(BASE_DIR, "buy-instagram-comments.html"), "https://poprey.ro/buy-instagram-comments"),
    (os.path.join(BASE_DIR, "buy-youtube-views.html"), "https://poprey.ro/buy-youtube-views"),
    (os.path.join(BASE_DIR, "buy-youtube-likes.html"), "https://poprey.ro/buy-youtube-likes"),
    (os.path.join(BASE_DIR, "services.html"), "https://poprey.ro/services"),
]

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.ignore = False
        self.current_tag = ""
        self.metadata = {"title": "", "description": ""}

    def handle_starttag(self, tag, attrs):
        self.current_tag = tag
        if tag in ["script", "style", "noscript", "svg", "path"]:
            self.ignore = True
        elif tag == "meta":
            attrs_dict = dict(attrs)
            if attrs_dict.get("name") == "description":
                self.metadata["description"] = attrs_dict.get("content", "")
            elif attrs_dict.get("property") == "og:description" and not self.metadata["description"]:
                 self.metadata["description"] = attrs_dict.get("content", "")

    def handle_endtag(self, tag):
        if tag in ["script", "style", "noscript", "svg", "path"]:
            self.ignore = False
        self.current_tag = ""

    def handle_data(self, data):
        if self.current_tag == "title":
            self.metadata["title"] = data.strip()
        
        if not self.ignore:
            content = data.strip()
            if content:
                content = re.sub(r'\s+', ' ', content)
                self.text.append(content)

def extract_content(html_content):
    parser = TextExtractor()
    parser.feed(html_content)
    return parser.text, parser.metadata

def normalize_text(text):
    return re.sub(r'[^\w\s]', '', text).lower().strip()

def compare_files():
    total_files = 0
    total_coverage = 0

    for local_path, remote_url in PAIRS:
        print(f"\n{'='*60}")
        print(f"Checking: {os.path.basename(local_path)}")
        print(f"Against: {remote_url}")
        print(f"{'='*60}")

        if not os.path.exists(local_path):
             print(f"CRITICAL: Local file not found: {local_path}")
             continue
        
        # 1. Read Local
        try:
            with open(local_path, 'r', encoding='utf-8') as f:
                local_html = f.read()
            local_text, local_meta = extract_content(local_html)
        except Exception as e:
            print(f"Error reading local file: {e}")
            continue

        # 2. Fetch Remote
        try:
            response = requests.get(remote_url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'})
            if response.status_code != 200:
                print(f"Failed to fetch remote URL: {response.status_code}")
                continue
            remote_html = response.text
            remote_text, remote_meta = extract_content(remote_html)
        except Exception as e:
            print(f"Error fetching remote URL: {e}")
            continue

        # --- Metadata Check ---
        print("\n[METADATA CHECK]")
        meta_match = True
        if normalize_text(local_meta["title"]) != normalize_text(remote_meta["title"]):
             print(f"  [TITLE MISMATCH]")
             print(f"   Local:  {local_meta['title']}")
             print(f"   Remote: {remote_meta['title']}")
             meta_match = False
        else:
            print("  [TITLE MATCH] OK")

        if normalize_text(local_meta["description"]) != normalize_text(remote_meta["description"]):
             # Description mostly matches?
             s = difflib.SequenceMatcher(None, local_meta["description"], remote_meta["description"])
             if s.ratio() > 0.9:
                 print("  [DESCRIPTION MATCH] OK (Minor diff)")
             else:
                 print(f"  [DESCRIPTION MISMATCH]")
                 print(f"   Local:  {local_meta['description'][:100]}...")
                 print(f"   Remote: {remote_meta['description'][:100]}...")
                 meta_match = False
        else:
            print("  [DESCRIPTION MATCH] OK")

        # --- Content Check ---
        # Build normalized set for fast lookup
        local_norm_set = {normalize_text(t) for t in local_text}
        
        missing_lines = []
        remote_count = 0
        matched_count = 0

        for line in remote_text:
            if len(line) < 3: continue # Skip very short snippets
            if line.isdigit(): continue
            if "$" in line or "€" in line: continue # Skip prices
            
            remote_count += 1
            norm_line = normalize_text(line)
            
            # Exact or Normalized Match
            if norm_line in local_norm_set:
                matched_count += 1
                continue
            
            # Substring Match (Remote line inside a Local line)
            found_sub = False
            for l_line in local_text:
                if line in l_line:
                    found_sub = True
                    break
            if found_sub:
                matched_count += 1
                continue

            missing_lines.append(line)

        coverage = (matched_count / remote_count * 100) if remote_count > 0 else 100
        total_files += 1
        total_coverage += coverage
        
        print(f"\n[CONTENT STATS]")
        print(f"  Remote Text Segments: {remote_count}")
        print(f"  Matched Local:        {matched_count}")
        print(f"  Coverage:             {coverage:.2f}%")
        
        if len(missing_lines) > 0:
            print(f"  Missing Segments (Top 20 by length):")
            # Sort by length to see biggest missing chunks
            missing_lines.sort(key=len, reverse=True)
            for m in missing_lines[:20]:
                print(f"    - '{m}'")

if __name__ == "__main__":
    compare_files()
