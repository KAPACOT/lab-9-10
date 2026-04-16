import { setLang, getLang, t } from "./i18n.js";

export function initUI() {
  document.getElementById("app").innerHTML = `
    <div class="app">

      <header class="header">
        <h2 id="pageTitle">${t("dashboard")}</h2>

        <div class="controls">
          <select id="langSelect">
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="zh">中文</option>
          </select>

          <button id="themeToggle">☼</button>
        </div>
      </header>

      <main id="view" class="content"></main>

      <nav class="bottom-nav">
        <a href="#/tasks">Tasks</a>
        <a href="#/notes">Notes</a>
        <a href="#/tracker">Tracker</a>
      </nav>

      <div id="installBanner" class="install-banner hidden">
        Install app
        <button id="installBtn">Install</button>
      </div>

    </div>
  `;

  // язык
  const select = document.getElementById("langSelect");
  select.value = getLang();
  select.onchange = (e) => setLang(e.target.value);

  // тема
  document.getElementById("themeToggle").onclick = toggleTheme;

  initTheme();
}