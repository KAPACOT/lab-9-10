import { getStats } from "./tracker.js";
import { t } from "../../core/i18n.js";
import { save } from "../../core/dataService.js";

export function renderTracker(view) {
  const s = getStats();

  view.innerHTML = `
    <h2>${t("tracker")}</h2>
    <div class="card">${t("totalTasks")}: ${s.tasks}</div>
    <div class="card">${t("completed")}: ${s.done}</div>
    <div class="card">${t("notesCount")}: ${s.notes}</div>
    <button id="clearDataBtn" class="btn" style="margin-top: 20px; background: #ef4444;">${t("clearData")}</button>
  `;

  document.getElementById("fab").style.display = "none";

  document.getElementById("clearDataBtn").addEventListener("click", () => {
    if (confirm(t("confirmDelete"))) {
      save({ tasks: [], notes: [] });
      alert(t("dataCleared"));
      renderTracker(view); // обновить статистику
    }
  });
}