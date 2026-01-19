/**
 * Storage Script
 * Persists user input (email, username) across pages using localStorage.
 */
(function () {
    'use strict';

    const STORAGE_KEY_EMAIL = 'poprey_user_email';
    const STORAGE_KEY_USERNAME = 'poprey_user_username';

    function initStorage() {
        const emailInputs = document.querySelectorAll('input[type="email"], input[name="email"]');
        const usernameInputs = document.querySelectorAll('input[name="username"], input[placeholder*="Username"], input[placeholder*="Instagram"]');

        // Restore values
        const savedEmail = localStorage.getItem(STORAGE_KEY_EMAIL);
        const savedUsername = localStorage.getItem(STORAGE_KEY_USERNAME);

        if (savedEmail) {
            emailInputs.forEach(input => input.value = savedEmail);
        }
        if (savedUsername) {
            usernameInputs.forEach(input => input.value = savedUsername);
        }

        // Listen for changes
        emailInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                localStorage.setItem(STORAGE_KEY_EMAIL, e.target.value);
            });
        });

        usernameInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                localStorage.setItem(STORAGE_KEY_USERNAME, e.target.value);
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initStorage);
    } else {
        initStorage();
    }
})();
