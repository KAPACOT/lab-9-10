import { renderTasks } from "../modules/tasks/tasksUI.js";
import { renderNotes } from "../modules/notes/notesUI.js";
import { renderTracker } from "../modules/tracker/trackerUI.js";

export function initRouter() {
  window.addEventListener("hashchange", router);
  router();
}

function router() {
  const view = document.getElementById("view");
  const title = document.getElementById("pageTitle");
  const route = location.hash;

  if (route === "#/tasks") {
    title.textContent = "Tasks";
    return renderTasks(view);
  }

  if (route === "#/notes") {
    title.textContent = "Notes";
    return renderNotes(view);
  }

  if (route === "#/tracker") {
    title.textContent = "Tracker";
    return renderTracker(view);
  }

  title.textContent = "Dashboard";
  view.innerHTML = "<div class='card'>Welcome</div>";
}