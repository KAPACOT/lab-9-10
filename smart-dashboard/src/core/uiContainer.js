import { setLang, getLang, t } from "./i18n.js";

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

          <div class="actions">
            <select id="langSelect">
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="zh">中文</option>
            </select>
          </div>

        </div>
      </header>

      <main class="container">
        <div id="view"></div>
      </main>

    </div>
  `;

  const select = document.getElementById("langSelect");
  select.value = getLang();
  select.onchange = (e) => setLang(e.target.value);
}