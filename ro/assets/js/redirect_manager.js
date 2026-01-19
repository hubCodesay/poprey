/**
 * Redirect Manager
 * Handles clicks on buttons, checks global settings in REDIRECT_CONFIG, and redirects if enabled.
 */
(function() {
    
    // Helper to get current page filename
    function getCurrentPage() {
        const path = window.location.pathname;
        const parts = path.split('/');
        let filename = parts.pop() || 'index.html';
        
        // Handle "folder/index.html" vs just "folder/"
        if (filename === '') filename = 'index.html';
        
        // If we are in a subfolder like /es/index.html, we might want just 'index.html' or 'es/index.html'
        // The config uses relative names like 'index.html'. 
        // Let's normalize to matching what is in REDIRECT_SETTINGS.
        
        // Code-based config in redirect_config.js uses simple names like 'index.html'.
        // If we are at /poprey/es/index.html, filename is index.html.
        // If we want specific control per lang, we'd need full path.
        // For now, let's assume 'index.html' setting applies to ALL index.html variants (main + langs).
        // Or we catch 'login/index.html' if needed.
        
        if (path.includes('login/')) return 'login/index.html';
        
        return filename;
    }

    function handleRedirect(event) {
        // Find closest button (in case click is on img/span inside)
        const btn = event.target.closest('button');
        if (!btn || !btn.id) return;
        
        // 0. Check Master Switch
        if (typeof GLOBAL_REDIRECT_ENABLED !== 'undefined' && GLOBAL_REDIRECT_ENABLED === false) {
            console.log("Redirects globally disabled.");
            event.stopImmediatePropagation();
            event.preventDefault();
            return;
        }

        // 1. Determine Page Name
        const currentPage = getCurrentPage();

        // 2. Check Settings
        // REDIRECT_SETTINGS is defined in redirect_config.js
        let isEnabled = false;
        
        if (typeof REDIRECT_SETTINGS !== 'undefined') {
            if (REDIRECT_SETTINGS[currentPage] !== undefined) {
                isEnabled = REDIRECT_SETTINGS[currentPage];
            } else {
                // Check Default
                isEnabled = REDIRECT_SETTINGS['default'] === true;
            }
        } else {
            console.error('REDIRECT_SETTINGS not found. Check redirect_config.js');
            return;
        }

        if (isEnabled) {
            // 1. Try Specific ID
            let targetUrl = REDIRECT_CONFIG[btn.id];
            
            // 2. Try Class Match (Loop through classes)
            if (!targetUrl && typeof CLASS_REDIRECTS !== 'undefined') {
                for (const cls of btn.classList) {
                    if (CLASS_REDIRECTS[cls]) {
                        targetUrl = CLASS_REDIRECTS[cls];
                        break;
                    }
                }
            }

            // 3. Fallback to dataset
            if (!targetUrl && btn.dataset.href) {
                targetUrl = btn.dataset.href;
            }

            if (targetUrl) {
                console.log(`Redirecting to ${targetUrl}`);
                // Stop other listeners if we are handling it
                event.stopImmediatePropagation();
                event.preventDefault();
                window.location.href = targetUrl;
            } else {
                console.log('Redirect enabled, no config found. Allowing default/propagation.');
                // Do nothing, let index.js or other scripts handle it
            }
        } else {
            console.log(`Redirect DISABLED for ${currentPage} (Moderation Mode)`);
            event.stopImmediatePropagation();
            event.preventDefault(); 
        }
    }

    // Attach global listener with CAPTURE phase to intercept before other scripts
    document.addEventListener('click', handleRedirect, true);

})();
