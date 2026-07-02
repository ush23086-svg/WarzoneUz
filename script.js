const serverRequestText = "Call of Duty needs Central Asia servers. Uzbekistan, Kazakhstan, Tajikistan, Kyrgyzstan and Turkmenistan players are playing with very high ping. Please add Kazakhstan/Uzbekistan server support.";

const translations = {
  uz: {
    brand: "Warzone Uzbekistan",
    navProblem: "Ping Muammosi",
    navRequest: "Server So‘rovi",
    navSimulator: "FPS Simulator",
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
    requestTitle: "English matnni nusxalab feedback sifatida yuboring.",
    copyRequest: "So‘rovni nusxalash",
    sendEyebrow: "Bu so‘rovni qayerga yuborish kerak",
    sendTitle: "Game team ko‘rishi mumkin bo‘lgan joylarga joylang.",
    sendX: "Nusxalangan requestni post qiling va official Call of Duty yoki support accountlarni tag qiling.",
    sendInstagram: "Server va ping mavzulari muhokama qilinganda comment yoki story orqali ulashing.",
    sendSupport: "Support feedback kanallaridan foydalaning va English requestni aniq joylang.",
    simulatorEyebrow: "Warzone FPS Simulator",
    simulatorTitle: "PC qismlarini tanlang va taxminiy Warzone FPSni ko‘ring.",
    deviceType: "Device Type",
    simResolution: "Resolution",
    graphics: "Graphics",
    frameGeneration: "Frame Generation",
    estimatedFps: "Estimated FPS",
    framegenWarning: "Frame Generation faqat RTX 40/50 series GPUlarda ishlaydi.",
    fpsDisclaimer: "Bu taxminiy hisob, real FPS map, driver, settings, laptop power limit va temperaturega bog‘liq.",
    settingsEyebrow: "Recommended quick settings",
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
    navSimulator: "FPS симулятор",
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
    requestTitle: "Скопируйте английский текст и отправьте его как feedback.",
    copyRequest: "Скопировать",
    sendEyebrow: "Куда отправить этот запрос",
    sendTitle: "Опубликуйте там, где команда игры может это увидеть.",
    sendX: "Опубликуйте скопированный request и отметьте официальные аккаунты Call of Duty или support.",
    sendInstagram: "Поделитесь в комментариях или stories, когда обсуждают серверы и ping.",
    sendSupport: "Используйте каналы support feedback и вставьте английский request.",
    simulatorEyebrow: "Warzone FPS Simulator",
    simulatorTitle: "Выберите части ПК и посмотрите примерный FPS в Warzone.",
    deviceType: "Тип устройства",
    simResolution: "Разрешение",
    graphics: "Графика",
    frameGeneration: "Frame Generation",
    estimatedFps: "Примерный FPS",
    framegenWarning: "Frame Generation работает только на RTX 40/50 series GPU.",
    fpsDisclaimer: "Это оценка: реальный FPS зависит от карты, драйвера, настроек, power limit ноутбука и температуры.",
    settingsEyebrow: "Recommended quick settings",
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
    navSimulator: "FPS Simulator",
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
    requestTitle: "Copy the English message and send it as feedback.",
    copyRequest: "Copy Request",
    sendEyebrow: "Where to send this request",
    sendTitle: "Post it where the game team can see it.",
    sendX: "Post the copied request and tag official Call of Duty or support accounts.",
    sendInstagram: "Share it in comments or stories when server and ping topics are discussed.",
    sendSupport: "Use support feedback channels and paste the English request clearly.",
    simulatorEyebrow: "Warzone FPS Simulator",
    simulatorTitle: "Choose your PC parts and see estimated Warzone FPS.",
    deviceType: "Device Type",
    simResolution: "Resolution",
    graphics: "Graphics",
    frameGeneration: "Frame Generation",
    estimatedFps: "Estimated FPS",
    framegenWarning: "Frame Generation works only on RTX 40/50 series GPUs.",
    fpsDisclaimer: "This is an estimate, real FPS depends on map, driver, settings, laptop power limit and temperature.",
    settingsEyebrow: "Recommended quick settings",
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

const gpuScores = {
  rtx3050Laptop: { base: 72, frameGen: false },
  rtx4050Laptop: { base: 98, frameGen: true },
  rtx4060Laptop: { base: 118, frameGen: true },
  rtx3060: { base: 108, frameGen: false },
  rtx3060Ti: { base: 132, frameGen: false },
  rtx4060: { base: 128, frameGen: true },
  rtx4060Ti: { base: 152, frameGen: true },
  rtx4070: { base: 178, frameGen: true },
  rtx4070Super: { base: 205, frameGen: true },
  rtx5070: { base: 242, frameGen: true }
};

const cpuMultipliers = {
  r5600: 0.95,
  r7500f: 1.05,
  r7435hs: 0.92,
  i512400f: 0.96,
  i513420h: 0.9,
  i514600kf: 1.08,
  r7800x3d: 1.18
};

const graphicsMultipliers = {
  low: 1,
  medium: 0.82,
  high: 0.66
};

const dlssMultipliers = {
  off: 1,
  quality: 1.08,
  balanced: 1.16,
  performance: 1.28
};

const storageKey = "warzoneuz-language";
const statusEl = document.querySelector(".copy-status");
const copyButtons = document.querySelectorAll("[data-copy-request]");
const languageButtons = document.querySelectorAll("[data-lang]");
const toastEl = document.createElement("div");
const fpsControls = {
  device: document.querySelector("#device-type"),
  gpu: document.querySelector("#gpu"),
  cpu: document.querySelector("#cpu"),
  ram: document.querySelector("#ram"),
  resolution: document.querySelector("#resolution"),
  graphics: document.querySelector("#graphics"),
  dlss: document.querySelector("#dlss"),
  frameGeneration: document.querySelector("#frame-generation")
};
const fpsRangeEl = document.querySelector("#fps-range");
const fpsLowEl = document.querySelector("#fps-low");
const fpsMediumEl = document.querySelector("#fps-medium");
const fpsHighEl = document.querySelector("#fps-high");
const framegenWarningEl = document.querySelector("#framegen-warning");
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
  updateFrameGenerationState();
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

  try {
    await navigator.clipboard.writeText(serverRequestText);
  } catch (error) {
    const textArea = document.createElement("textarea");
    textArea.value = serverRequestText;
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

function formatRange(value) {
  const low = Math.max(35, Math.round((value * 0.9) / 5) * 5);
  const high = Math.max(low + 10, Math.round((value * 1.12) / 5) * 5);

  return `${low}-${high}`;
}

function estimateFps(graphicsPreset) {
  const gpu = gpuScores[fpsControls.gpu.value];
  const cpuMultiplier = cpuMultipliers[fpsControls.cpu.value] || 1;
  const ramMultiplier = fpsControls.ram.value === "32" ? 1.05 : 1;
  const resolutionMultiplier = fpsControls.resolution.value === "1440" ? 0.72 : 1;
  const graphicsMultiplier = graphicsMultipliers[graphicsPreset] || 1;
  const dlssMultiplier = dlssMultipliers[fpsControls.dlss.value] || 1;
  const deviceMultiplier = fpsControls.device.value === "laptop" ? 0.9 : 1;
  const frameGenMultiplier = fpsControls.frameGeneration.value === "on" && gpu.frameGen ? 1.28 : 1;

  return gpu.base * cpuMultiplier * ramMultiplier * resolutionMultiplier * graphicsMultiplier * dlssMultiplier * deviceMultiplier * frameGenMultiplier;
}

function updateFrameGenerationState() {
  const gpu = gpuScores[fpsControls.gpu.value];
  const canUseFrameGen = Boolean(gpu?.frameGen);

  fpsControls.frameGeneration.disabled = !canUseFrameGen;

  if (!canUseFrameGen) {
    fpsControls.frameGeneration.value = "off";
  }

  framegenWarningEl.classList.toggle("is-visible", !canUseFrameGen);
}

function updateFpsEstimate() {
  updateFrameGenerationState();

  const selectedValue = estimateFps(fpsControls.graphics.value);
  const lowValue = estimateFps("low");
  const mediumValue = estimateFps("medium");
  const highValue = estimateFps("high");

  fpsRangeEl.textContent = `${formatRange(selectedValue)} FPS`;
  fpsLowEl.textContent = formatRange(lowValue);
  fpsMediumEl.textContent = formatRange(mediumValue);
  fpsHighEl.textContent = formatRange(highValue);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

copyButtons.forEach((button) => {
  button.addEventListener("click", copyServerRequest);
});

Object.values(fpsControls).forEach((control) => {
  control.addEventListener("change", updateFpsEstimate);
});

translatePage(currentLanguage);
updateFpsEstimate();
