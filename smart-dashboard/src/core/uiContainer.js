import { navigate } from "./router.js";

export function initUI() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <header style="padding: 16px; background-color: #1e1e1e; color: #fff; display: flex; justify-content: space-between;">
      <h1>Smart Dashboard</h1>
      <nav>
        <button data-path="/tasks">Tasks</button>
        <button data-path="/notes">Notes</button>
        <button data-path="/tracker">Tracker</button>
      </nav>
    </header>
    <main id="main-content" style="padding: 16px;"></main>
  `;

  document.querySelectorAll("button[data-path]").forEach(btn => {
    btn.addEventListener("click", () => {
      navigate(btn.getAttribute("data-path"));
    });
  });
}

export function getMainContainer() {
  return document.getElementById("main-content");
}