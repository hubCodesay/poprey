// Wrapper to ensure services.js is loaded when services-calculator.js is referenced in HTML
(function () {
  try {
    if (typeof document === "undefined") return;
    var exists = document.querySelector(
      'script[src="assets/js/pages/services.js"]',
    );
    if (exists) {
      console.log("services.js already present");
      return;
    }
    var s = document.createElement("script");
    s.src = "assets/js/pages/services.js";
    s.defer = true;
    s.onload = function () {
      console.log("services.js loaded via services-calculator wrapper");
    };
    s.onerror = function () {
      console.error("Failed to load services.js");
    };
    (document.head || document.documentElement).appendChild(s);
  } catch (e) {
    console.error("services-calculator wrapper error", e);
  }
})();
