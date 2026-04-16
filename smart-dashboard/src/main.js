import { initUI } from "./core/uiContainer.js";
import { initRouter } from "./core/router.js";

initUI();
initRouter();
let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (endX - startX > 80) navigate(-1);
  if (startX - endX > 80) navigate(1);
});

function navigate(dir) {
  const routes = ["#/tasks", "#/notes", "#/tracker"];
  let i = routes.indexOf(location.hash);
  if (i === -1) i = 0;
  location.hash = routes[(i + dir + 3) % 3];
}