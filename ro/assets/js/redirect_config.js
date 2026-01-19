/**
 * Конфигурация переадресации (Redirect Configuration)
 * 
 * В этом файле вы можете настраивать ссылки для кнопок и включать/отключать переадресацию для разных страниц.
 */

/**
 * Головний перемикач (Master Switch)
 * true  - Редіректи ПРАЦЮЮТЬ (Кнопки ведуть на задані посилання)
 * false - Редіректи ВИМКНЕНО (Режим модерації: кнопки заблоковані)
 */
const GLOBAL_REDIRECT_ENABLED = true;

// 1. Переадресація по ID (Найвищий пріоритет)
// Используйте этот раздел, если нужно задать уникальную ссылку для конкретной кнопки (например, в шапке или футере).
// Формат: 'ID_КНОПКИ': 'ССЫЛКА'
const REDIRECT_CONFIG = {
  // Кнопки в шапке сайта (Header)
  'header-account-btn': 'https://poprey.com/login',           // Ссылка для кнопки "Account" (Вход)
  'header-instamonitor-btn': 'https://poprey.com/monitoring', // Ссылка для кнопки "InstaMonitor"
  
  // Кнопки в футере (на странице Services)
  'services-footer-account-btn': 'https://poprey.com/login',  // Ссылка для кнопки Account в футере
  'services-footer-contact-btn': 'https://poprey.com/contact', // Ссылка для кнопки Contact в футере
};

// 2. Переадресация по Классу (Если ID не найден выше)
// Используется для групп кнопок. Например, чтобы все кнопки "Buy Now" вели на одну страницу.
const CLASS_REDIRECTS = {
  // 'global-buy-now' — это класс, добавленный ко всем кнопкам покупки (коричневые кнопки).
  // Здесь указана ссылка, куда они будут вести.
  'global-buy-now': 'https://google.com' 
};

/**
 * Глобальные настройки переадресации (Global Redirect Settings)
 * Управление режимом модерации для каждой страницы отдельно.
 * 
 * true  (Истина) = Переадресация ВКЛЮЧЕНА (Кнопки работают, перекидывают на ссылки выше)
 * false (Ложь)   = Переадресация ВЫКЛЮЧЕНА (Режим модерации / Клоакинг - кнопки не работают)
 */
const REDIRECT_SETTINGS = {
    // === ГЛАВНЫЕ СТРАНИЦЫ ===
    'index.html': true, 
    'services.html': true,
    'contact.html': true,
    'faq.html': true,
    'blog.html': true,
    'account.html': true,
    'monitoring.html': true,

    // === УСЛУГИ (Instagram) ===
    'buy-instagram-followers.html': true,
    'buy-instagram-likes.html': true,
    'buy-instagram-views.html': true,
    'buy-instagram-comments.html': true,
    'automatic-instagram-likes.html': true,
    'free-instagram-likes.html': true,
    'free-ig-followers.html': true,
    'free-trial-instagram-views.html': true,

    // === УСЛУГИ (YouTube) ===
    'buy-youtube-views.html': true,
    'buy-youtube-likes.html': true,
    'buy-youtube-subscribers.html': true,
    'buy-youtube-comments.html': true,
    
    // === ВХОД / ЛОГИН ===
    'login/index.html': true,

    // === ЗНАЧЕНИЕ ПО УМОЛЧАНИЮ ===
    // Если страницы нет в списке выше, разрешать ли переход?
    // Рекомендуется: false (для безопасности при модерации).
    'default': false 
};
