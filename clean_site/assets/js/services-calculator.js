(function () {
  try {
    console.debug("services-calculator.js loaded");
  } catch (e) {}
  // Services calculator (Views controls) - extracted from page
  var ALLOWED = [250, 500, 1000, 2000, 3000, 5000, 7500, 10000];
  var PRICE = {
    250: "0.90 Cost",
    500: "1.90 Cost",
    1000: "3.50 Cost",
    2000: "6.50 Cost",
    3000: "9.90 Cost",
    5000: "14.90 Cost",
    7500: "24.90 Cost",
    10000: "34.90 Cost",
  };

  function clampToAllowed(n) {
    if (n == null) return ALLOWED[0];
    n = Number(n);
    if (ALLOWED.indexOf(n) !== -1) return n;
    for (var i = 0; i < ALLOWED.length; i++) {
      if (ALLOWED[i] >= n) return ALLOWED[i];
    }
    return ALLOWED[ALLOWED.length - 1];
  }

  function parsePrice(str) {
    if (!str) return 0;
    var s = String(str || "");
    var m = s.match(/([0-9]+(?:\.[0-9]+)?)/);
    return m ? Number(m[1]) : 0;
  }

  // ensure global trackers exist
  window._trial_likes_cost = window._trial_likes_cost || 0;
  window._trial_views_cost = window._trial_views_cost || 0;
  function updateTotalCost() {
    try {
      var total =
        (Number(window._trial_likes_cost) || 0) +
        (Number(window._trial_views_cost) || 0);
      var costEl = document.querySelector(".trial__text-cost");
      if (costEl) costEl.textContent = total.toFixed(2) + " Cost";
    } catch (e) {}
  }

  var viewBlock =
    document.querySelector(".active-block_view") ||
    document.querySelector(".trial__count.active-block_view");
  var viewCountNumber = document.querySelector(
    ".trial__percent-icon_view .trial__count-number",
  );
  var costEl = document.querySelector(".trial__text-cost");

  function setViewValue(n) {
    var val = clampToAllowed(n);
    if (!viewBlock) return;
    var desktopNums = viewBlock.querySelectorAll(".trial__count-text-desktop");
    if (desktopNums && desktopNums.length > 0) {
      desktopNums[0].textContent = val;
      if (desktopNums[1]) desktopNums[1].textContent = "Views";
    }
    var mobile = viewBlock.querySelector(".trial__count-text-mobile");
    if (mobile) mobile.textContent = val + " Views";
    if (viewCountNumber) viewCountNumber.textContent = val;
    try {
      window._trial_views_cost = PRICE.hasOwnProperty(val)
        ? parsePrice(PRICE[val])
        : Number(val) || 0;
      updateTotalCost();
    } catch (e) {}
    var minus = viewBlock.querySelector(".trial__cirkul-minus");
    var plus = (function () {
      var cirkuls = viewBlock.querySelectorAll(".trial__cirkul");
      for (var i = 0; i < cirkuls.length; i++) {
        if (!cirkuls[i].classList.contains("trial__cirkul-minus"))
          return cirkuls[i];
      }
      return null;
    })();
    if (minus)
      minus.classList.toggle("trial__cirkul-disabled", val === ALLOWED[0]);
    if (plus)
      plus.classList.toggle(
        "trial__cirkul-disabled",
        val === ALLOWED[ALLOWED.length - 1],
      );
  }

  if (viewBlock) {
    var minusBtn = viewBlock.querySelector(".trial__cirkul-minus");
    var plusBtn = (function () {
      var cirkuls = viewBlock.querySelectorAll(".trial__cirkul");
      for (var i = 0; i < cirkuls.length; i++) {
        if (!cirkuls[i].classList.contains("trial__cirkul-minus"))
          return cirkuls[i];
      }
      return null;
    })();

    function step(delta) {
      var cur = NaN;
      try {
        if (typeof viewCountNumber !== "undefined" && viewCountNumber)
          cur = Number(
            (viewCountNumber.textContent || "").replace(/[^0-9]/g, ""),
          );
      } catch (e) {}
      if (isNaN(cur) && viewBlock) {
        try {
          var d = viewBlock.querySelector(".trial__count-text-desktop");
          if (d) cur = Number((d.textContent || "").replace(/[^0-9]/g, ""));
        } catch (e) {}
      }
      if (isNaN(cur)) cur = ALLOWED[0];
      var idx = ALLOWED.indexOf(cur);
      if (idx === -1) {
        cur = clampToAllowed(cur);
        idx = ALLOWED.indexOf(cur);
      }
      var newIdx = Math.max(0, Math.min(ALLOWED.length - 1, idx + delta));
      setViewValue(ALLOWED[newIdx]);
    }

    if (minusBtn) {
      minusBtn.style.cursor = "pointer";
      minusBtn.addEventListener("click", function (e) {
        try {
          console.debug("Views minus clicked", { target: e.target });
        } catch (err) {}
        step(-1);
      });
    }
    if (plusBtn) {
      plusBtn.style.cursor = "pointer";
      plusBtn.addEventListener("click", function (e) {
        try {
          console.debug("Views plus clicked", { target: e.target });
        } catch (err) {}
        step(1);
      });
    }

    viewBlock.tabIndex = 0;
    viewBlock.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });

    try {
      window.setViewValue = setViewValue;
    } catch (e) {}
    setViewValue(ALLOWED[0]);
  }
})();
