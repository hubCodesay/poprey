import os
import re

def make_robust(path):
    with open(path, 'r', encoding='utf-8') as f: content = f.read()
    
    # 1. replace specific "Kosten" pattern in animateValue
    new_content = re.sub(r'animateValue\((els\.totalCost|totalCost),\s*total,\s*true,\s*800,\s*"",\s*" Kosten"\);', 
                        r'const costLabel = \1.textContent.replace(/[0-9.$zł,\\s]+/g, "").trim() || "Kosten";\n        animateValue(\1, total, true, 800, "", " " + costLabel);', 
                        content)
    
    # 2. replace specific "Kosten" pattern in simple textContent assignment
    new_content = re.sub(r'(els\.totalCost|costEl)\.textContent\s*=\s*`?\$?\$\{formatPrice\(total\)\}\s*Kosten`?;',
                        r'const costLabel = \1.textContent.replace(/[0-9.$zł,\\s]+/g, "").trim() || "Kosten";\n          \1.textContent = `$${formatPrice(total)} ${costLabel}`;',
                        new_content)

    # 3. replace fixed "Kosten" in buy-youtube-views style
    new_content = re.sub(r'if \(costEl\) costEl\.textContent = "\$" \+ formatPrice\(total\) \+ " Kosten";',
                        r'if (costEl) {\n            const costLabel = costEl.textContent.replace(/[0-9.$zł,\\s]+/g, "").trim() || "Kosten";\n            costEl.textContent = "$" + formatPrice(total) + " " + costLabel;\n        }',
                        new_content)

    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f: f.write(new_content)
        print(f"Made {path} robust.")

for f in os.listdir('de'):
    if f.endswith('.html'):
        make_robust(os.path.join('de', f))
