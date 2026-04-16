let routes = {};
let defaultRoute = "/tasks";

export function initRouter() {
  routes = {
    "/tasks": () => import("../modules/tasks/tasksUI.js").then(m => m.renderTasks(getMainContainer())),
    "/notes": () => import("../modules/notes/notesUI.js").then(m => m.renderNotes(getMainContainer())),
    "/tracker": () => import("../modules/tracker/trackerUI.js").then(m => m.renderTracker(getMainContainer()))
  };

  window.addEventListener("popstate", handleRoute);
  handleRoute();
}

export function navigate(path) {
  history.pushState({}, "", path);
  handleRoute();
}

function handleRoute() {
  const path = window.location.pathname;
  const route = routes[path] ? path : defaultRoute;
  routes[route]();
}

// Вспомогательная функция для получения контейнера
function getMainContainer() {
  return document.getElementById("main-content");
}