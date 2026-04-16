import { setLang, getLang } from "./i18n.js";

export function initUI() {
  document.getElementById("app").innerHTML = `
    <div class="layout">

      <header class="header">
        <div class="container header-inner">

          <div class="logo">Smart Dashboard</div>

          <nav class="tabs">
            <a href="#/tasks">Tasks</a>
            <a href="#/notes">Notes</a>
            <a href="#/tracker">Tracker</a>
          </nav>

          <div class="controls">
            <select id="langSelect" class="select"></select>
            <button id="themeToggle" class="btn ghost">Theme</button>
          </div>

        </div>
      </header>

      <main class="container">
        <div id="view"></div>
      </main>

    </div>
  `;

  initLang();
  initTheme();
}

function initLang() {
  const select = document.getElementById("langSelect");

  select.innerHTML = `
    <option value="en">EN</option>
    <option value="ru">RU</option>
    <option value="zh">中文</option>
  `;

  select.value = getLang();

  select.addEventListener("change", (e) => {
    setLang(e.target.value);
  });
}

function initTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  document.body.classList.toggle("light", saved === "light");

  document.getElementById("themeToggle").addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}