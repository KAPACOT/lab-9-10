import { getStats } from "./tracker.js";

export function renderTracker(view) {
  const s = getStats();

  view.innerHTML = `
    <div class="card">
      <div class="row">
        <span>Total tasks</span>
        <span>${s.tasks}</span>
      </div>

      <div class="row">
        <span>Completed</span>
        <span>${s.done}</span>
      </div>

      <div class="row">
        <span>Notes</span>
        <span>${s.notes}</span>
      </div>
    </div>
  `;
}