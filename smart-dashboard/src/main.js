import { initUI } from "./core/uiContainer.js";
import { initRouter } from "./core/router.js";

initUI();
initRouter();

// Регистрация Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/src/serviceWorker.js");
  });
}