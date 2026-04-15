import { initRouter } from "./core/router.js";
import { initUI } from "./core/uiContainer.js";

function initApp() {
  console.log("App started");
  initUI();
  initRouter();
  registerServiceWorker();
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/src/serviceWorker.js")
        .then(reg => console.log("SW registered:", reg))
        .catch(err => console.error("SW registration failed:", err));
    });
  } else {
    console.log("Service Worker not supported");
  }
}

initApp();