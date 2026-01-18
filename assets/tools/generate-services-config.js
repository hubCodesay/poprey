const fs = require('fs');
const html = fs.readFileSync('services.html','utf8');
const cards = html.split('<div class="otherServiceCard"').slice(1);
const result = { byButtonId: {}, byServiceName: {} };
cards.forEach(c => {
  const marker = '<div class="otherServiceCard__title">';
  const i = c.indexOf(marker);
  if (i === -1) return;
  let titleHTML = c.slice(i + marker.length);
  const end = titleHTML.indexOf('</div>');
  if (end === -1) return;
  titleHTML = titleHTML.slice(0, end).replace(/\n/g,' ').replace(/<img[^>]*>/g,'').trim();
  titleHTML = titleHTML.replace(/\s+/g,' ').trim();
  const title = titleHTML;
  const qtyMatch = c.match(/<div class="quantity__other-text">([^<]+)</);
  const qtyText = qtyMatch?qtyMatch[1].trim():'';
  const qtyNum = (qtyText.match(/([0-9,\.]+)/)||[])[1]||'';
  const incMatch = c.match(/<div class="quantity__other-service-increase[\s\S]*?<p>([0-9,\.]+)<\/p>/);
  const next = (incMatch?incMatch[1]:null);
  const btnMatch = c.match(/<button[^>]*class="otherServiceCard__buy-btn"([^>]*)>([\s\S]*?)<\/button>/);
  let id = null; let price = null;
  if(btnMatch){
    const attr = btnMatch[1];
    const idM = attr.match(/id=\"([^\"]+)\"/);
    if(idM) id = idM[1];
    const txt = btnMatch[2].replace(/\n/g,' ').replace(/<[^>]+>/g,'').trim();
    const pm = txt.match(/([0-9]+[\,\.]?[0-9]*)/);
    if(pm) price = pm[1].replace(',','.');
  }
  if(id){
    result.byButtonId[id] = { serviceName: title, steps: [], prices: {}, defaultPrice: price?Number(price):undefined };
    if(qtyNum) result.byButtonId[id].steps.push(Number(qtyNum));
    if(next) result.byButtonId[id].steps.push(Number(next));
  } else {
    result.byServiceName[title] = { steps: [], prices: {}, defaultPrice: price?Number(price):undefined };
    if(qtyNum) result.byServiceName[title].steps.push(Number(qtyNum));
    if(next) result.byServiceName[title].steps.push(Number(next));
  }
});
console.log(JSON.stringify(result,null,2));
