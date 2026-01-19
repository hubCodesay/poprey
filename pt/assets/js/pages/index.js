(function () {
    // Disable site.js global trial logic to prevent interference
    window.SKIP_GLOBAL_TRIAL = true;

    document.addEventListener("DOMContentLoaded", function () {
        console.log("Poprey Index Page Script Loaded");

        const packages = window.POPREY_PACKAGES;
        if (!packages) {
            console.error("Packages data not found!");
            return;
        }

        // --- State ---
        let activeServiceType = "regular";
        let state = {
            likesPrice: 0.00,
            reachPrice: 0.00,
            impressionsPrice: 0.00,
            savesPrice: 0.00,
            likesPercent: 0,
            reachPercent: 0
        };

        // --- Core Functions ---
        function formatPrice(num) {
            return (typeof num === "number" ? num : parseFloat(num) || 0).toFixed(2);
        }

        function updateTotalCost() {
            const total = state.likesPrice + state.reachPrice + state.impressionsPrice + state.savesPrice;
            const costDisplays = document.querySelectorAll(".trial__text-cost");
            costDisplays.forEach(el => {
                el.textContent = `$${formatPrice(total)} Cost`;
            });

            // Enable/Disable buy button based on presence of likes
            const buyButton = document.querySelector(".trial__buy");
            if (buyButton) {
                buyButton.disabled = total === 0;
            }
        }

        function updateTotalPercent() {
            const totalPercent = state.likesPercent + state.reachPercent;
            const percentDisplays = document.querySelectorAll(".trial__percent");
            percentDisplays.forEach(el => {
                const numEl = el.querySelector("span") || el;
                numEl.textContent = `${Math.min(100, totalPercent)}%`;
            });
        }

        // --- Calculators ---
        const calculatorUpdates = {};

        function setupCalculator(blockSelector, dataList, stateKey, syncWidgetSelector, percentKey, calcName) {
            const block = document.querySelector(blockSelector);
            if (!block) return;

            const minusBtn = block.querySelector(".trial__cirkul-minus");
            const plusBtn = block.querySelector(".trial__cirkul:not(.trial__cirkul-minus)");
            const countDisplay = block.querySelector(".trial__count-text-desktop");
            const priceDisplay = block.querySelector(".trial__count-text-mobile"); // Assuming this is the price display for calculators
            const syncTarget = document.querySelector(syncWidgetSelector);

            let currentIndex = 0;

            function update() {
                const item = dataList[currentIndex];
                if (priceDisplay) priceDisplay.textContent = `$${formatPrice(item.price)}`;
                if (countDisplay) countDisplay.textContent = item.quantity;
                if (syncTarget) syncTarget.textContent = item.quantity;

                state[stateKey] = item.price;
                if (percentKey) {
                    state[percentKey] = item.percent || (item.quantity / 1000 * 5);
                }

                updateTotalPercent();
                updateTotalCost();

                if (minusBtn) minusBtn.classList.toggle("trial__cirkul-disabled", currentIndex <= 0);
                if (plusBtn) plusBtn.classList.toggle("trial__cirkul-disabled", currentIndex >= dataList.length - 1);
            }

            function updateToQuantity(qty) {
                // Find closest or exact match
                const idx = dataList.findIndex(item => item.quantity >= qty);
                if (idx !== -1) {
                    currentIndex = idx;
                } else {
                    // Specific logic: if qty is larger than max, pick max?
                    currentIndex = dataList.length - 1;
                }
                // If 0, maybe explicitly set to 0 index
                if (qty === 0) currentIndex = 0;

                update();
            }

            if (calcName) {
                calculatorUpdates[calcName] = updateToQuantity;
            }

            if (minusBtn) minusBtn.onclick = () => { if (currentIndex > 0) { currentIndex--; update(); } };
            if (plusBtn) plusBtn.onclick = () => { if (currentIndex < dataList.length - 1) { currentIndex++; update(); } };

            update();
        }

        // --- Card Hydration ---
        function hydrateCards(containerSelector, packageList, idPrefix = "") {
            const container = document.querySelector(containerSelector);
            if (!container) return;

            packageList.forEach(pkg => {
                // Find card by ID (with optional prefix) within this specific container
                const cardDiv = container.querySelector(`[id="${idPrefix}${pkg.id}"]`);
                if (cardDiv) {
                    const countEl = cardDiv.querySelector(".box__count");
                    if (countEl) countEl.textContent = pkg.quantity;

                    const nameEl = cardDiv.querySelector(".box__service-name");
                    if (nameEl) nameEl.innerHTML = `<span> Likes </span> For $${formatPrice(pkg.price)}`;

                    const cardWrapper = cardDiv.closest(".box__card");
                    if (cardWrapper) {
                        cardWrapper.onclick = () => {
                            // Clear previous selections in ALL boxes
                            document.querySelectorAll(".box__card").forEach(c => c.classList.remove("trial-selected"));
                            cardWrapper.classList.add("trial-selected");

                            state.likesPrice = pkg.price;
                            state.likesPercent = pkg.percent || 0;

                            // BINDING LOGIC: Update calculators from extras
                            if (pkg.extras) {
                                if (calculatorUpdates.reach) calculatorUpdates.reach(pkg.extras.reach);
                                if (calculatorUpdates.impressions) calculatorUpdates.impressions(pkg.extras.impressions);
                                if (calculatorUpdates.saves) calculatorUpdates.saves(pkg.extras.saves);
                            }

                            updateTotalPercent();
                            updateTotalCost();

                            const sumLikes = document.querySelector("#summary-likes");
                            if (sumLikes) sumLikes.textContent = pkg.quantity;

                            const buyLink = document.querySelector(".trial__text a");
                            if (buyLink) {
                                const type = activeServiceType === "premium" ? "premium_likes" : "regular_likes";
                                // Backend expects the original ID from packages.js
                                buyLink.href = `/payment?id=${pkg.id}&type=${type}`;
                            }
                        };
                    }
                }
            });
        }

        // ... (Discount Card logic remains same, implicit binding via hydrate re-use or copy binding logic? 
        // discountCard wrapper logic is separate in current file. Should update it too?)
        // Let's update SetupDiscountCard too to ensure consistency if possible, but first let's replace the main functions.
        // Actually replacement chunks needs to match target content.

        // Let's replace the HydrateCards function and SetupCalculator function.
        // I will do it in one large block to be safe with context.

        // --- Discount Card (Custom Quantity) ---
        function setupDiscountCard(containerSelector, packageList) {
            const container = document.querySelector(containerSelector);
            if (!container) return;
            const discountCard = container.querySelector(".box__card--discount .quantity--instaCard");
            if (!discountCard) return;

            let currentIndex = packageList.length - 1;

            const minusBtn = discountCard.querySelector(".quantity__control-minus");
            const plusBtn = discountCard.querySelector(".quantity__control-plus");
            const countDisplay = discountCard.querySelector(".quantity__count");
            const priceDisplay = discountCard.closest(".box__card").querySelector(".box__service-name");

            function update() {
                const pkg = packageList[currentIndex];
                countDisplay.textContent = pkg.quantity.toLocaleString('en-US');
                if (priceDisplay) priceDisplay.innerHTML = `<span> Likes </span> For $${formatPrice(pkg.price)}`;

                // If this card is currently selected, update global state
                if (discountCard.closest(".box__card").classList.contains("trial-selected")) {
                    state.likesPrice = pkg.price;
                    state.likesPercent = pkg.percent || 0;

                    // Bind extras for discount card too if available
                    if (pkg.extras) {
                        if (calculatorUpdates.reach) calculatorUpdates.reach(pkg.extras.reach);
                        if (calculatorUpdates.impressions) calculatorUpdates.impressions(pkg.extras.impressions);
                        if (calculatorUpdates.saves) calculatorUpdates.saves(pkg.extras.saves);
                    }

                    updateTotalPercent();
                    updateTotalCost();
                    const sumLikes = document.querySelector("#summary-likes");
                    if (sumLikes) sumLikes.textContent = pkg.quantity;

                    const buyLink = document.querySelector(".trial__text a");
                    if (buyLink) {
                        const type = activeServiceType === "premium" ? "premium_likes" : "regular_likes";
                        buyLink.href = `/payment?id=${pkg.id}&type=${type}`;
                    }
                }
            }

            if (minusBtn) minusBtn.onclick = (e) => { e.stopPropagation(); if (currentIndex > 0) { currentIndex--; update(); } };
            if (plusBtn) plusBtn.onclick = (e) => { e.stopPropagation(); if (currentIndex < packageList.length - 1) { currentIndex++; update(); } };

            update();
        }

        // --- Tab Switching ---
        function showTab(type) {
            activeServiceType = type;
            const regBox = document.querySelector(".box_regular");
            const premBox = document.querySelector(".box_premium");
            if (regBox) regBox.style.display = (type === "regular") ? "" : "none";
            if (premBox) premBox.style.display = (type === "premium") ? "" : "none";

            document.querySelector(".servicesList__white-text")?.classList.toggle("active", type === "regular");
            document.querySelector(".servicesList__color-text")?.classList.toggle("active", type === "premium");

            const rbtn = document.querySelector(".regular_btn");
            const pbtn = document.querySelector(".premium_btn");
            if (rbtn) rbtn.classList.toggle("local-block--active", type === "regular");
            if (pbtn) pbtn.classList.toggle("local-block--active", type === "premium");

            const isSubfolder = window.location.pathname.split('/').length > 2 && !window.location.pathname.endsWith('index.html');
            const imgPathPrefix = isSubfolder ? '../' : '';

            document.querySelectorAll('.servicesList__quality-img img').forEach(img => {
                img.src = (type === "regular") ? `${imgPathPrefix}assets/images/quality_white.1d4db15194f1398ec0490844093d10fb.png` : `${imgPathPrefix}assets/images/quality.921b7b8ec8ed7b3d499e822761d21261.png`;
            });
            document.querySelectorAll('.servicesList__crown-img img').forEach(img => {
                img.src = (type === "premium") ? `${imgPathPrefix}assets/images/crown_white.13ec5a923028b7c79617258e2b732268.png` : `${imgPathPrefix}assets/images/crown.164f2d65ae189c29cb6d9eeed7e9ad89.png`;
            });

            // Reselect the first visible card in the brand new tab to refresh active price
            const firstCard = document.querySelector(`.box_${type} .box__card`);
            if (firstCard) firstCard.click();

            updateTotalCost();
        }

        // --- Initialization ---
        // Home page cards for various services
        hydrateCards(".box_regular", packages.ILIK_REGULAR, "");
        hydrateCards(".box_premium", packages.ILIK_PREMIUM, "PREM-");

        // Hydrate other service cards on home page if they exist
        hydrateCards(".box_regular", packages.IFOL_REGULAR, "");
        hydrateCards(".box_premium", packages.IFOL_PREMIUM, "PREM-");
        hydrateCards(".box_regular", packages.IVIEWS_REGULAR, "");
        hydrateCards(".box_regular", packages.ICOMMENTS_REGULAR, "");

        // TikTok and YouTube
        hydrateCards(".box_regular", packages.TFOL_REGULAR, "");
        hydrateCards(".box_regular", packages.TLIK_REGULAR, "");
        hydrateCards(".box_regular", packages.TVIEWS_REGULAR, "");
        hydrateCards(".box_regular", packages.YSUBS_REGULAR, "");
        hydrateCards(".box_regular", packages.YLIKE_REGULAR, "");
        hydrateCards(".box_regular", packages.YVIEWS_REGULAR, "");

        setupDiscountCard(".box_regular", packages.ILIK_REGULAR_DISCOUNT);
        setupDiscountCard(".box_premium", packages.ILIK_PREMIUM_DISCOUNT);

        setupCalculator("#calculator-reach", packages.IREACH, "reachPrice", "#summary-reach", "reachPercent", "reach");
        setupCalculator("#calculator-impressions", packages.IIMPRESSIONS, "impressionsPrice", "#summary-impressions", null, "impressions");
        setupCalculator("#calculator-saves", packages.ISAVES, "savesPrice", "#summary-saves", null, "saves");

        showTab("regular");

        // Expose to window
        window.showTab = showTab;
    });
})();
