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
    "I’m excited to share that I’ll be joining Walmart Global Tech as a Software Engineering Intern for Summer 2026. I’m looking forward to working on impactful technology at scale and continuing to grow as a developer.",
  dismissLabel: "Dismiss",
} as const;