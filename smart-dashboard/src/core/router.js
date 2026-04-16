import { renderTasks } from "../modules/tasks/tasksUI.js";
import { renderNotes } from "../modules/notes/notesUI.js";
import { renderTracker } from "../modules/tracker/trackerUI.js";

export function initRouter() {
  window.addEventListener("hashchange", router);
  router();
}

function router() {
  const view = document.getElementById("view");
  const route = location.hash;

  if (route === "#/tasks") return renderTasks(view);
  if (route === "#/notes") return renderNotes(view);
  if (route === "#/tracker") return renderTracker(view);

  view.innerHTML = "<h2>Добро пожаловать</h2>";
}