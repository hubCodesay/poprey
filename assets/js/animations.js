/**
 * POPREY Animation Helpers
 */

/**
 * Smoothly animates a numeric value from current to target.
 * @param {HTMLElement} element - The element containing the number.
 * @param {number} target - The destination value.
 * @param {boolean} isPrice - Whether to format as price with $.
 * @param {number} duration - Animation duration in ms.
 */
function animateValue(element, target, isPrice = false, duration = 800, prefix = "", suffix = "") {
    if (!element) return;

    // Try to get current value from data attribute, otherwise parse text
    const currentText = element.textContent.replace(/[^0-9.]/g, '');
    const start = parseFloat(element.getAttribute('data-current-val') || currentText || 0);
    const startTime = performance.now();

    element.setAttribute('data-current-val', target);

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Cubic bit of ease-out
        const ease = 1 - Math.pow(1 - progress, 3);

        const current = start + (target - start) * ease;

        let output = "";
        if (isPrice) {
            output = `${prefix}$${current.toFixed(2)}${suffix}`;
        } else {
            output = `${prefix}${Math.floor(current).toString()}${suffix}`;
        }

        // Use innerHTML because prefix/suffix might contain tags (like index.html)
        element.innerHTML = output;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            // Final snap
            if (isPrice) {
                element.innerHTML = `${prefix}$${target.toFixed(2)}${suffix}`;
            } else {
                element.innerHTML = `${prefix}${target.toString()}${suffix}`;
            }
        }
    }

    requestAnimationFrame(update);
}

window.animateValue = animateValue;
