from bs4 import BeautifulSoup, Comment
import os
p='/Users/gurgen/CODE/poprey/poprey.com/mirror_poprey_com/poprey.com/services.html'
bak=p+'.precomment_script.bak'
with open(p,'r',encoding='utf-8') as f:
    s=f.read()
if not os.path.exists(bak):
    with open(bak,'w',encoding='utf-8') as f:
        f.write(s)
bs=BeautifulSoup(s,'html.parser')
keys=('googletagmanager','googlesyndication','google-analytics','googletag','analytics','gtag','facebook','cdn.','cdn-cgi','cdn.jsdelivr.net','shopify','apple-pay','applepay','fonts.googleapis','cloudflare','hotjar','lfeeder')

def is_external_uri(u):
    if not u: return False
    u=u.strip()
    if u.startswith('//') or u.startswith('http'):
        return True
    for k in keys:
        if k in u:
            return True
    return False

count=0
for script in bs.find_all('script'):
    src=script.get('src')
    if src and is_external_uri(src):
        script.replace_with(Comment(str(script)))
        count+=1
for link in bs.find_all('link'):
    href=link.get('href')
    if href and is_external_uri(href):
        link.replace_with(Comment(str(link)))
        count+=1
with open(p,'w',encoding='utf-8') as f:
    f.write(bs.prettify())
print('commented',count,'external tags')
print('backup at',bak)
