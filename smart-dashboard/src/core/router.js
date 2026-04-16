import { renderTasks } from "../modules/tasks/tasksUI.js";
import { renderNotes } from "../modules/notes/notesUI.js";
import { renderTracker } from "../modules/tracker/trackerUI.js";
import { t } from "./i18n.js";

export function initRouter() {
  window.addEventListener("hashchange", router);
  router();
}

function router() {
  const view = document.getElementById("view");
  const title = document.getElementById("pageTitle");
  const route = location.hash;

  if (route === "#/tasks") {
    title.textContent = t("tasks");
    return renderTasks(view);
  }

  if (route === "#/notes") {
    title.textContent = t("notes");
    return renderNotes(view);
  }

  if (route === "#/tracker") {
    title.textContent = t("tracker");
    return renderTracker(view);
  }

  title.textContent = t("dashboard");
  view.innerHTML = `<div class="card">${t("dashboard")}</div>`;
}
document.querySelectorAll(".bottom-nav a").forEach(a => {
  a.classList.remove("active");
  if (a.getAttribute("href") === location.hash) {
    a.classList.add("active");
  }
});