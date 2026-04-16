import { renderTasks } from "../modules/tasks/tasksUI.js";
import { renderNotes } from "../modules/notes/notesUI.js";
import { renderTracker } from "../modules/tracker/trackerUI.js";

export function initRouter() {
  window.addEventListener("hashchange", router);
  router();
}

function router() {
  const view = document.getElementById("view");
  const route = location.hash || "#/tasks";

  highlightActive(route);

  if (route === "#/tasks") return renderTasks(view);
  if (route === "#/notes") return renderNotes(view);
  if (route === "#/tracker") return renderTracker(view);

  renderTasks(view);
}

function highlightActive(route) {
  document.querySelectorAll(".tabs a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === route);
  });
}