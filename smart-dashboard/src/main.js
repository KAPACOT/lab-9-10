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
        .then(registration => {
          console.log("Service Worker registered:", registration);
        })
        .catch(error => {
          console.error("Service Worker registration failed:", error);
        });
    });
  } else {
    console.log("Service Worker not supported");
  }
}

initApp();