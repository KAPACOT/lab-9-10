import { getStats } from "./tracker.js";

export function renderTracker(view) {
  const s = getStats();

  view.innerHTML = `
    <h2>Tracker</h2>

    <div class="card">
      <p>Total tasks: ${s.tasks}</p>
      <p>Done: ${s.done}</p>
      <p>Notes: ${s.notes}</p>
    </div>
  `;
}