import { getStats } from "./tracker.js";

export function renderTracker(view) {
  const s = getStats();
  view.innerHTML = `
    <h2>Tracker</h2>
    <div class="card">Tasks: ${s.tasks}</div>
    <div class="card">Done: ${s.done}</div>
    <div class="card">Notes: ${s.notes}</div>
  `;
  document.getElementById("fab").style.display = "none";
}