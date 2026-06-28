import { icons } from "./icons.js";

document.querySelectorAll("[data-icon]").forEach((iconContainer) => {
  const iconName = iconContainer.dataset.icon;

  iconContainer.innerHTML = icons[iconName];
});
