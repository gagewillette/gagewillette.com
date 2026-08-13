export const featureFlags = {
  welcomeModalEnabled: (() => {
    const now = new Date();
    const month = now.getMonth(); // 0 = Jan, 3 = April, 4 = May
    return month <= 3; // true through April, false starting May
  })(),
} as const;

export const welcomeModalConfig = { // content for the internship modal
  cooldownDays: 7,
  storageKey: "dev-portfolio:last-welcome-modal-opened-at",
  title: "Exciting News!",
  body:
    "I just wrapped up my Summer 2026 Software Engineering Internship at Walmart Global Tech, where I shipped an ML-driven system into production. Check out the experience section for more on what I built.",
  dismissLabel: "Dismiss",
} as const;