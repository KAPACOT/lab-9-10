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

  highlight(route);

  if (route === "#/tasks") return renderTasks(view);
  if (route === "#/notes") return renderNotes(view);
  if (route === "#/tracker") return renderTracker(view);

  renderTasks(view);
}

function highlight(route) {
  document.querySelectorAll(".bottom-nav button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.route === route);
  });
}