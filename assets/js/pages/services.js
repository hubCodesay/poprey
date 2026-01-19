// assets/js/pages/services.js
document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------
  // 1) СОРТУВАННЯ (ФІЛЬТР) ПО data-sort
  // ----------------------------
  const tabsWrap = document.querySelector(".otherServices__services");
  const lists = Array.from(document.querySelectorAll(".systemList"));

  function setActiveTab(clickedTab) {
    const tabs = Array.from(tabsWrap.querySelectorAll("div[data-sort]"));
    tabs.forEach((t) => {
      t.classList.remove("otherServices__active");
      t.classList.add("otherServices__not-active");
    });
    clickedTab.classList.add("otherServices__active");
    clickedTab.classList.remove("otherServices__not-active");
  }

  function applyFilter(filter) {
    lists.forEach((list) => {
      const listSort = (list.getAttribute("data-sort") || "").trim();
      const show = filter === "all" || listSort === filter;
      list.style.display = show ? "" : "none";
    });
  }

  if (tabsWrap) {
    tabsWrap.addEventListener("click", (e) => {
      const tab = e.target.closest("div[data-sort]");
      if (!tab) return;

      const filter = tab.getAttribute("data-sort");
      setActiveTab(tab);
      applyFilter(filter);
    });

    // старт: показати "All"
    const initial =
      tabsWrap.querySelector("div[data-sort].otherServices__active") ||
      tabsWrap.querySelector('div[data-sort="all"]');
    if (initial) {
      setActiveTab(initial);
      applyFilter(initial.getAttribute("data-sort"));
    }
  }

  // ----------------------------
  // 2) QUANTITY + / - (пакетна логіка)
  // ----------------------------
  // Типова "драбинка" пакетів (можеш змінити під себе)
  const DEFAULT_STEPS = [
    10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000,
  ];

  function parseQtyText(text) {
    // "100 Followers" -> { qty: 100, unit: "Followers" }
    const m = String(text)
      .trim()
      .match(/^(\d+)\s+(.*)$/);
    if (!m) return { qty: 0, unit: "" };
    return { qty: parseInt(m[1], 10), unit: m[2].trim() };
  }

  function nearestIndex(steps, qty) {
    // знайти найближчий крок у steps
    let best = 0;
    let bestDiff = Infinity;
    for (let i = 0; i < steps.length; i++) {
      const d = Math.abs(steps[i] - qty);
      if (d < bestDiff) {
        bestDiff = d;
        best = i;
      }
    }
    return best;
  }

  function setDisabled(btnEl, disabled) {
    if (!btnEl) return;
    btnEl.classList.toggle("quantity__disabled", !!disabled);
  }

  // Дозволяє задавати кастомні пакети через data-steps на .otherServiceCard:
  // <div class="otherServiceCard" data-steps="100,250,500,1000">
  function getStepsForCard(card) {
    const raw = card?.getAttribute("data-steps");
    if (!raw) return DEFAULT_STEPS;
    const steps = raw
      .split(",")
      .map((x) => parseInt(x.trim(), 10))
      .filter((n) => Number.isFinite(n) && n > 0);
    return steps.length ? steps : DEFAULT_STEPS;
  }

  // Якщо хочеш, щоб змінювалась ціна/ID як в “оригіналі” —
  // додай data-prices і data-ids (по індексу steps) на card:
  // data-prices="7.50,9.90,..."  data-ids="250TFOL,500TFOL,..."
  function applyPriceAndId(card, idx) {
    const btn = card.querySelector(".otherServiceCard__buy-btn");
    if (!btn) return;

    const pricesRaw = card.getAttribute("data-prices");
    if (pricesRaw) {
      const prices = pricesRaw.split(",").map((x) => x.trim());
      if (prices[idx]) {
        // Витягуємо валюту/формат з поточного тексту кнопки (щоб не ламати стилі)
        // "Buy Now (7.50) zł"
        btn.textContent = btn.textContent.replace(
          /\([\d.,]+\)\s*[^)]*$/,
          `(${prices[idx]}) zł`,
        );
      }
    }

    const idsRaw = card.getAttribute("data-ids");
    if (idsRaw) {
      const ids = idsRaw.split(",").map((x) => x.trim());
      if (ids[idx]) btn.id = ids[idx];
    }
  }

  document.addEventListener("click", (e) => {
    const inc = e.target.closest(".quantity__other-service-increase");
    const dec = e.target.closest(".quantity__other-service-decrease");
    if (!inc && !dec) return;

    const card = e.target.closest(".otherServiceCard");
    if (!card) return;

    const steps = getStepsForCard(card);

    const textEl = card.querySelector(".quantity__other-text");
    const incEl = card.querySelector(".quantity__other-service-increase");
    const decEl = card.querySelector(".quantity__other-service-decrease");
    if (!textEl || !incEl || !decEl) return;

    const { qty, unit } = parseQtyText(textEl.textContent);
    let idx = nearestIndex(steps, qty);

    // клік по + / -
    if (inc) idx = Math.min(idx + 1, steps.length - 1);
    if (dec) idx = Math.max(idx - 1, 0);

    // оновити текст
    const newQty = steps[idx];
    textEl.textContent = `${newQty} ${unit}`;

    // оновити підказки на + (показуємо наступний крок числом у другому <p>)
    const incHint = incEl.querySelector("p:nth-child(2)");
    if (incHint)
      incHint.textContent = steps[Math.min(idx + 1, steps.length - 1)];

    // оновити disabled-стани
    setDisabled(decEl, idx === 0);
    setDisabled(incEl, idx === steps.length - 1);

    // за бажанням: ціна/ID
    applyPriceAndId(card, idx);
  });

  // стартово виставити disabled для всіх карток
  document.querySelectorAll(".otherServiceCard").forEach((card) => {
    const steps = getStepsForCard(card);
    const textEl = card.querySelector(".quantity__other-text");
    const incEl = card.querySelector(".quantity__other-service-increase");
    const decEl = card.querySelector(".quantity__other-service-decrease");
    if (!textEl || !incEl || !decEl) return;

    const { qty } = parseQtyText(textEl.textContent);
    const idx = nearestIndex(steps, qty);

    const incHint = incEl.querySelector("p:nth-child(2)");
    if (incHint)
      incHint.textContent = steps[Math.min(idx + 1, steps.length - 1)];

    setDisabled(decEl, idx === 0);
    setDisabled(incEl, idx === steps.length - 1);

    applyPriceAndId(card, idx);
  });
});

// assets/js/pages/services.js
document.addEventListener("DOMContentLoaded", () => {
  // =========================================================
  // A) FILTER / SORT BY data-sort (tabs -> systemList)
  // =========================================================
  const tabsWrap = document.querySelector(".otherServices__services");
  const lists = Array.from(document.querySelectorAll(".systemList"));

  function setActiveTab(clickedTab) {
    if (!tabsWrap) return;
    const tabs = Array.from(tabsWrap.querySelectorAll("div[data-sort]"));
    tabs.forEach((t) => {
      t.classList.remove("otherServices__active");
      t.classList.add("otherServices__not-active");
    });
    clickedTab.classList.add("otherServices__active");
    clickedTab.classList.remove("otherServices__not-active");
  }

  function applyFilter(filter) {
    lists.forEach((list) => {
      const listSort = (list.getAttribute("data-sort") || "").trim();
      const show = filter === "all" || listSort === filter;
      list.style.display = show ? "" : "none";
    });
  }

  if (tabsWrap) {
    tabsWrap.addEventListener("click", (e) => {
      const tab = e.target.closest("div[data-sort]");
      if (!tab) return;

      const filter = (tab.getAttribute("data-sort") || "all").trim();
      setActiveTab(tab);
      applyFilter(filter);
    });

    // initial
    const initial =
      tabsWrap.querySelector("div[data-sort].otherServices__active") ||
      tabsWrap.querySelector('div[data-sort="all"]');

    if (initial) {
      setActiveTab(initial);
      applyFilter((initial.getAttribute("data-sort") || "all").trim());
    }
  }

  // =========================================================
  // B) QUANTITY + / - with PACKAGES (qty + price + id)
  // =========================================================
  // Ключ = data-key на кнопці .otherServiceCard__buy-btn
  // Тут ти задаєш "драбинку" пакетів і ціни для кожного сервісу.
  const PACKAGES = {
    TFOL: [
      { qty: 100, price: 7.5, id: "100TFOL" },
      { qty: 250, price: 7.5, id: "250TFOL" },
      { qty: 500, price: 12.9, id: "500TFOL" },
      { qty: 1000, price: 22.9, id: "1000TFOL" },
    ],
    TLIK: [
      { qty: 250, price: 3.6, id: "250TLIK" },
      { qty: 500, price: 5.9, id: "500TLIK" },
      { qty: 1000, price: 9.9, id: "1000TLIK" },
    ],
    TVIE: [
      { qty: 500, price: 3.6, id: "500TVIE" },
      { qty: 1000, price: 3.6, id: "1000TVIE" }, // підстав свої ціни
      { qty: 2500, price: 12.9, id: "2500TVIE" },
    ],
    TPOST: [
      { qty: 250, price: 3.6, id: "250TPOST" },
      { qty: 500, price: 5.9, id: "500TPOST" },
      { qty: 1000, price: 9.9, id: "1000TPOST" },
    ],
    // Можеш додати інші ключі: TSHR, TFBOOKLIK, REDCOM, etc.
  };

  const PLN_SUFFIX = " zł";

  function formatPrice(price) {
    return Number(price).toFixed(2);
  }

  function parseQtyAndUnit(text) {
    // "100 Followers" -> { qty:100, unit:"Followers" }
    const m = String(text || "")
      .trim()
      .match(/^(\d+)\s+(.*)$/);
    if (!m) return { qty: 0, unit: "" };
    return { qty: parseInt(m[1], 10), unit: (m[2] || "").trim() };
  }

  function setDisabled(el, disabled) {
    if (!el) return;
    el.classList.toggle("quantity__disabled", !!disabled);
  }

  function closestIndexByQty(items, qty) {
    const exact = items.findIndex((x) => x.qty === qty);
    if (exact !== -1) return exact;

    let best = 0;
    let bestDiff = Infinity;
    for (let i = 0; i < items.length; i++) {
      const d = Math.abs(items[i].qty - qty);
      if (d < bestDiff) {
        bestDiff = d;
        best = i;
      }
    }
    return best;
  }

  function applyState(card, idx) {
    const btn = card.querySelector(".otherServiceCard__buy-btn");
    const qtyText = card.querySelector(".quantity__other-text");
    const incEl = card.querySelector(".quantity__other-service-increase");
    const decEl = card.querySelector(".quantity__other-service-decrease");

    if (!btn || !qtyText) return;

    const key = (btn.getAttribute("data-key") || "").trim();
    const items = PACKAGES[key];
    if (!key || !items || !items.length) return;

    const { unit } = parseQtyAndUnit(qtyText.textContent);
    const item = items[idx];

    // qty
    qtyText.textContent = `${item.qty} ${unit}`.trim();

    // price in button
    btn.textContent = `Buy Now ($${formatPrice(item.price)})`;

    // id change
    btn.id = item.id;

    // "+" hint (second <p>)
    if (incEl) {
      const hint = incEl.querySelector("p:nth-child(2)");
      if (hint)
        hint.textContent = items[Math.min(idx + 1, items.length - 1)].qty;
    }

    // disable borders
    setDisabled(decEl, idx === 0);
    setDisabled(incEl, idx === items.length - 1);
  }

  // Init all cards
  document.querySelectorAll(".otherServiceCard").forEach((card) => {
    const btn = card.querySelector(".otherServiceCard__buy-btn");
    const qtyText = card.querySelector(".quantity__other-text");
    if (!btn || !qtyText) return;

    const key = (btn.getAttribute("data-key") || "").trim();
    const items = PACKAGES[key];
    if (!key || !items || !items.length) return;

    const { qty } = parseQtyAndUnit(qtyText.textContent);
    const idx = closestIndexByQty(items, qty);
    applyState(card, idx);
  });

  // Click + / -
  document.addEventListener("click", (e) => {
    const inc = e.target.closest(".quantity__other-service-increase");
    const dec = e.target.closest(".quantity__other-service-decrease");
    if (!inc && !dec) return;

    if (inc && inc.classList.contains("quantity__disabled")) return;
    if (dec && dec.classList.contains("quantity__disabled")) return;

    const card = e.target.closest(".otherServiceCard");
    if (!card) return;

    const btn = card.querySelector(".otherServiceCard__buy-btn");
    const qtyText = card.querySelector(".quantity__other-text");
    if (!btn || !qtyText) return;

    const key = (btn.getAttribute("data-key") || "").trim();
    const items = PACKAGES[key];
    if (!key || !items || !items.length) return;

    const { qty } = parseQtyAndUnit(qtyText.textContent);
    let idx = closestIndexByQty(items, qty);

    if (inc) idx = Math.min(idx + 1, items.length - 1);
    if (dec) idx = Math.max(idx - 1, 0);

    applyState(card, idx);
  });
});
