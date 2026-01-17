(function () {
                            function showTab(type) {
                              var regBox = document.querySelector('.box_regular');
                              var premBox = document.querySelector('.box_premium');
                              if (regBox) regBox.style.display = type === 'regular' ? '' : 'none';
                              if (premBox) premBox.style.display = type === 'premium' ? '' : 'none';

                              // toggle active classes on text/buttons
                              var whiteText = document.querySelector('.servicesList__white-text');
                              var colorText = document.querySelector('.servicesList__color-text');
                              if (whiteText) whiteText.classList.toggle('active', type === 'regular');
                              if (colorText) colorText.classList.toggle('active', type === 'premium');

                              // visual hint on blocks
                              document.querySelectorAll('.regular_btn, .premium_btn').forEach(function (el) {
                                el.classList.remove('local-block--active');
                                // ensure tabs remain clickable even if other elements overlap
                                try { el.style.pointerEvents = 'auto'; el.style.zIndex = '9999'; if (!el.style.position) el.style.position = 'relative'; } catch (e) {}
                              });
                              var rbtn = document.querySelector('.regular_btn');
                              var pbtn = document.querySelector('.premium_btn');
                              if (type === 'regular' && rbtn) rbtn.classList.add('local-block--active');
                              if (type === 'premium' && pbtn) pbtn.classList.add('local-block--active');

                              // swap quality images: set colored when regular active, white when not
                              (function () {
                                var imgs = document.querySelectorAll('.servicesList__quality-img img[alt="quality"]');
                                if (!imgs || imgs.length === 0) return;
                                var colored = 'assets/images/quality.921b7b8ec8ed7b3d499e822761d21261.png';
                                var white = 'assets/images/quality_white.1d4db15194f1398ec0490844093d10fb.png';
                                // prefer actual active state on the buttons (handles inversion)
                                var activeIsRegular = false;
                                try {
                                  activeIsRegular = document.querySelector('.regular_btn')?.classList.contains('local-block--active');
                                } catch (e) { activeIsRegular = (type === 'regular'); }
                                imgs.forEach(function (img) {
                                  // when regular is active -> show WHITE; when not active -> show COLORED
                                  var target = activeIsRegular ? white : colored;
                                  if (img.getAttribute('src') !== target) {
                                    img.setAttribute('src', target);
                                    if (img.hasAttribute('srcset')) img.removeAttribute('srcset');
                                  }
                                });
                              })();

                              // swap crown images: when premium is active -> white crown, otherwise colored crown
                              (function () {
                                var crowns = document.querySelectorAll('.servicesList__crown-img img[alt="crown"]');
                                if (!crowns || crowns.length === 0) return;
                                var whiteCrown = 'assets/images/crown_white.13ec5a923028b7c79617258e2b732268.png';
                                var coloredCrown = 'assets/images/crown.164f2d65ae189c29cb6d9eeed7e9ad89.png';
                                var premiumActive = false;
                                try { premiumActive = document.querySelector('.premium_btn')?.classList.contains('local-block--active'); } catch (e) { premiumActive = (type === 'premium'); }
                                crowns.forEach(function (img) {
                                  var target = premiumActive ? whiteCrown : coloredCrown;
                                  if (img.getAttribute('src') !== target) {
                                    img.setAttribute('src', target);
                                    if (img.hasAttribute('srcset')) img.removeAttribute('srcset');
                                  }
                                });
                              })();

                              // swap specific benefit (Normal Looking) text + icon when premium is active
                              (function () {
                                var premiumActive = false;
                                try { premiumActive = document.querySelector('.premium_btn')?.classList.contains('local-block--active'); } catch (e) { premiumActive = (type === 'premium'); }
                                // find the benefits block where title === 'Normal Looking'
                                var subtitles = document.querySelectorAll('.benefitsOld__subtitle');
                                subtitles.forEach(function (h4) {
                                  var txt = (h4.textContent || '').trim();
                                  if (txt === 'Normal Looking' || txt === 'Real looking') {
                                    var p = h4.parentElement.querySelector('.benefitsOld__text');
                                    var iconImg = null;
                                    // icon is in a preceding sibling with class .benefitsOld__icons-cirkul
                                    var parent = h4.parentElement;
                                    var prev = parent.previousElementSibling;
                                    if (prev && prev.querySelector) {
                                      iconImg = prev.querySelector('img[alt="benefit"]');
                                    }
                                    if (premiumActive) {
                                      h4.textContent = 'Real looking';
                                      if (p) p.textContent = 'Accounts are looking fully legit.';
                                      if (iconImg) iconImg.setAttribute('src', 'assets/images/star.aadd038a9aafbaafd71fc694a371dba0.png');
                                    } else {
                                      h4.textContent = 'Normal Looking';
                                      if (p) p.textContent = 'The accounts are looking good.';
                                      if (iconImg) iconImg.setAttribute('src', 'assets/images/like.990bc77e67ff3bb06dc8df2fc6860b58.png');
                                    }
                                  }
                                });
                              })();
                            }

                            document.addEventListener('DOMContentLoaded', function () {
                              var r = document.querySelector('.regular_btn');
                              var p = document.querySelector('.premium_btn');
                              if (r) {
                                r.style.cursor = 'pointer';
                                r.style.pointerEvents = 'auto';
                                r.style.zIndex = '9999';
                                if (!r.style.position) r.style.position = 'relative';
                                r.addEventListener('click', function () { showTab('regular'); });
                              }
                              if (p) {
                                p.style.cursor = 'pointer';
                                p.style.pointerEvents = 'auto';
                                p.style.zIndex = '9999';
                                if (!p.style.position) p.style.position = 'relative';
                                p.addEventListener('click', function () { showTab('premium'); });
                              }

                              // ensure both boxes exist; if not, no-op. Start on regular by default.
                              showTab('regular');
                            });
                          })();

(function(){
              // Simple trial calculator: wire plus/minus buttons and update right-side numbers
              function qs(sel, ctx){ return (ctx||document).querySelector(sel); }
              function qsa(sel, ctx){ return Array.prototype.slice.call((ctx||document).querySelectorAll(sel)); }

              var steps = [2500,2500,50]; // Reach, Impressions, Saves
              var values = [0,0,0];
              // extra cost added each time a trial '+' is clicked (2 USD per click)
              var plusExtra = 0;
              // try to pick likes from a visible box (200 if present), fallback to 200
              var likesVal = 200;
              var selectedPrice = null;
              var boxCount = qs('.box_regular .box__count');
              if(boxCount){ var n = parseInt(boxCount.textContent.replace(/[^0-9]/g,'')); if(!isNaN(n) && n>0) likesVal = n; }

              var trialCounts = qsa('.trial__container .trial__count');
              // maxima for [Reach, Impressions, Saves]
              var maxValues = [80000, 120000, 1500];
              trialCounts.forEach(function(block, idx){
                var minus = block.querySelector('.trial__cirkul-minus');
                // plus is the last .trial__cirkul inside the block
                var cirkuls = block.querySelectorAll('.trial__cirkul');
                var plus = cirkuls[cirkuls.length-1];
                // set initial number display
                var numEls = block.querySelectorAll('.trial__count-text-desktop');
                if(numEls && numEls.length>0){
                  numEls[0].textContent = values[idx];
                }
                var mob = block.querySelector('.trial__count-text-mobile');
                if(mob) mob.textContent = values[idx] + ' ' + (mob.textContent||'');

                function updateDisplay(){
                  var n = values[idx];
                  if(numEls && numEls.length>0) numEls[0].textContent = n;
                  if(mob){
                    var label = (mob.textContent||'').replace(/^\d+\s*/, '');
                    mob.textContent = n + ' ' + label.trim();
                  }
                  refreshSideNumbers();
                }

                if(plus){ plus.style.cursor='pointer'; plus.addEventListener('click', function(){
                  var step = (steps[idx]||1);
                  var candidate = values[idx] + step;
                  if(maxValues[idx] && candidate > maxValues[idx]) candidate = maxValues[idx];
                  if(candidate > values[idx]){
                    values[idx] = candidate;
                    plusExtra += 2;
                    updateDisplay();
                  }
                }); }
                if(minus){ minus.style.cursor='pointer'; minus.addEventListener('click', function(){
                  var step = (steps[idx]||1);
                  var candidate = Math.max(0, values[idx] - step);
                  if(candidate < values[idx]){
                    values[idx] = candidate;
                    if(plusExtra >= 2) plusExtra -= 2;
                    updateDisplay();
                  }
                }); }
              });

              function refreshSideNumbers(){
                var sideNums = qsa('.trial__percent-icon .trial__count-number');
                // order: Likes, Reach, Impressions, Saves
                if(sideNums.length>=4){
                  sideNums[0].textContent = likesVal; // Likes
                  sideNums[1].textContent = values[0]; // Reach
                  sideNums[2].textContent = values[1]; // Impressions
                  sideNums[3].textContent = values[2]; // Saves
                }
                // percent: simple proportional estimate based on saves (50 -> 6%)
                var pctEl = qs('.trial__percent');
                if(pctEl){
                  var pct = Math.round(values[2]/50*6);
                  pct = Math.min(100, Math.max(0, pct));
                  pctEl.textContent = pct + '%';
                }

                // update cost display: selected option price + selected add-ons
                var costEl = qs('.trial__text-cost');
                if(costEl){
                  // get selected card's price
                  var selCard = qs('.box .box__card.trial-selected');
                  var selPrice = null;
                  if(selCard){
                    var selPriceEl = selCard.querySelector('.box__service-name');
                    if(selPriceEl){
                      var txt = (selPriceEl.textContent||'').trim();
                      var matches = txt.match(/([0-9]+[\.,][0-9]+|[0-9]+)/g);
                      if(matches && matches.length){
                        var last = matches[matches.length-1].replace(',','.');
                        var p = parseFloat(last);
                        if(!isNaN(p)) selPrice = p;
                      }
                    }
                  }
                  if(selPrice === null){ selPrice = (selectedPrice!==null?selectedPrice:null); }
                  if(selPrice === null){ var baseLikes = 200, basePrice = 5.05; selPrice = (likesVal / baseLikes) * basePrice; }

                  // sum add-ons: checkbox inputs with class .addon-checkbox and data-price, or .addon[data-price].selected
                  var addonsTotal = 0;
                  var addonChecks = qsa('.addon-checkbox:checked');
                  addonChecks.forEach(function(ch){ var v = parseFloat(ch.getAttribute('data-price')||ch.value||0); if(!isNaN(v)) addonsTotal += v; });
                  if(addonsTotal === 0){
                    var addonEls = qsa('.addon[data-price]');
                    addonEls.forEach(function(a){ var sel = a.getAttribute('data-selected'); if(sel==='true' || a.classList.contains('selected')){ var p = parseFloat(a.getAttribute('data-price')||a.textContent.replace(/[^0-9\.,]/g,'').replace(',','.')); if(!isNaN(p)) addonsTotal += p; } });
                  }

                  var total = (parseFloat(selPrice)||0) + addonsTotal + (parseFloat(plusExtra)||0);
                  var priceText = total>0? '$' + total.toFixed(2) : '$0.00';
                  // write as HTML and expose data attribute for easier debugging
                  try{ costEl.innerHTML = '<span class="trial__price">' + priceText + '</span>'; costEl.setAttribute('data-last-price', priceText); }catch(e){ try{ costEl.textContent = priceText; }catch(e){} }
                }

                // enable buy if price >= 0 (always enable for testing)
                var buy = qs('.trial__buy'); if(buy){ buy.disabled = false; }
              }

              // Wire clicks on product boxes to update calculator
              var products = [];
              function attachBoxHandlers(){
                products = [];
                var cards = qsa('.box .box__card');
                cards.forEach(function(card, idx){
                  // build product descriptor for easy config
                  var countEl = card.querySelector('.box__count, .quantity__count, .quantity__text .quantity__count');
                  var priceEl = card.querySelector('.box__service-name');
                  var pid = card.getAttribute('id') || ('prod_' + idx);
                  var prod = {
                    id: pid,
                    card: card,
                    countEl: countEl,
                    priceEl: priceEl,
                    selected: false,
                    getCount: function(){ if(!this.countEl) return null; var v=(this.countEl.textContent||'').replace(/[^0-9]/g,''); var n=parseInt(v,10); return isNaN(n)?null:n; },
                    setCount: function(n){ if(!this.countEl) return; try{ this.countEl.textContent = n.toLocaleString(); }catch(e){ this.countEl.textContent = String(n); } },
                    getPrice: function(){ if(!this.priceEl) return null; var txt=(this.priceEl.textContent||'').trim(); var m=txt.match(/([0-9]+[\.,][0-9]+|[0-9]+)/g); if(m && m.length){ var last=m[m.length-1].replace(',','.'); var p=parseFloat(last); return isNaN(p)?null:p; } return null; },
                    setPrice: function(p){ if(!this.priceEl) return; this.priceEl.innerHTML = '<span> Likes </span> For $' + (parseFloat(p)||0).toFixed(2); }
                  };
                  products.push(prod);

                  // basic click -> select this product and update calculator
                  card.style.cursor = 'pointer';
                  card.addEventListener('click', function(e){
                    products.forEach(function(p){ p.selected = false; p.card.classList.remove('trial-selected'); });
                    prod.selected = true; prod.card.classList.add('trial-selected');
                    var newLikes = prod.getCount(); if(newLikes !== null) likesVal = newLikes;
                    var pprice = prod.getPrice(); selectedPrice = pprice !== null? pprice : selectedPrice;
                    refreshSideNumbers();
                    // (no scrolling) keep selection visible without moving the viewport
                  });

                  // special handling for inline quantity controls (e.g., 20,000 card)
                  var qPlus = card.querySelector('.quantity__control-plus');
                  var qMinus = card.querySelector('.quantity__control-minus');
                  if(qPlus || qMinus){
                    var MIN_COUNT = 20000;
                    if(qPlus){ qPlus.style.cursor='pointer'; qPlus.addEventListener('click', function(ev){ ev.stopPropagation(); var cur = prod.getCount()||MIN_COUNT; var newC, newP; if(cur < 50000){ newC = 50000; newP = 250.00; } else { newC = cur; newP = prod.getPrice()||250.00; } prod.setCount(newC); prod.setPrice(newP); likesVal = newC; selectedPrice = newP; products.forEach(function(p){ p.selected = false; p.card.classList.remove('trial-selected'); }); prod.selected = true; prod.card.classList.add('trial-selected'); refreshSideNumbers(); }); }
                    if(qMinus){ qMinus.style.cursor='pointer'; qMinus.addEventListener('click', function(ev){ ev.stopPropagation(); var cur = prod.getCount()||MIN_COUNT; var newC, newP; if(cur > 20000){ newC = 20000; newP = 200.00; } else { newC = cur; newP = prod.getPrice()||200.00; } prod.setCount(newC); prod.setPrice(newP); likesVal = newC; selectedPrice = newP; products.forEach(function(p){ p.selected = false; p.card.classList.remove('trial-selected'); }); prod.selected = true; prod.card.classList.add('trial-selected'); refreshSideNumbers(); }); }
                  }
                });

                // set initial selected card by likesVal (robust across environments)
                var init = null;
                var allCards = qsa('.box .box__card');
                if (allCards && allCards.length) {
                  if (Array.prototype.find) {
                    init = allCards.find(function(c){ var ce=c.querySelector('.box__count'); return ce && parseInt((ce.textContent||'').replace(/[^0-9]/g,''))===likesVal; });
                  } else {
                    for (var i=0;i<allCards.length;i++){ var ce=allCards[i].querySelector('.box__count'); if(ce && parseInt((ce.textContent||'').replace(/[^0-9]/g,''))===likesVal){ init=allCards[i]; break; } }
                  }
                  if(!init) init = allCards[0];
                }
                if(init){
                  // mark DOM & sync with products array so selectedPrice/likesVal get set
                  init.classList.add('trial-selected');
                  var matching = null;
                  if (products && products.length) {
                    if (Array.prototype.find) matching = products.find(function(p){ return p.card === init; });
                    if (!matching) {
                      for (var ii=0; ii<products.length; ii++){ if (products[ii].card === init){ matching = products[ii]; break; } }
                    }
                  }
                  if (matching) {
                    matching.selected = true;
                    matching.card.classList.add('trial-selected');
                    var pprice = matching.getPrice(); if (pprice !== null) selectedPrice = pprice;
                    var cnt = matching.getCount(); if (cnt !== null) likesVal = cnt;
                  } else {
                    // fallback: try to parse price from DOM
                    var pEl = init.querySelector('.box__service-name');
                    if(pEl){ var mm = (pEl.textContent||'').match(/([0-9]+[\.,][0-9]+|[0-9]+)/); if(mm) selectedPrice = parseFloat(mm[mm.length-1].replace(',','.')); }
                  }
                }
              }

              function ensureDefaultSelection(){
                if(!products || products.length===0) return;
                // prefer already-marked selected product, otherwise pick first
                var sel = products.find(function(p){ return p.selected || p.card.classList.contains('trial-selected'); }) || products[0];
                products.forEach(function(p){ p.selected = false; p.card.classList.remove('trial-selected'); });
                sel.selected = true; sel.card.classList.add('trial-selected');
                var pprice = sel.getPrice(); if(pprice !== null) selectedPrice = pprice;
                var cnt = sel.getCount(); if(cnt !== null) likesVal = cnt;
                // refresh numbers immediately after ensuring selection
                try{ refreshSideNumbers(); }catch(e){}
              }

              document.addEventListener('DOMContentLoaded', function(){ attachBoxHandlers(); ensureDefaultSelection(); refreshSideNumbers(); });
              // also run immediately in case DOM already loaded
              attachBoxHandlers(); ensureDefaultSelection(); refreshSideNumbers();
            })();
