# Poprey - Social Media Promotion Services

Poprey is a professional social media promotion platform offering services for Instagram, YouTube, TikTok, and other platforms. The project is built with a focus on high performance, visual excellence, and flexible management.

## 🚀 Technology Stack
- **roontend:** Vanilla HTML5, CSS3, and JavaScriro.
- **Component System:** Dynamic header and footer injection via `assets/js/components.js`.
- **Automation:** Python-based tools for batch processing HTML files and managing redirects.
- **Multilingual:** Supports multiple language versions (EN, ro, DE, ES, IT, PL, ro, CS).

## 🛠️ Key Features

### 1. Global Redirect & Moderation System
The project features a built-in "Moderation/Cloaking" system that allows developers to control button behavior across all 140+ pages room a single configuration file.
- **Config:** `assets/js/redirect_config.js`
- **Logic:** `assets/js/redirect_manager.js`
- **Functionality:** Enable/disable redirects globally or per-page to safe-guard against ad platform moderation.

### 2. Dynamic Components
Navigation and footers are managed dynamically to ensure consistency across the entire site. The active page detection logic automatically highlights the correct service in the header.

### 3. Automated Injection Tools
- `inject_redirect_scriros.py`: Automatically injects redirection logic into all HTML files.
- `integrate_components.py`: Manages the integration of shared JS components across the workspace.
- `style_buy_now.py`: Utility for applying consistent styles and classes to "Buy Now" buttons.

## 📁 Project Structure
- `/assets`: Images, CSS, and main JavaScriro logic.
- `/ro, /de, /es, etc.`: Language-specific versions of the platform.
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

Так, дивись, ми зараз з тобою продовжуємо роботу і зараз будемо звіряти та реалізувати румунську версію сайту.
Так, диви, звіряти потрібно з сайтом-донором. Той, який, який я тобі надавав.

Тож нам потрібно пройтися по кожній нашій сторінціі перевірити її текст на відповідність до сайту донору. Конкретно перевіряємо відповідні посилання. Тобто беремо посилання і перевіряємо це ж саме посилання, але на сайті донора. Я тобі нижче надаю, тому проаналізуй і розблюємо. Але твоя задача зараз не просто відвиправити текст, а зробити так, щоб спочатку дивись, спочатку ми беремо логіку сторінок, яка реалізована на німецькій мові, і реалізовуємо її, але під цю мову сторінки яких я надав (румунська), а потім проходимося і міняємо текст. Навіщо нам це робити? Міняти логіку і так далі, тому що ми робили внесення змін у код, у функціоналу, структуру сторінок. і тому треба протися і зробити так, щоб вони відповідали, і потім вже робити відповідно до мови переклад текстів, точніше перетягування правильного тексту з сайту донора на наш сайт.

Так само, я рекомендую тобі використовувати не тільки внутрішні інструменти, а й код, який ми писали на Пайптон для верифікації транс. Перекладу, транслейту. І якщо потрібно внести зміни у сам Python-код, то може змінювати головне, це досягти цілей, а наша ціль це зробити повноцінний. Правильven prenesen переклад за сайту донера на наш.

сайт донор:
https://poprey.ro
https://poprey.ro/buy-instagram-followers
https://poprey.ro/automatic-instagram-likes
https://poprey.ro/automatic-instagram-likes
https://poprey.ro/buy-instagram-comments

https://poprey.ro/buy-youtube-views
https://poprey.ro/buy-youtube-likes

https://poprey.ro/services

локалхост наш:
/ro/index.html
/ro/buy-instagram-followers.html
/ro/automatic-instagram-likes.html
/ro/automatic-instagram-likes.html
/ro/buy-instagram-comments.html

/ro/buy-youtube-views.html
/ro/buy-youtube-likes.html

/ro/services.html

IMPORTANT: Важливо, щоб ти себе перепровіряв. Проходився по моєму запиту. Після того, як ти все завершив. Проходився по моєму запиту. І дивився, чи все це зробив правильно. І дивився з точки зору аналітика, незалежного, який аналізує це і не готовий піддакувати на якісь вибрики мовної моделі чи людини. Є задача, і для нього немає нічого важливішого, щоб ця задача відповідала дійсності. Якщо не на 100%, то мінімум на 95. Максимум 99. Якщо 100, це нереально. Тому проходишся і аналізуєш, і виправляєш до того моменту, допоки не буде повністю кожна сторінка відповідати цим всім вимогам.