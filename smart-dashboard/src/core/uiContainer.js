import { setLang, getLang, t } from "./i18n.js";

export function initUI() {
  document.getElementById("app").innerHTML = `
    <div class="app">
      <div id="view" class="screen"></div>
      <button id="fab" class="fab">+</button>
      <nav class="bottom-nav">
        <button data-route="#/tasks">${t("tasks")}</button>
        <button data-route="#/notes">${t("notes")}</button>
        <button data-route="#/tracker">${t("tracker")}</button>
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
  initModalBackdrop();
}

function initNav() {
  document.querySelectorAll(".bottom-nav button").forEach(btn => {
    btn.onclick = () => {
      location.hash = btn.dataset.route;
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

function initModalBackdrop() {
  const modal = document.getElementById("modal");
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      // Показать FAB снова, если не трекер
      if (location.hash !== "#/tracker") {
        document.getElementById("fab").style.display = "flex";
      }
    }
  });
}