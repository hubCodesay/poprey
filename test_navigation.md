# Тестування мовної навігації

## Як це працює:

### 1. Внутрішні посилання зберігають мову
- Якщо ви на `/de/index.html`, всі посилання в хедері та футері ведуть на `/de/...`
- Якщо ви на `/it/buy-instagram-followers.html`, всі посилання ведуть на `/it/...`
- Якщо ви на `/cs/services.html`, всі посилання ведуть на `/cs/...`

### 2. Перемикач мов у футері
- Знаходиться внизу сторінки в футері
- Дозволяє переключитися на ту саму сторінку, але іншою мовою
- Наприклад: з `/de/index.html` → `/it/index.html` → `/cs/index.html`

### 3. Приклади навігації:

**Сценарій 1: Користувач на німецькій версії**
- Поточна сторінка: `/de/index.html`
- Клік на "Followers" в хедері → `/de/buy-instagram-followers.html` ✅
- Клік на "YouTube" → `/de/buy-youtube-views.html` ✅
- Клік на посилання в футері → `/de/...` ✅
- Клік на прапорець Italiano → `/it/index.html` ✅

**Сценарій 2: Користувач на італійській версії**
- Поточна сторінка: `/it/buy-instagram-followers.html`
- Клік на "Likes" в навігації → `/it/index.html` ✅
- Клік на "Auto-Likes" → `/it/automatic-instagram-likes.html` ✅
- Клік на прапорець Deutsch → `/de/buy-instagram-followers.html` ✅

**Сценарій 3: Користувач на чеській версії**
- Поточна сторінка: `/cs/services.html`
- Клік на "Instagram" → `/cs/index.html` ✅
- Клік на "Rules" в футері → `/cs/rules.html` ✅
- Клік на прапорець Română → `/ro/services.html` ✅

## Технічні деталі:

### Функція `getBasePath()`
```javascript
function getBasePath() {
  const lang = getCurrentLang();
  return lang === "en" ? "" : "../";
}
```

### Використання в посиланнях:
```javascript
// Хедер
<a href="${basePath}index.html">

// Навігація сервісів
<a href="${basePath}buy-instagram-followers.html">

// Футер
<a href="${basePath}rules.html">
```

### Перемикач мов:
```javascript
const langLinks = [
  { code: "en", path: "", name: "English" },
  { code: "de", path: "de/", name: "Deutsch" },
  { code: "it", path: "it/", name: "Italiano" },
  // ...
];

// Генерація посилання
const href = langBasePath + l.path + currentPage;
// Наприклад: "../" + "it/" + "index.html" = "../it/index.html"
```

## Результат:
✅ Всі внутрішні посилання зберігають поточну мову
✅ Перемикач мов у футері дозволяє змінити мову
✅ Користувач залишається на тій самій сторінці при зміні мови
