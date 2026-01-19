# Poprey - Social Media Promotion Services

Poprey is a professional social media promotion platform offering services for Instagram, YouTube, TikTok, and other platforms. The project is built with a focus on high performance, visual excellence, and flexible management.

## 🚀 Technology Stack
- **Frontend:** Vanilla HTML5, CSS3, and JavaScript.
- **Component System:** Dynamic header and footer injection via `assets/js/components.js`.
- **Automation:** Python-based tools for batch processing HTML files and managing redirects.
- **Multilingual:** Supports multiple language versions (EN, FR, DE, ES, IT, PL, PT, CS).

## 🛠️ Key Features

### 1. Global Redirect & Moderation System
The project features a built-in "Moderation/Cloaking" system that allows developers to control button behavior across all 140+ pages from a single configuration file.
- **Config:** `assets/js/redirect_config.js`
- **Logic:** `assets/js/redirect_manager.js`
- **Functionality:** Enable/disable redirects globally or per-page to safe-guard against ad platform moderation.

### 2. Dynamic Components
Navigation and footers are managed dynamically to ensure consistency across the entire site. The active page detection logic automatically highlights the correct service in the header.

### 3. Automated Injection Tools
- `inject_redirect_scripts.py`: Automatically injects redirection logic into all HTML files.
- `integrate_components.py`: Manages the integration of shared JS components across the workspace.
- `style_buy_now.py`: Utility for applying consistent styles and classes to "Buy Now" buttons.

## 📁 Project Structure
- `/assets`: Images, CSS, and main JavaScript logic.
- `/fr, /de, /es, etc.`: Language-specific versions of the platform.
- `index.html`: Main landing page for Instagram services.
- `services.html`: Universal services page (TikTok, Facebook, etc.).
- `buy-youtube-views.html`: Specialized YouTube service hub.

## 💻 Development & Maintenance
To update the site-wide redirection links:
1. Open `assets/js/redirect_config.js`.
2. Modify the `REDIRECT_CONFIG` (for IDs) or `CLASS_REDIRECTS` (for groups).
3. Toggle `GLOBAL_REDIRECT_ENABLED` to enable/disable all redirects.

---
*Created and maintained with precision for visual and technical excellence.*
