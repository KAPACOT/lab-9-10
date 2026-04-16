import { initRouter } from "./core/router.js";
import { initUI } from "./core/uiContainer.js";

function initApp() {
  initUI();
  initRouter();
  registerSW();
}

function registerSW() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/src/serviceWorker.js");
  }
}

initApp();
function initTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  document.body.classList.toggle("light", saved === "light");
}

function toggleTheme() {
  const isLight = document.body.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

window.toggleTheme = toggleTheme;
window.initTheme = initTheme;
let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (endX - startX > 80) navigate(-1);
  if (startX - endX > 80) navigate(1);
});

function navigate(dir) {
  const routes = ["#/tasks", "#/notes", "#/tracker"];
  let current = routes.indexOf(location.hash);
  if (current === -1) current = 0;

  let next = (current + dir + routes.length) % routes.length;
  location.hash = routes[next];
}
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const banner = document.getElementById("installBanner");
  banner.classList.remove("hidden");

  document.getElementById("installBtn").onclick = () => {
    deferredPrompt.prompt();
    deferredPrompt = null;
    banner.classList.add("hidden");
  };
});