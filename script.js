const translations = {
  uz: {
    brand: "Warzone Uzbekistan",
    navProblem: "Ping Muammosi",
    navRequest: "Server So‘rovi",
    navSettings: "Sozlamalar",
    navCommunity: "Community",
    heroEyebrow: "Central Asia Squad Network",
    heroTitle: "Warzone Uzbekistan",
    heroSubtitle: "Central Asia o‘yinchilariga yaxshiroq serverlar va pastroq ping kerak.",
    joinTelegram: "Telegramga qo‘shilish",
    copyServerRequest: "Server so‘rovini nusxalash",
    signalRoute: "Hozirgi route",
    signalPing: "Yuqori ping",
    signalServers: "EU / Middle East serverlari",
    problemEyebrow: "Ping Muammosi",
    problemTitle: "Central Asia uchun yaqinroq matchmaking infratuzilmasi kerak.",
    problemText: "Uzbekistan, Kazakhstan, Tajikistan, Kyrgyzstan va Turkmenistan o‘yinchilari ko‘pincha Europe/Middle East serverlarida yuqori ping bilan o‘ynaydi.",
    requestEyebrow: "Server So‘rovi",
    requestTitle: "Matnni nusxalab feedback sifatida yuboring.",
    serverRequestText: "Call of Duty uchun Central Asia serverlari kerak. Uzbekistan, Kazakhstan, Tajikistan, Kyrgyzstan va Turkmenistan o‘yinchilari juda yuqori ping bilan o‘ynamoqda. Iltimos, Kazakhstan/Uzbekistan server support qo‘shing.",
    copyRequest: "So‘rovni nusxalash",
    settingsEyebrow: "Eng yaxshi Warzone sozlamalari",
    settingsTitle: "Competitive o‘yin uchun tez va toza sozlamalar.",
    settingDisplayLabel: "Display",
    settingDisplayValue: "Fullscreen Exclusive",
    settingResolutionLabel: "Resolution",
    settingOff: "Off",
    settingDlssValue: "Balanced yoki Performance",
    settingTextureLabel: "Texture Quality",
    settingTextureValue: "Normal",
    communityEyebrow: "Community",
    communityTitle: "Warzone Uzbekistan Telegram squad’iga qo‘shiling.",
    openTelegram: "Telegramni ochish",
    footer: "Warzone Uzbekistan Community. Activision bilan bog‘liq emas.",
    copied: "Nusxalandi ✅"
  },
  ru: {
    brand: "Warzone Uzbekistan",
    navProblem: "Проблема пинга",
    navRequest: "Запрос серверов",
    navSettings: "Настройки",
    navCommunity: "Сообщество",
    heroEyebrow: "Central Asia Squad Network",
    heroTitle: "Warzone Uzbekistan",
    heroSubtitle: "Игрокам Центральной Азии нужны лучшие серверы и более низкий пинг.",
    joinTelegram: "Вступить в Telegram",
    copyServerRequest: "Скопировать запрос",
    signalRoute: "Текущий маршрут",
    signalPing: "Высокий пинг",
    signalServers: "Серверы EU / Middle East",
    problemEyebrow: "Проблема пинга",
    problemTitle: "Центральной Азии нужна более близкая инфраструктура matchmaking.",
    problemText: "Игроки из Uzbekistan, Kazakhstan, Tajikistan, Kyrgyzstan и Turkmenistan часто играют с высоким пингом на серверах Europe/Middle East.",
    requestEyebrow: "Запрос серверов",
    requestTitle: "Скопируйте сообщение и отправьте его как feedback.",
    serverRequestText: "Call of Duty нужны серверы в Central Asia. Игроки из Uzbekistan, Kazakhstan, Tajikistan, Kyrgyzstan и Turkmenistan играют с очень высоким пингом. Пожалуйста, добавьте поддержку серверов Kazakhstan/Uzbekistan.",
    copyRequest: "Скопировать",
    settingsEyebrow: "Лучшие настройки Warzone",
    settingsTitle: "Быстрые и чистые настройки для competitive игры.",
    settingDisplayLabel: "Экран",
    settingDisplayValue: "Fullscreen Exclusive",
    settingResolutionLabel: "Разрешение",
    settingOff: "Выкл.",
    settingDlssValue: "Balanced или Performance",
    settingTextureLabel: "Качество текстур",
    settingTextureValue: "Normal",
    communityEyebrow: "Сообщество",
    communityTitle: "Присоединяйтесь к Telegram squad Warzone Uzbekistan.",
    openTelegram: "Открыть Telegram",
    footer: "Warzone Uzbekistan Community. Не связано с Activision.",
    copied: "Скопировано ✅"
  },
  en: {
    brand: "Warzone Uzbekistan",
    navProblem: "Ping Problem",
    navRequest: "Server Request",
    navSettings: "Settings",
    navCommunity: "Community",
    heroEyebrow: "Central Asia Squad Network",
    heroTitle: "Warzone Uzbekistan",
    heroSubtitle: "Central Asia players need better servers and lower ping.",
    joinTelegram: "Join Telegram",
    copyServerRequest: "Copy Server Request",
    signalRoute: "Current Route",
    signalPing: "High Ping",
    signalServers: "EU / Middle East servers",
    problemEyebrow: "Ping Problem",
    problemTitle: "Central Asia needs closer matchmaking infrastructure.",
    problemText: "Uzbekistan, Kazakhstan, Tajikistan, Kyrgyzstan and Turkmenistan players often play with high ping on Europe/Middle East servers.",
    requestEyebrow: "Server Request",
    requestTitle: "Copy the message and send it as feedback.",
    serverRequestText: "Call of Duty needs Central Asia servers. Uzbekistan, Kazakhstan, Tajikistan, Kyrgyzstan and Turkmenistan players are playing with very high ping. Please add Kazakhstan/Uzbekistan server support.",
    copyRequest: "Copy Request",
    settingsEyebrow: "Best Warzone Settings",
    settingsTitle: "Fast, clean settings for competitive play.",
    settingDisplayLabel: "Display",
    settingDisplayValue: "Fullscreen Exclusive",
    settingResolutionLabel: "Resolution",
    settingOff: "Off",
    settingDlssValue: "Balanced or Performance",
    settingTextureLabel: "Texture Quality",
    settingTextureValue: "Normal",
    communityEyebrow: "Community",
    communityTitle: "Join the Warzone Uzbekistan Telegram squad.",
    openTelegram: "Open Telegram",
    footer: "Warzone Uzbekistan Community. Not affiliated with Activision.",
    copied: "Copied to clipboard ✅"
  }
};

const storageKey = "warzoneuz-language";
const statusEl = document.querySelector(".copy-status");
const copyButtons = document.querySelectorAll("[data-copy-request]");
const languageButtons = document.querySelectorAll("[data-lang]");
const toastEl = document.createElement("div");
let currentLanguage = detectLanguage();
let toastTimer;

toastEl.className = "toast";
toastEl.setAttribute("role", "status");
toastEl.setAttribute("aria-live", "polite");
document.body.appendChild(toastEl);

function detectLanguage() {
  const savedLanguage = localStorage.getItem(storageKey);

  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }

  const browserLanguage = navigator.language.toLowerCase();

  if (browserLanguage.startsWith("ru")) {
    return "ru";
  }

  if (browserLanguage.startsWith("uz")) {
    return "uz";
  }

  return "en";
}

function translatePage(language) {
  const dictionary = translations[language] || translations.en;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  copyButtons.forEach((button) => {
    button.dataset.originalText = button.textContent;
  });

  if (statusEl) {
    statusEl.textContent = "";
  }
}

function setLanguage(language) {
  if (!translations[language]) {
    return;
  }

  currentLanguage = language;
  localStorage.setItem(storageKey, language);
  translatePage(language);
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("is-visible");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("is-visible");
  }, 2000);
}

function showCopiedButton(button, message) {
  if (!button) {
    return;
  }

  const originalText = button.dataset.originalText || button.textContent;
  button.textContent = message;

  clearTimeout(button.copyTimer);
  button.copyTimer = setTimeout(() => {
    button.textContent = originalText;
  }, 2000);
}

async function copyServerRequest(event) {
  const button = event.currentTarget;
  const dictionary = translations[currentLanguage] || translations.en;
  const requestText = dictionary.serverRequestText;

  try {
    await navigator.clipboard.writeText(requestText);
  } catch (error) {
    const textArea = document.createElement("textarea");
    textArea.value = requestText;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  if (statusEl) {
    statusEl.textContent = dictionary.copied;
  }

  showToast(dictionary.copied);
  showCopiedButton(button, dictionary.copied);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

copyButtons.forEach((button) => {
  button.addEventListener("click", copyServerRequest);
});

translatePage(currentLanguage);
