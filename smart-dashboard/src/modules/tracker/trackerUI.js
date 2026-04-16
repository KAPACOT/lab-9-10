import { getStats } from "./tracker.js";
import { t } from "../../core/i18n.js";

export function renderTracker(view) {
  const s = getStats();

  view.innerHTML = `
    <div class="stats">
      <div class="stat">
        <h3>${s.tasks}</h3>
        <p>${t("totalTasks")}</p>
      </div>

      <div class="stat">
        <h3>${s.done}</h3>
        <p>${t("completed")}</p>
      </div>

      <div class="stat">
        <h3>${s.notes}</h3>
        <p>${t("notesCount")}</p>
      </div>
    </div>
  `;
}