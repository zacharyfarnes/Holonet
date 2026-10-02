const platformButtons = document.querySelectorAll("[data-setup-platform]");
const setupPanels = document.querySelectorAll("[data-setup-panel]");

function showSetup(platform) {
  platformButtons.forEach((button) => {
    const isSelected = button.dataset.setupPlatform === platform;
    button.setAttribute("aria-pressed", String(isSelected));
  });

  setupPanels.forEach((panel) => {
    panel.hidden = panel.dataset.setupPanel !== platform;
  });
}

platformButtons.forEach((button) => {
  button.addEventListener("click", () => showSetup(button.dataset.setupPlatform));
});
