/**
 * Bikenest static site config
 * Set appStore to the live App Store URL when the iOS app is published.
 */
const APP_LINKS = {
  appStore: "",
  playStore: "https://play.google.com/store/apps/details?id=com.sveyo.app",
};

document.querySelectorAll("[data-store]").forEach((el) => {
  const store = el.dataset.store;
  if (APP_LINKS[store]) el.href = APP_LINKS[store];
});

["hero-play-store", "download-play-store"].forEach((id) => {
  const el = document.getElementById(id);
  if (el && APP_LINKS.playStore) el.href = APP_LINKS.playStore;
});

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open", !isOpen);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    });
  });
}
