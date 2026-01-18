const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");
const root = process.cwd();
const html = fs.readFileSync(path.join(root, "services.html"), "utf8");
const servicesJs = fs.readFileSync(
  path.join(root, "assets/js/pages/services.js"),
  "utf8",
);
const htmlWithScript = html.replace(
  "</head>",
  `<script>\n${servicesJs}\n</script>\n</head>`,
);
const dom = new JSDOM(htmlWithScript, {
  runScripts: "dangerously",
  resources: "usable",
  url: "file://" + path.join(root, "services.html"),
  beforeParse(window) {
    window.fetch = function (url) {
      try {
        const p = path.resolve(root, url);
        const txt = fs.readFileSync(p, "utf8");
        return Promise.resolve({ ok: true, json: () => JSON.parse(txt) });
      } catch (err) {
        return Promise.resolve({ ok: false, json: () => ({}) });
      }
    };
    window.console = console;
  },
});
setTimeout(() => {
  try {
    const document = dom.window.document;
    // find the card by title text 'Post Likes'
    const cards = Array.from(document.querySelectorAll(".otherServiceCard"));
    const card = cards.find((c) => {
      const t = c.querySelector(".otherServiceCard__title");
      return t && (t.textContent || "").includes("Post Likes");
    });
    if (!card) {
      console.error("Post Likes card not found");
      process.exit(1);
    }
    const qtyEl = card.querySelector(".quantity__other-text");
    const buyBtn = card.querySelector(".otherServiceCard__buy-btn");
    const inc = card.querySelector(".quantity__other-service-increase");
    const dec = card.querySelector(".quantity__other-service-decrease");
    console.log(
      "Initial:",
      qtyEl.textContent.trim(),
      "-",
      buyBtn.textContent.trim(),
    );
    function click(el) {
      el.dispatchEvent(
        new dom.window.Event("click", { bubbles: true, cancelable: true }),
      );
    }
    click(inc);
    setTimeout(() => {
      console.log(
        "After + :",
        qtyEl.textContent.trim(),
        "-",
        buyBtn.textContent.trim(),
      );
      click(dec);
      setTimeout(() => {
        console.log(
          "After - :",
          qtyEl.textContent.trim(),
          "-",
          buyBtn.textContent.trim(),
        );
        process.exit(0);
      }, 100);
    }, 100);
  } catch (err) {
    console.error(err);
    process.exit(2);
  }
}, 300);
