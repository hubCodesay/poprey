/**
 * Poprey Components - Header & Footer Injection
 * Automatically loads header and footer based on current page and language
 */

(function () {
  'use strict';

  // =====================================================
  // CONFIGURATION
  // =====================================================

  const TRANSLATIONS = {
    en: {
      account: 'Account',
      likes: 'Likes',
      followers: 'Followers',
      autoLikes: 'Auto-Likes',
      views: 'Views',
      comments: 'Comments',
      us: 'Us',
      rules: 'Rules',
      help: 'Help',
      termsOfService: 'Terms of service',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
      contactInfo: 'Contact Information'
    },
    de: {
      account: 'Konto',
      likes: 'Likes',
      followers: 'Anhänger',
      autoLikes: 'Auto-Likes',
      views: 'Ansichten',
      comments: 'Kommentare',
      us: 'Uns',
      rules: 'Regeln',
      help: 'Hilfe',
      termsOfService: 'Nutzungsbedingungen',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Kontakt',
      contactInfo: 'Kontaktinformationen'
    },
    es: {
      account: 'Cuenta',
      likes: 'Likes',
      followers: 'Seguidores',
      autoLikes: 'Auto-Likes',
      views: 'Vistas',
      comments: 'Comentarios',
      us: 'Nosotros',
      rules: 'Reglas',
      help: 'Ayuda',
      termsOfService: 'Términos de servicio',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contacto',
      contactInfo: 'Información de contacto'
    },
    fr: {
      account: 'Compte',
      likes: 'Likes',
      followers: 'Abonnés',
      autoLikes: 'Auto-Likes',
      views: 'Vues',
      comments: 'Commentaires',
      us: 'Nous',
      rules: 'Règles',
      help: 'Aide',
      termsOfService: 'Conditions d\'utilisation',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
      contactInfo: 'Informations de contact'
    },
    it: {
      account: 'Account',
      likes: 'Likes',
      followers: 'Seguaci',
      autoLikes: 'Auto-Likes',
      views: 'Visualizzazioni',
      comments: 'Commenti',
      us: 'Noi',
      rules: 'Regole',
      help: 'Aiuto',
      termsOfService: 'Termini di servizio',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contatto',
      contactInfo: 'Informazioni di contatto'
    },
    pt: {
      account: 'Conta',
      likes: 'Likes',
      followers: 'Seguidores',
      autoLikes: 'Auto-Likes',
      views: 'Visualizações',
      comments: 'Comentários',
      us: 'Nós',
      rules: 'Regras',
      help: 'Ajuda',
      termsOfService: 'Termos de serviço',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contato',
      contactInfo: 'Informações de contato'
    },
    cs: {
      account: 'Účet',
      likes: 'Likes',
      followers: 'Sledující',
      autoLikes: 'Auto-Likes',
      views: 'Zobrazení',
      comments: 'Komentáře',
      us: 'My',
      rules: 'Pravidla',
      help: 'Pomoc',
      termsOfService: 'Podmínky služby',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Kontakt',
      contactInfo: 'Kontaktní informace'
    },
    ro: {
      account: 'Cont',
      likes: 'Likes',
      followers: 'Urmăritori',
      autoLikes: 'Auto-Likes',
      views: 'Vizualizări',
      comments: 'Comentarii',
      us: 'Noi',
      rules: 'Reguli',
      help: 'Ajutor',
      termsOfService: 'Termeni și condiții',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
      contactInfo: 'Informații de contact'
    }
  };

  // =====================================================
  // UTILITY FUNCTIONS
  // =====================================================

  function getCurrentLang() {
    const path = window.location.pathname;
    const langs = ['de', 'fr', 'es', 'it', 'pt', 'cs', 'ro'];
    for (const lang of langs) {
      if (path.includes('/' + lang + '/')) return lang;
    }
    return 'en';
  }

  function getBasePath() {
    const lang = getCurrentLang();
    return lang === 'en' ? '' : '../';
  }

  function getActivePage() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('youtube')) return 'youtube';
    if (path.includes('services') || path.includes('tiktok') || path.includes('facebook')) return 'services';
    if (path.includes('monitoring') || path.includes('instamonitor')) return 'monitoring';
    // Default to instagram for all other pages (including index and specific ig services)
    return 'instagram';
  }

  function getActiveService() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('index') || path === '/' || path.endsWith('/') || path.endsWith('/index.html')) return 'likes';
    if (path.includes('followers')) return 'followers';
    if (path.includes('automatic') || path.includes('auto-likes')) return 'auto-likes';
    if (path.includes('views')) return 'views';
    if (path.includes('comments')) return 'comments';
    return 'likes';
  }

  // Get current page filename (e.g., 'buy-youtube-views.html')
  function getCurrentPageFile() {
    const path = window.location.pathname;
    // Extract filename from path
    const parts = path.split('/');
    const filename = parts[parts.length - 1] || 'index.html';
    // If empty or just language folder, return index.html
    if (!filename || filename === '' || !filename.includes('.html')) {
      return 'index.html';
    }
    return filename;
  }

  function t(key) {
    const lang = getCurrentLang();
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS.en[key] || key;
  }

  // =====================================================
  // HEADER TEMPLATE
  // =====================================================

  function getHeaderHTML() {
    const basePath = getBasePath();
    const activePage = getActivePage();
    const activeService = getActiveService();

    const instaClass = activePage === 'instagram' ? 'header__active' : 'header__not-active-insta';
    const youtubeClass = activePage === 'youtube' ? 'header__active-youtube' : 'header__not-active';
    const servicesClass = activePage === 'services' ? 'header__active-other' : 'header__not-active-other';
    const monitoringClass = activePage === 'monitoring' ? 'header__active-monitoring' : 'header__not-active-monitoring';

    const instaCircleClass = activePage === 'instagram' ? 'header__cirkul' : 'header__cirkul-color';
    // YouTube circle: use header__cirkul for active white border, and header__cirkul-color for inactive gray border
    const youtubeCircleClass = activePage === 'youtube' ? 'header__youtube header__cirkul' : 'header__youtube header__cirkul-color';
    // Services group shouldn't use fixed-size header__cirkul classes as it contains two icons
    const servicesCircleClass = activePage === 'services' ? 'header__cirkul-other' : 'header__cirkul-color-other';

    return `
    <header class="header">
      <div class="container">
        <div class="header__services-container">
          <div class="header_flex_block">
            <div class="header_flex_item">
              <a href="${basePath}index.html" style="text-decoration: none;"><p class="internalHeader__logo">Poprey</p></a>
            </div>
            <div class="header__services-nav header_flex_item header_item_special">
              <a class="${instaClass}" href="${basePath}index.html">
                <div class="${instaCircleClass}">
                  <div class="header__instagram-img" style="position: relative">
                    <div style="display: block; overflow: hidden; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; margin: 0;">
                      <img alt="Instagram" decoding="async" src="${basePath}assets/images/${activePage === 'instagram' ? 'inst_on.75d262156d28d609dbc3dabf75912486.svg' : 'inst_off.dc6a14cd8bed89058468a66d640f9a9e.svg'}" style="visibility: visible; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" />
                    </div>
                  </div>
                </div>
                <div class="${activePage === 'instagram' ? '' : 'header__not-active-text'}">Instagram</div>
              </a>
              <a class="${youtubeClass}" href="${basePath}buy-youtube-views.html">
                <div class="${youtubeCircleClass}">
                  <div class="header__color-icons-youtube" style="display: flex; justify-content: center; align-items: center;">
                    <div class="header__other-icons-youtube" style="position: relative">
                      <div style="display: block; overflow: hidden; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; margin: 0;">
                        <img alt="YouTube" decoding="async" src="${basePath}assets/images/${activePage === 'youtube' ? 'youtube2.97789ad92b94d8d8a663c93a77211a01.png' : 'youtube3.3c6ea823e9ee96fd0f90bdc6e215563f.png'}" style="visibility: visible; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="${activePage === 'youtube' ? '' : 'header__not-active-text'}">YouTube</div>
              </a>
              <a class="${servicesClass}" href="${basePath}services.html">
                <div class="${servicesCircleClass}" style="display: flex;">
                  <div class="header__facebook" style="${activePage === 'services' ? 'border: 1px solid rgba(255, 255, 255, 0.25); background: #fff;' : ''}">
                    <div class="header__other-icons" style="position: relative">
                      <div style="display: block; overflow: hidden; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; margin: 0;">
                        <img alt="Facebook" decoding="async" src="${basePath}assets/images/facebook_blue.1dad8a2a9689d720b5caa08577ab651a.png" style="visibility: visible; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" />
                      </div>
                    </div>
                  </div>
                  <div class="header__tickTok">
                    <div class="header__other-icons_2" style="position: relative">
                      <div style="display: block; overflow: hidden; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; margin: 0;">
                        <img alt="TikTok" decoding="async" src="${basePath}assets/images/tickTok_header.677a34c32fa4167140eb94116b57b2e8.svg" style="visibility: visible; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="${monitoringClass} monitoringWrapp" style="max-width: 238px; margin-right: 15px; width: 100%; cursor: pointer; padding: 20px; font-size: 16px; font-weight: 500; gap: 7px; height: 60px;">
              <img alt="monitoring" src="${basePath}assets/images/${activePage === 'monitoring' ? 'monitoringActive.6d0e9803a6bc4553229b40075306915e.svg' : 'monitoringNotActive.7f049cd27e044cbb9ddd1dea9ebcf4e4.svg'}" />
              <p class="monitoringTitle">InstaMonitor</p>
            </div>
            <a href="${basePath}login/index.html?link=&amp;lang=en&amp;type=signup&amp;newDesign=newDesign.html" id="SUP">
              <div class="header_account header_flex_item">
                <div class="header__img_block">
                  <img alt="account" src="${basePath}assets/images/login_logout.345632490b7225ebd8fa55c25f1254fd.svg" />
                </div>
                <div class="header__account-title">${t('account')}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>`;
  }

  // =====================================================
  // SERVICES NAV TEMPLATE (sub-navigation for Instagram)
  // =====================================================

  function getServicesNavHTML() {
    const basePath = getBasePath();
    const activeService = getActiveService();
    const activePage = getActivePage();

    // Only show on Instagram pages
    if (activePage !== 'instagram') return '';

    const likesActive = activeService === 'likes' ? 'active servicesNav__text-active' : 'servicesNav__text';
    const followersActive = activeService === 'followers' ? 'active servicesNav__text-active' : 'servicesNav__text';
    const autoLikesActive = activeService === 'auto-likes' ? 'active servicesNav__text-active' : 'servicesNav__text';
    const viewsActive = activeService === 'views' ? 'active servicesNav__text-active' : 'servicesNav__text';
    const commentsActive = activeService === 'comments' ? 'active servicesNav__text-active' : 'servicesNav__text';

    return `
    <div class="servicesNav">
      <div class="container">
        <nav class="servicesNav__nav">
          <a href="index.html">
            <div class="servicesNav__link${activeService === 'likes' ? '' : ' servicesNav__link-active'}">
              <div class="servicesNav__icon heart-icon" style="position: relative">
                <div style="display: block; overflow: hidden; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; margin: 0;">
                  <img alt="likes" decoding="async" src="${basePath}assets/images/likes.409e7b3900dc9f186c0bb168cc509a4b.svg" style="visibility: visible; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" />
                </div>
              </div>
              <p class="${likesActive}">${t('likes')}</p>
            </div>
          </a>
          <a href="buy-instagram-followers.html">
            <div class="servicesNav__link${activeService === 'followers' ? '' : ' servicesNav__link-active'}">
              <div class="servicesNav__icon" style="position: relative">
                <div style="display: block; overflow: hidden; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; margin: 0;">
                  <img alt="followers" decoding="async" src="${basePath}assets/images/followers.cbfb590813ad606f45dccfd78457f37d.svg" style="visibility: visible; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" />
                </div>
              </div>
              <p class="${followersActive}">${t('followers')}</p>
            </div>
          </a>
          <a href="automatic-instagram-likes.html">
            <div class="servicesNav__link${activeService === 'auto-likes' ? '' : ' servicesNav__link-active'}">
              <div class="servicesNav__icon" style="position: relative">
                <div style="display: block; overflow: hidden; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; margin: 0;">
                  <img alt="auto_likes" decoding="async" src="${basePath}assets/images/auto-likes.762d3d9555790eb6e7cc7a7532afb9f2.svg" style="visibility: visible; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" />
                </div>
              </div>
              <p class="${autoLikesActive}">${t('autoLikes')}</p>
            </div>
          </a>
          <a href="buy-instagram-views.html">
            <div class="servicesNav__link${activeService === 'views' ? '' : ' servicesNav__link-active'}">
              <div class="servicesNav__icon" style="position: relative">
                <div style="display: block; overflow: hidden; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; margin: 0;">
                  <img alt="views" decoding="async" src="${basePath}assets/images/views.24e3816604beffb48e9e1df3faf3aeba.svg" style="visibility: visible; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" />
                </div>
              </div>
              <p class="${viewsActive}">${t('views')}</p>
            </div>
          </a>
          <a href="buy-instagram-comments.html">
            <div class="servicesNav__link${activeService === 'comments' ? '' : ' servicesNav__link-active'}">
              <div class="servicesNav__icon" style="position: relative">
                <div style="display: block; overflow: hidden; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; margin: 0;">
                  <img alt="comments" decoding="async" src="${basePath}assets/images/comments.4d95ea3c91c21ff084eb1f0a3c882883.svg" style="visibility: visible; position: absolute; top: 0; left: 0; bottom: 0; right: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" />
                </div>
              </div>
              <p class="${commentsActive}">${t('comments')}</p>
            </div>
          </a>
        </nav>
      </div>
    </div>`;
  }

  // =====================================================
  // FOOTER TEMPLATE
  // =====================================================

  function getFooterHTML() {
    const basePath = getBasePath();
    const lang = getCurrentLang();

    const langLinks = [
      { code: 'en', path: '', name: 'English' },
      { code: 'de', path: 'de/', name: 'Deutsch' },
      { code: 'it', path: 'it/', name: 'Italiano' },
      { code: 'fr', path: 'fr/', name: 'Français' },
      { code: 'es', path: 'es/', name: 'Español' },
      { code: 'pt', path: 'pt/', name: 'Português' },
      { code: 'cs', path: 'cs/', name: 'Čeština' },
      { code: 'ro', path: 'ro/', name: 'Română' }
    ];

    const currentPage = getCurrentPageFile();
    // For language links, we need to go to absolute path from root
    // If we're in a language folder, we need to go up first
    const langBasePath = lang === 'en' ? '' : '../';

    const langHTML = langLinks.map(l => {
      const activeClass = l.code === lang ? ' class="footer__language-active"' : '';
      // Build the correct path: langBasePath gets us to root, then l.path + currentPage
      const href = langBasePath + l.path + currentPage;
      return `<a href="${href}" title="${l.name}"${activeClass}><img src="${basePath}assets/images/flags/${l.code}.svg" alt="${l.name}"></a>`;
    }).join('\n      ');

    return `
<footer class="footer">
  <div class="container">
    <nav class="footer__top">
      <div class="footer__header">
        <p class="footer__title">Poprey</p>
        <div class="footer__icons-wrapper">
          <a class="footer__img-link" href="https://www.youtube.com/channel/UCdhf-DfixL85nlftRYkvf2w" rel="noopener" target="_blank">
            <div class="footer__icon-wrapper">
              <img src="${basePath}assets/images/footer_social/youtube.png" alt="YouTube" style="width: 24px; height: 24px;">
            </div>
          </a>
          <a class="footer__img-link" href="https://twitter.com/Poprey2" rel="noopener" target="_blank">
            <div class="footer__icon-wrapper">
              <img src="${basePath}assets/images/footer_social/twitter.png" alt="Twitter" style="width: 24px; height: 24px;">
            </div>
          </a>
          <a class="footer__img-link" href="https://www.facebook.com/PopreyEN" rel="noopener" target="_blank">
            <div class="footer__icon-wrapper">
              <img src="${basePath}assets/images/footer_social/facebook.png" alt="Facebook" style="width: 24px; height: 24px;">
            </div>
          </a>
          <a class="footer__img-link" href="https://www.tiktok.com/@popreycom" rel="noopener" target="_blank">
            <div class="footer__icon-wrapper">
              <img src="${basePath}assets/images/footer_social/tiktok.png" alt="TikTok" style="width: 24px; height: 24px;">
            </div>
          </a>
        </div>
        <div class="footer__pay-img">
          <div style="display: flex; gap: 10px; margin-top: 10px; align-items: center;">
            <img src="${basePath}assets/images/payment/mastercard.png" alt="Mastercard" style="height: 24px; width: auto;">
            <img src="${basePath}assets/images/payment/visa.png" alt="Visa" style="height: 24px; width: auto;">
          </div>
        </div>
      </div>
      <div class="footer__cards">
        <ul class="footer__card us-footer">
          <li><span class="footer__card-title"> ${t('us')} </span></li>
          <li><a class="footer__card-text first-link-footer" href="buy-instagram-followers.html">Buy Instagram Followers</a></li>
          <li><a class="footer__card-text" href="automatic-instagram-likes.html">Buy Instagram Auto-Likes</a></li>
          <li><a class="footer__card-text" href="buy-instagram-views.html">Buy Instagram Views</a></li>
          <li><a class="footer__card-text" href="buy-instagram-comments.html">Buy Instagram Comments</a></li>
          <li><a class="footer__card-text" href="free-instagram-likes.html">Free Trial Instagram Likes</a></li>
          <li><a class="footer__card-text" href="free-ig-followers.html">Free Instagram Followers</a></li>
          <li><a class="footer__card-text" href="free-trial-instagram-views.html">Free Instagram Views</a></li>
          <li><a class="footer__card-text" href="services.html">Services</a></li>
          <li><a class="footer__card-text" href="monitoring.html">Instagram Monitoring</a></li>
        </ul>
      </div>
      <div class="footer__cards">
        <ul class="footer__card us-footer us-second-footer">
          <li><a class="footer__card-text" href="buy-youtube-views.html">Buy YouTube Views</a></li>
          <li><a class="footer__card-text" href="buy-youtube-subscribers.html">Buy YouTube Subscribers</a></li>
          <li><a class="footer__card-text" href="buy-youtube-likes.html">Buy YouTube Likes</a></li>
          <li><a class="footer__card-text" href="buy-youtube-comments.html">Buy YouTube Comments</a></li>
        </ul>
      </div>
    </nav>
    <div class="footer__middle">
      <div class="footer__contact-container">
        <span class="footer__card-title footer__card-title-contact">${t('contactInfo')}</span>
        <div class="footer__contact-information-container">
          <p class="footer__card-text footer__contact-information">Company: Qloyd OÜ</p>
          <p class="footer__card-text footer__contact-information">Registration: 16257994</p>
          <p class="footer__card-text footer__contact-information">Address: Harju maakond, Tallinn,<br/>Lasnamäe linnaosa, Peterburi tee 71, 11415</p>
          <p class="footer__card-text footer__contact-information">E-mail: <a href="mailto:contact@poprey.com" style="color: inherit;">contact@poprey.com</a></p>
        </div>
      </div>
      <div class="footer__cards">
        <div class="footer__card">
          <div>
            <div><span class="footer__card-title"> ${t('rules')} </span></div>
            <div><a class="footer__card-text first-link-footer" href="rules.html">${t('termsOfService')}</a></div>
          </div>
        </div>
      </div>
      <div class="footer__cards">
        <ul class="footer__card help-footer">
          <li><span class="footer__card-title"> ${t('help')} </span></li>
          <li><a class="footer__card-text first-link-footer" href="account.html">${t('account')}</a></li>
          <li><a class="footer__card-text" href="blog.html">${t('blog')}</a></li>
          <li><a class="footer__card-text" href="faq.html">${t('faq')}</a></li>
          <li><a class="footer__card-text" href="contact.html">${t('contact')}</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      ${langHTML}
    </div>
  </div>
</footer>`;
  }

  // =====================================================
  // INJECTION FUNCTIONS
  // =====================================================

  function loadHeader() {
    const container = document.getElementById('header-container');
    if (container) {
      container.innerHTML = getHeaderHTML() + getServicesNavHTML();
    }
  }

  function loadFooter() {
    const container = document.getElementById('footer-container');
    if (container) {
      container.innerHTML = getFooterHTML();
    }
  }

  // Export for manual use
  window.PopreyComponents = {
    loadHeader: loadHeader,
    loadFooter: loadFooter,
    getHeaderHTML: getHeaderHTML,
    getFooterHTML: getFooterHTML,
    getServicesNavHTML: getServicesNavHTML,
    getCurrentLang: getCurrentLang,
    getBasePath: getBasePath
  };

  // Auto-load: handle both DOMContentLoaded and already-loaded scenarios
  function init() {
    loadHeader();
    loadFooter();

    // Add fadeIn animation to header and footer containers
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');

    if (headerContainer) {
      headerContainer.classList.add('fadeIn');
    }
    if (footerContainer) {
      footerContainer.classList.add('fadeIn');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already loaded, run immediately
    init();
  }

})();
