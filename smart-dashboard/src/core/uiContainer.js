import { setLang, getLang } from "./i18n.js";

export function initUI() {
  document.getElementById("app").innerHTML = `
    <div class="app-container">

      <div class="main-content" id="view"></div>

      <nav class="bottom-nav">
        <button class="nav-btn" data-route="#/tasks">Tasks</button>
        <button class="nav-btn" data-route="#/notes">Notes</button>
        <button class="nav-btn" data-route="#/tracker">Tracker</button>
      </nav>

      <div class="top-controls">
        <select id="langSelect"></select>
        <button id="themeToggle" class="btn-icon">☾</button>
      </div>

    </div>
  `;

  initNav();
  initLang();
  initTheme();
}

function initNav() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      location.hash = btn.dataset.route;
    });
  });
}

function initLang() {
  const select = document.getElementById("langSelect");

  select.innerHTML = `
    <option value="en">EN</option>
    <option value="ru">RU</option>
    <option value="zh">中文</option>
  `;

  select.value = getLang();
  select.onchange = (e) => setLang(e.target.value);
}

function initTheme() {
  const saved = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("dark", saved === "dark");

  document.getElementById("themeToggle").onclick = () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
}