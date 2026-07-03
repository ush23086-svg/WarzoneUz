const serverRequestText = "Call of Duty needs Central Asia servers. Uzbekistan, Kazakhstan, Tajikistan, Kyrgyzstan and Turkmenistan players are playing with very high ping. Please add Kazakhstan/Uzbekistan server support.";

const translations = {
  uz: {
    brand: "Warzone Uzbekistan",
    navProblem: "Ping Muammosi",
    navRequest: "Server So‘rovi",
    navSimulator: "FPS Simulator",
    navLoadout: "Loadout",
    navReport: "Ping Report",
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
    fpsDisclaimer: "Bu taxminiy hisob, real FPS map, driver, settings, laptop power limit, temperature va pingga bog‘liq.",
    loadoutEyebrow: "Meta Loadout Analyzer",
    loadoutTitle: "Sample loadout yig‘ing va taxminiy effectivenessni ko‘ring.",
    weaponCategory: "Weapon category",
    weaponName: "Weapon name",
    playstyle: "Playstyle",
    sampleLoadout: "Sample loadout",
    attachmentNote: "5 tagacha attachment ishlating. Ortiqcha fieldlar hisobga olinmaydi.",
    effectiveness: "Estimated Effectiveness",
    metaTier: "Meta Tier",
    generateCode: "Code yaratish",
    saveLoadout: "Loadoutni saqlash",
    copyLoadout: "Loadoutni nusxalash",
    copyCode: "Codeni nusxalash",
    copyComment: "Telegram/X uchun comment",
    importCode: "Import Code",
    loadoutDisclaimer: "Score taxminiy. Real performance game updates, recoil skill, attachments, platform, FPS, ping va playstylega bog‘liq.",
    savedLoadouts: "Saqlangan loadoutlarim",
    reportEyebrow: "Ping Report Generator",
    reportTitle: "Aniq English ping report yarating.",
    country: "Country",
    city: "City",
    currentPing: "Current ping",
    serverRoute: "Server route",
    copyPingReport: "Ping reportni nusxalash",
    copyForX: "X uchun nusxalash",
    copyForInstagram: "Instagram uchun nusxalash",
    commentsEyebrow: "Copy Comments",
    commentsTitle: "Post va support uchun tayyor English template’lar.",
    shortComment: "Short comment",
    mediumComment: "Medium comment",
    politeComment: "Angry but polite comment",
    supportComment: "Official support message",
    copy: "Copy",
    mapEyebrow: "Central Asia Server Map",
    mapTitle: "Yaqin Warzone server yo‘q.",
    mapText: "Central Asia players EU / Middle East serverlariga route qilinadi.",
    qrTitle: "Telegramga qo‘shilish uchun QR scan qiling.",
    roadmapEyebrow: "Roadmap",
    roadmapTitle: "Bu community keyin nimalarni quradi.",
    roadmapCommunity: "Central Asia Warzone community qurish",
    roadmapReports: "Ping reportlarni yig‘ish",
    roadmapCampaign: "Server request campaign ulashish",
    roadmapTelegram: "Telegram squadni o‘stirish",
    roadmapHelp: "Playerlarga eng yaxshi FPS/settings/loadout topishda yordam berish",
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
    navLoadout: "Loadout",
    navReport: "Ping Report",
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
    fpsDisclaimer: "Это оценка: реальный FPS зависит от карты, драйвера, настроек, power limit ноутбука, температуры и ping.",
    loadoutEyebrow: "Meta Loadout Analyzer",
    loadoutTitle: "Соберите sample loadout и оцените эффективность.",
    weaponCategory: "Категория оружия",
    weaponName: "Название оружия",
    playstyle: "Стиль игры",
    sampleLoadout: "Sample loadout",
    attachmentNote: "Используйте до 5 attachments. Лишние поля не учитываются.",
    effectiveness: "Estimated Effectiveness",
    metaTier: "Meta Tier",
    generateCode: "Создать код",
    saveLoadout: "Сохранить loadout",
    copyLoadout: "Скопировать loadout",
    copyCode: "Скопировать код",
    copyComment: "Комментарий для Telegram/X",
    importCode: "Import Code",
    loadoutDisclaimer: "Scores are estimates. Реальный результат зависит от updates, recoil skill, attachments, platform, FPS, ping и playstyle.",
    savedLoadouts: "Мои сохраненные loadouts",
    reportEyebrow: "Ping Report Generator",
    reportTitle: "Создайте понятный English ping report.",
    country: "Страна",
    city: "Город",
    currentPing: "Текущий ping",
    serverRoute: "Маршрут сервера",
    copyPingReport: "Скопировать ping report",
    copyForX: "Скопировать для X",
    copyForInstagram: "Скопировать для Instagram",
    commentsEyebrow: "Copy Comments",
    commentsTitle: "Готовые English templates для постов и support.",
    shortComment: "Short comment",
    mediumComment: "Medium comment",
    politeComment: "Angry but polite comment",
    supportComment: "Official support message",
    copy: "Copy",
    mapEyebrow: "Central Asia Server Map",
    mapTitle: "Нет близкого Warzone сервера.",
    mapText: "Central Asia players are routed to EU / Middle East servers.",
    qrTitle: "Сканируйте QR, чтобы вступить в Telegram.",
    roadmapEyebrow: "Roadmap",
    roadmapTitle: "Что community строит дальше.",
    roadmapCommunity: "Build Central Asia Warzone community",
    roadmapReports: "Collect ping reports",
    roadmapCampaign: "Share server request campaign",
    roadmapTelegram: "Grow Telegram squad",
    roadmapHelp: "Help players find best FPS/settings/loadouts",
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
    navLoadout: "Loadout",
    navReport: "Ping Report",
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
    fpsDisclaimer: "This is an estimate, real FPS depends on map, driver, settings, laptop power limit, temperature and ping.",
    loadoutEyebrow: "Meta Loadout Analyzer",
    loadoutTitle: "Build a sample loadout and estimate its effectiveness.",
    weaponCategory: "Weapon category",
    weaponName: "Weapon name",
    playstyle: "Playstyle",
    sampleLoadout: "Sample loadout",
    attachmentNote: "Use up to 5 attachments. Extra fields are ignored.",
    effectiveness: "Estimated Effectiveness",
    metaTier: "Meta Tier",
    generateCode: "Generate Code",
    saveLoadout: "Save My Loadout",
    copyLoadout: "Copy Loadout",
    copyCode: "Copy Code",
    copyComment: "Copy Comment for Telegram/X",
    importCode: "Import Code",
    loadoutDisclaimer: "Scores are estimates. Real performance depends on game updates, recoil skill, attachments, platform, FPS, ping and playstyle.",
    savedLoadouts: "My Saved Loadouts",
    reportEyebrow: "Ping Report Generator",
    reportTitle: "Generate a clear English ping report.",
    country: "Country",
    city: "City",
    currentPing: "Current ping",
    serverRoute: "Server route",
    copyPingReport: "Copy Ping Report",
    copyForX: "Copy for X",
    copyForInstagram: "Copy for Instagram",
    commentsEyebrow: "Copy Comments",
    commentsTitle: "Ready English templates for posts and support messages.",
    shortComment: "Short comment",
    mediumComment: "Medium comment",
    politeComment: "Angry but polite comment",
    supportComment: "Official support message",
    copy: "Copy",
    mapEyebrow: "Central Asia Server Map",
    mapTitle: "No nearby Warzone server.",
    mapText: "Central Asia players are routed to EU / Middle East servers.",
    qrTitle: "Scan QR to join Telegram.",
    roadmapEyebrow: "Roadmap",
    roadmapTitle: "What this community is building next.",
    roadmapCommunity: "Build Central Asia Warzone community",
    roadmapReports: "Collect ping reports",
    roadmapCampaign: "Share server request campaign",
    roadmapTelegram: "Grow Telegram squad",
    roadmapHelp: "Help players find best FPS/settings/loadouts",
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
const loadoutStorageKey = "warzoneuz-loadouts";
const loadoutControls = {
  category: document.querySelector("#weapon-category"),
  name: document.querySelector("#weapon-name"),
  playstyle: document.querySelector("#playstyle"),
  preset: document.querySelector("#preset-loadout"),
  code: document.querySelector("#loadout-code")
};
const statControls = {
  damage: document.querySelector("#stat-damage"),
  range: document.querySelector("#stat-range"),
  recoil: document.querySelector("#stat-recoil"),
  mobility: document.querySelector("#stat-mobility"),
  ads: document.querySelector("#stat-ads"),
  velocity: document.querySelector("#stat-velocity"),
  mag: document.querySelector("#stat-mag")
};
const attachmentInputs = Array.from(document.querySelectorAll("[data-attachment]"));
const effectivenessEl = document.querySelector("#effectiveness-score");
const metaTierEl = document.querySelector("#meta-tier");
const savedLoadoutsListEl = document.querySelector("#saved-loadouts-list");
const pingReportControls = {
  country: document.querySelector("#report-country"),
  city: document.querySelector("#report-city"),
  platform: document.querySelector("#report-platform"),
  ping: document.querySelector("#report-ping"),
  route: document.querySelector("#report-route")
};
const pingReportOutputEl = document.querySelector("#ping-report-output");
const mascotStage = document.querySelector(".mascot-stage");
const mascotElements = Array.from(document.querySelectorAll(".mascot"));
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
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

function getAttachments() {
  return attachmentInputs
    .map((input) => ({ slot: input.dataset.attachment, value: input.value.trim() }))
    .filter((attachment) => attachment.value)
    .slice(0, 5);
}

function getLoadoutData() {
  const stats = {};

  Object.entries(statControls).forEach(([key, input]) => {
    stats[key] = Number(input.value);
  });

  return {
    category: loadoutControls.category.value,
    name: loadoutControls.name.value.trim() || "Custom Loadout",
    playstyle: loadoutControls.playstyle.value,
    attachments: getAttachments(),
    stats
  };
}

function setLoadoutData(data) {
  loadoutControls.category.value = data.category || "Assault Rifle";
  loadoutControls.name.value = data.name || "";
  loadoutControls.playstyle.value = data.playstyle || "mid";

  attachmentInputs.forEach((input) => {
    const attachment = (data.attachments || []).find((item) => item.slot === input.dataset.attachment);
    input.value = attachment ? attachment.value : "";
  });

  Object.entries(statControls).forEach(([key, input]) => {
    input.value = data.stats?.[key] || input.value;
    input.nextElementSibling.textContent = input.value;
  });

  updateLoadoutScore();
}

function scoreWeights(playstyle) {
  const weights = {
    close: { damage: 1.25, range: 0.6, recoil: 0.8, mobility: 1.4, ads: 1.35, velocity: 0.65, mag: 0.85 },
    mid: { damage: 1.05, range: 1, recoil: 1.05, mobility: 0.95, ads: 1, velocity: 1, mag: 0.95 },
    long: { damage: 0.95, range: 1.45, recoil: 1.35, mobility: 0.55, ads: 0.75, velocity: 1.45, mag: 0.8 },
    ranked: { damage: 1, range: 1, recoil: 1.25, mobility: 0.95, ads: 1.2, velocity: 0.95, mag: 1.15 },
    resurgence: { damage: 1.05, range: 0.75, recoil: 0.9, mobility: 1.45, ads: 1.35, velocity: 0.75, mag: 0.95 },
    bigmap: { damage: 0.95, range: 1.4, recoil: 1.2, mobility: 0.65, ads: 0.8, velocity: 1.4, mag: 0.9 }
  };

  return weights[playstyle] || weights.mid;
}

function calculateLoadoutScore(data) {
  const weights = scoreWeights(data.playstyle);
  const totalWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
  const weightedStats = Object.entries(weights).reduce((sum, [key, weight]) => {
    return sum + (data.stats[key] || 1) * weight;
  }, 0);
  const attachmentBonus = Math.min(data.attachments.length, 5) * 1.2;
  const score = Math.round((weightedStats / (totalWeight * 10)) * 100 + attachmentBonus);

  return Math.min(100, Math.max(25, score));
}

function tierForScore(score) {
  if (score >= 90) return "S Tier";
  if (score >= 80) return "A Tier";
  if (score >= 70) return "B Tier";
  if (score >= 60) return "C Tier";
  return "Needs work";
}

function updateLoadoutScore() {
  const data = getLoadoutData();
  const score = calculateLoadoutScore(data);

  effectivenessEl.textContent = `${score}%`;
  metaTierEl.textContent = tierForScore(score);

  Object.values(statControls).forEach((input) => {
    input.nextElementSibling.textContent = input.value;
  });
}

function encodeLoadout(data = getLoadoutData()) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
}

function decodeLoadout(code) {
  return JSON.parse(decodeURIComponent(escape(atob(code.trim()))));
}

function loadoutSummary(data = getLoadoutData()) {
  const score = calculateLoadoutScore(data);
  const attachments = data.attachments.map((item) => `${item.slot}: ${item.value}`).join(", ") || "No attachments";

  return `${data.name} (${data.category}) - ${tierForScore(score)} / ${score}%. Playstyle: ${data.playstyle}. Attachments: ${attachments}.`;
}

function saveLoadout() {
  const data = getLoadoutData();
  const saved = JSON.parse(localStorage.getItem(loadoutStorageKey) || "[]");
  saved.unshift({ id: Date.now(), data });
  localStorage.setItem(loadoutStorageKey, JSON.stringify(saved.slice(0, 12)));
  renderSavedLoadouts();
}

function renderSavedLoadouts() {
  const saved = JSON.parse(localStorage.getItem(loadoutStorageKey) || "[]");

  savedLoadoutsListEl.innerHTML = "";

  if (!saved.length) {
    const empty = document.createElement("p");
    empty.className = "tool-note";
    empty.textContent = "No saved loadouts yet.";
    savedLoadoutsListEl.appendChild(empty);
    return;
  }

  saved.forEach((item) => {
    const row = document.createElement("div");
    row.className = "saved-loadout-item";
    row.innerHTML = `<div><strong>${item.data.name}</strong><small>${item.data.category} · ${item.data.playstyle}</small></div>`;

    const actions = document.createElement("div");
    actions.className = "tool-actions";

    const loadButton = document.createElement("button");
    loadButton.className = "delete-loadout";
    loadButton.type = "button";
    loadButton.textContent = "Load";
    loadButton.addEventListener("click", () => setLoadoutData(item.data));

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-loadout";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      const next = saved.filter((savedItem) => savedItem.id !== item.id);
      localStorage.setItem(loadoutStorageKey, JSON.stringify(next));
      renderSavedLoadouts();
    });

    actions.append(loadButton, deleteButton);
    row.appendChild(actions);
    savedLoadoutsListEl.appendChild(row);
  });
}

function applyPreset(value) {
  const presets = {
    balancedAr: {
      category: "Assault Rifle",
      name: "Balanced AR",
      playstyle: "mid",
      attachments: [
        { slot: "Muzzle", value: "Compensator" },
        { slot: "Barrel", value: "Long Barrel" },
        { slot: "Optic", value: "Clean 2.5x" },
        { slot: "Underbarrel", value: "Vertical Grip" },
        { slot: "Magazine", value: "Extended Mag" }
      ],
      stats: { damage: 7, range: 8, recoil: 8, mobility: 6, ads: 7, velocity: 8, mag: 8 }
    },
    closeSmg: {
      category: "SMG",
      name: "Close Range SMG",
      playstyle: "close",
      attachments: [
        { slot: "Muzzle", value: "Light Suppressor" },
        { slot: "Barrel", value: "Short Barrel" },
        { slot: "Stock", value: "Mobility Stock" },
        { slot: "Magazine", value: "Fast Mag" },
        { slot: "Rear Grip", value: "Quick Grip" }
      ],
      stats: { damage: 7, range: 5, recoil: 6, mobility: 9, ads: 9, velocity: 5, mag: 7 }
    },
    longSniper: {
      category: "Sniper",
      name: "Long Range Sniper",
      playstyle: "long",
      attachments: [
        { slot: "Muzzle", value: "Suppressor" },
        { slot: "Barrel", value: "Heavy Barrel" },
        { slot: "Optic", value: "Long Range Scope" },
        { slot: "Ammunition", value: "High Velocity" },
        { slot: "Stock", value: "Stable Stock" }
      ],
      stats: { damage: 9, range: 10, recoil: 8, mobility: 4, ads: 5, velocity: 10, mag: 5 }
    }
  };

  if (presets[value]) {
    setLoadoutData(presets[value]);
  }
}

function generatePingReport() {
  const city = pingReportControls.city.value.trim() || "Samarkand";
  const country = pingReportControls.country.value.trim() || "Uzbekistan";
  const ping = pingReportControls.ping.value.trim() || "180-250 ms";
  const route = pingReportControls.route.value;
  const platform = pingReportControls.platform.value;

  return `I am from ${city}, ${country}. My ping in Warzone is usually ${ping} on ${platform}, routed through ${route}. Central Asia players need closer servers.`;
}

function updatePingReport() {
  pingReportOutputEl.textContent = generatePingReport();
}

function copyText(text, button) {
  const dictionary = translations[currentLanguage] || translations.en;

  navigator.clipboard.writeText(text).catch(() => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  });

  showToast(dictionary.copied);
  showCopiedButton(button, dictionary.copied);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setMascotState(mascot, state) {
  mascot.classList.remove("is-idle", "is-walking", "is-jumping");
  mascot.classList.add(`is-${state}`);
}

function moveMascot(mascot, mascotState, x) {
  mascotState.x = x;
  mascot.style.transform = `translateX(${Math.round(mascotState.x)}px) scaleX(${mascotState.direction})`;
}

function stageMaxX(mascot) {
  if (!mascotStage) {
    return 0;
  }

  return Math.max(0, mascotStage.clientWidth - mascot.offsetWidth - 8);
}

function scheduleMascot(mascot, mascotState) {
  const delay = reducedMotionQuery.matches ? 5500 : 1200 + Math.random() * 2400;

  window.setTimeout(() => {
    tickMascot(mascot, mascotState);
  }, delay);
}

function tickMascot(mascot, mascotState) {
  if (!mascotStage || window.getComputedStyle(mascotStage).display === "none") {
    return;
  }

  const maxX = stageMaxX(mascot);

  if (reducedMotionQuery.matches) {
    setMascotState(mascot, "idle");
    moveMascot(mascot, mascotState, clamp(mascotState.x, 0, maxX));
    scheduleMascot(mascot, mascotState);
    return;
  }

  const roll = Math.random();

  if (roll < 0.22) {
    setMascotState(mascot, "jumping");
    window.setTimeout(() => setMascotState(mascot, "idle"), 620);
  } else if (roll < 0.72) {
    const distance = 80 + Math.random() * 190;
    const nextDirection = Math.random() < 0.28 ? mascotState.direction * -1 : mascotState.direction;
    let nextX = mascotState.x + distance * nextDirection;

    if (nextX <= 0 || nextX >= maxX) {
      mascotState.direction *= -1;
      nextX = clamp(mascotState.x + distance * mascotState.direction, 0, maxX);
    } else {
      mascotState.direction = nextDirection;
    }

    setMascotState(mascot, "walking");
    moveMascot(mascot, mascotState, nextX);
    window.setTimeout(() => setMascotState(mascot, "idle"), 950);
  } else {
    if (Math.random() < 0.35) {
      mascotState.direction *= -1;
      moveMascot(mascot, mascotState, mascotState.x);
    }

    setMascotState(mascot, "idle");
  }

  scheduleMascot(mascot, mascotState);
}

function initMascots() {
  if (!mascotStage || !mascotElements.length) {
    return;
  }

  mascotElements.forEach((mascot, index) => {
    const maxX = stageMaxX(mascot);
    const mascotState = {
      x: clamp(index === 0 ? 72 : 210, 0, maxX),
      direction: index === 0 ? 1 : -1
    };

    setMascotState(mascot, "idle");
    moveMascot(mascot, mascotState, mascotState.x);
    scheduleMascot(mascot, mascotState);
    mascot._mascotState = mascotState;
  });
}

window.addEventListener("resize", () => {
  mascotElements.forEach((mascot) => {
    if (!mascot._mascotState) {
      return;
    }

    moveMascot(mascot, mascot._mascotState, clamp(mascot._mascotState.x, 0, stageMaxX(mascot)));
  });
});

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

Object.values(statControls).forEach((input) => {
  input.addEventListener("input", updateLoadoutScore);
});

Object.values(loadoutControls).forEach((control) => {
  if (control && control !== loadoutControls.code && control !== loadoutControls.preset) {
    control.addEventListener("input", updateLoadoutScore);
    control.addEventListener("change", updateLoadoutScore);
  }
});

attachmentInputs.forEach((input) => {
  input.addEventListener("input", updateLoadoutScore);
});

loadoutControls.preset.addEventListener("change", () => applyPreset(loadoutControls.preset.value));

document.querySelector("#generate-code").addEventListener("click", () => {
  loadoutControls.code.value = encodeLoadout();
});

document.querySelector("#save-loadout").addEventListener("click", () => {
  saveLoadout();
  showToast((translations[currentLanguage] || translations.en).copied);
});

document.querySelector("#copy-loadout").addEventListener("click", (event) => {
  copyText(loadoutSummary(), event.currentTarget);
});

document.querySelector("#copy-code").addEventListener("click", (event) => {
  const code = loadoutControls.code.value.trim() || encodeLoadout();
  loadoutControls.code.value = code;
  copyText(code, event.currentTarget);
});

document.querySelector("#copy-comment").addEventListener("click", (event) => {
  copyText(`My Warzone sample loadout: ${loadoutSummary()} Scores are estimates, not official meta.`, event.currentTarget);
});

loadoutControls.code.addEventListener("change", () => {
  if (!loadoutControls.code.value.trim()) {
    return;
  }

  try {
    setLoadoutData(decodeLoadout(loadoutControls.code.value));
  } catch (error) {
    loadoutControls.code.value = "";
    showToast("Invalid code");
  }
});

Object.values(pingReportControls).forEach((control) => {
  control.addEventListener("input", updatePingReport);
  control.addEventListener("change", updatePingReport);
});

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const report = generatePingReport();
    const variants = {
      ping: report,
      pingX: `${report} #Warzone #CentralAsiaServers`,
      pingInstagram: `${report}\n\nPlease support Central Asia players.`
    };

    copyText(variants[button.dataset.copyTarget], button);
  });
});

document.querySelectorAll("[data-copy-template]").forEach((button) => {
  button.addEventListener("click", () => {
    const template = document.querySelector(`[data-template="${button.dataset.copyTemplate}"]`);
    copyText(template.textContent.trim(), button);
  });
});

translatePage(currentLanguage);
updateFpsEstimate();
updateLoadoutScore();
updatePingReport();
renderSavedLoadouts();
initMascots();
