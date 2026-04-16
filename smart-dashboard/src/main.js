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