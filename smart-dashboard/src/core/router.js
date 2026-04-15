let routes = {};
let defaultRoute = null;

export function initRouter() {
  routes = {
    "/tasks": () => import("../modules/tasks/tasksUI.js").then(m => m.renderTasksUI()),
    "/notes": () => import("../modules/notes/notesUI.js").then(m => m.renderNotesUI()),
    "/tracker": () => import("../modules/tracker/trackerUI.js").then(m => m.renderTrackerUI())
  };
  defaultRoute = "/tasks";
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