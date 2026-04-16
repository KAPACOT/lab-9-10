import { navigate } from "./router.js";
import { t, setLang, getLang } from "./i18n.js";

export function initUI() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="app">
      <header style="padding: 16px; background: var(--surface); color: var(--text-primary); display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border);">
        <h1 style="margin:0; font-size:1.5rem;">Smart Dashboard</h1>
        <nav style="display: flex; gap: 8px;">
          <button data-path="/tasks">${t("tasks")}</button>
          <button data-path="/notes">${t("notes")}</button>
          <button data-path="/tracker">${t("tracker")}</button>
        </nav>
      </header>
      <main id="main-content" style="padding: 16px; flex:1; overflow-y: auto;"></main>
      
      <!-- FAB, модалка, топ-бар оставим как было, но переместим в app -->
      <button id="fab" class="fab">+</button>
      <div class="top-bar">
        <select id="lang"></select>
        <button id="theme">☾</button>
      </div>
      <div id="modal" class="modal hidden"></div>
    </div>
  `;

  initNavButtons();
  initLangSelector();
  initThemeToggle();
  initModalBackdrop();
}

function initNavButtons() {
  document.querySelectorAll("button[data-path]").forEach(btn => {
    btn.addEventListener("click", () => {
      const path = btn.getAttribute("data-path");
      navigate(path);
    });
  });
}

function initLangSelector() {
  const select = document.getElementById("lang");
  select.innerHTML = `
    <option value="en">EN</option>
    <option value="ru">RU</option>
    <option value="zh">中文</option>
  `;
  select.value = getLang();
  select.addEventListener("change", e => setLang(e.target.value));
}

function initThemeToggle() {
  const btn = document.getElementById("theme");
  const updateIcon = () => {
    btn.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
  };
  const saved = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("dark", saved === "dark");
  updateIcon();
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    updateIcon();
  });
}

function initModalBackdrop() {
  const modal = document.getElementById("modal");
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      if (location.pathname !== "/tracker") {
        document.getElementById("fab").style.display = "flex";
      }
    }
  });
}