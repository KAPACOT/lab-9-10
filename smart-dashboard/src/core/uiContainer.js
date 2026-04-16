import { setLang, getLang } from "./i18n.js";

export function initUI() {
  document.getElementById("app").innerHTML = `
    <div class="app">
      <div id="view" class="screen"></div>
      <button id="fab" class="fab">+</button>
      <nav class="bottom-nav">
        <button data-route="#/tasks">Tasks</button>
        <button data-route="#/notes">Notes</button>
        <button data-route="#/tracker">Tracker</button>
      </nav>
      <div class="top-bar">
        <select id="lang"></select>
        <button id="theme">☾</button>
      </div>
      <div id="modal" class="modal hidden"></div>
    </div>
  `;

  initNav();
  initLang();
  initTheme();
}

function initNav() {
  document.querySelectorAll(".bottom-nav button").forEach(btn => {
    btn.onclick = () => {
      location.hash = btn.dataset.route;
      // Показываем FAB при переходе на tasks/notes (трекер сам скроет)
      const fab = document.getElementById("fab");
      if (btn.dataset.route !== "#/tracker") {
        fab.style.display = "flex";
      }
    };
  });
}

function initLang() {
  const el = document.getElementById("lang");
  el.innerHTML = `
    <option value="en">EN</option>
    <option value="ru">RU</option>
    <option value="zh">中文</option>
  `;
  el.value = getLang();
  el.onchange = e => setLang(e.target.value);
}

function initTheme() {
  const saved = localStorage.getItem("theme") || "light";
  const btn = document.getElementById("theme");
  const updateIcon = () => {
    btn.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
  };
  document.body.classList.toggle("dark", saved === "dark");
  updateIcon();
  btn.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    updateIcon();
  };
}