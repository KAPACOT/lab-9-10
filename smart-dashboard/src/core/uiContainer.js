import { setLang, getLang, t } from "./i18n.js";

export function initUI() {
  document.getElementById("app").innerHTML = `
    <div class="app">
      
      <aside class="sidebar">
        <h1>${t("dashboard")}</h1>

        <div style="margin-bottom: 20px;">
          <select id="langSelect">
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="zh">中文</option>
          </select>
        </div>

        <nav class="nav">
          <a href="#/tasks">${t("tasks")}</a>
          <a href="#/notes">${t("notes")}</a>
          <a href="#/tracker">${t("tracker")}</a>
        </nav>
      </aside>

      <div class="main">
        <header class="header">
          <h2 id="pageTitle">${t("dashboard")}</h2>
        </header>

        <div id="view" class="content"></div>
      </div>

    </div>
  `;

  const select = document.getElementById("langSelect");
  select.value = getLang();

  select.onchange = (e) => {
    setLang(e.target.value);
  };
}