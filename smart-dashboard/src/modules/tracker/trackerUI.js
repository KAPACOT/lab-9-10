import { getStats } from "./tracker.js";

export function renderTracker(view) {
  const s = getStats();

  view.innerHTML = `
    <div class="stats">
      <div class="stat">
        <h3>${s.tasks}</h3>
        <p>Total tasks</p>
      </div>

      <div class="stat">
        <h3>${s.done}</h3>
        <p>Completed</p>
      </div>

      <div class="stat">
        <h3>${s.notes}</h3>
        <p>Notes</p>
      </div>
    </div>
  `;
}