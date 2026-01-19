const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const servicesHtmlPath = path.join(root, "services.html");
const servicesJsPath = path.join(root, "assets/js/pages/services.js");
const configPath = path.join(root, "assets/data/services-config.json");

const html = fs.readFileSync(servicesHtmlPath, "utf8");
const servicesJs = fs.readFileSync(servicesJsPath, "utf8");
let configJson = {};
try {
  configJson = JSON.parse(fs.readFileSync(configPath, "utf8"));
} catch (e) {
  /* ignore */
}

// Inject the services.js inline so it executes during parsing
const htmlWithScript = html.replace(
  "</head>",
  `<script>\n${servicesJs}\n</script>\n</head>`,
);

const dom = new JSDOM(htmlWithScript, {
  runScripts: "dangerously",
  resources: "usable",
  url: "file://" + servicesHtmlPath,
  beforeParse(window) {
    // Provide a simple fetch implementation that reads local JSON
    window.fetch = function (url) {
      try {
        const p = path.resolve(root, url);
        const txt = fs.readFileSync(p, "utf8");
        return Promise.resolve({ ok: true, json: () => JSON.parse(txt) });
      } catch (err) {
        return Promise.resolve({ ok: false, json: () => ({}) });
      }
    };
    // Map console
    window.console = console;
  },
});

// Wait a short time for scripts to run and DOMContentLoaded handlers to attach
setTimeout(() => {
  try {
    const document = dom.window.document;
    const card = document.querySelector(".otherServiceCard");
    if (!card) {
      console.error("No .otherServiceCard found");
      process.exit(1);
    }
    const qtyEl = card.querySelector(".quantity__other-text");
    const buyBtn = card.querySelector(".otherServiceCard__buy-btn");
    const inc = card.querySelector(".quantity__other-service-increase");
    const dec = card.querySelector(".quantity__other-service-decrease");

    console.log("Initial qty:", qtyEl ? qtyEl.textContent.trim() : "(none)");
    console.log(
      "Initial buy text:",
      buyBtn ? buyBtn.textContent.trim() : "(none)",
    );

    function click(el) {
      if (!el) return;
      el.dispatchEvent(
        new dom.window.Event("click", { bubbles: true, cancelable: true }),
      );
    }

    // Click increase twice (if possible)
    click(inc);
    setTimeout(() => {
      console.log(
        "After 1 inc qty:",
        qtyEl ? qtyEl.textContent.trim() : "(none)",
      );
      console.log(
        "After 1 inc buy text:",
        buyBtn ? buyBtn.textContent.trim() : "(none)",
      );

      click(inc);
      setTimeout(() => {
        console.log(
          "After 2 inc qty:",
          qtyEl ? qtyEl.textContent.trim() : "(none)",
        );
        console.log(
          "After 2 inc buy text:",
          buyBtn ? buyBtn.textContent.trim() : "(none)",
        );

        // Now click decrease once
        click(dec);
        setTimeout(() => {
          console.log(
            "After 1 dec qty:",
            qtyEl ? qtyEl.textContent.trim() : "(none)",
          );
          console.log(
            "After 1 dec buy text:",
            buyBtn ? buyBtn.textContent.trim() : "(none)",
          );
          process.exit(0);
        }, 100);
      }, 100);
    }, 100);
  } catch (err) {
    console.error("Test failed", err);
    process.exit(2);
  }
}, 200);
