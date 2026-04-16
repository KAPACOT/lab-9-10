import { getStats } from "./tracker.js";
import { t } from "../../core/i18n.js";
import { save } from "../../core/dataService.js";

export function renderTracker(view) {
  const s = getStats();

  const formatDate = (ts) => {
    if (!ts) return "—";
    const d = new Date(ts);
    return d.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
  };

  const formatTime = (hours) => {
    if (hours < 1) return `${Math.round(hours * 60)} мин`;
    if (hours < 24) return `${Math.round(hours)} ч`;
    const days = Math.floor(hours / 24);
    return `${days} дн ${Math.round(hours % 24)} ч`;
  };

  view.innerHTML = `
    <h2>${t("tracker")}</h2>
    
    <div class="stats-grid">
      <div class="stat-card highlight">
        <div class="stat-value">${s.totalTasks}</div>
        <div class="stat-label">${t("totalTasks")}</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${s.activeTasks}</div>
        <div class="stat-label">${t("active")}</div>
      </div>
      <div class="stat-card success">
        <div class="stat-value">${s.doneTasks}</div>
        <div class="stat-label">${t("completed")}</div>
      </div>
    </div>

    <div class="progress-section">
      <div class="progress-header">
        <span>${t("completionRate")}</span>
        <span>${s.completionRate}%</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${s.completionRate}%;"></div>
      </div>
    </div>

    <div class="stats-details">
      <div class="detail-item">
        <span class="detail-icon">📝</span>
        <span class="detail-text">${t("notesCount")}: ${s.totalNotes}</span>
      </div>
      <div class="detail-item">
        <span class="detail-icon">⏱️</span>
        <span class="detail-text">${t("avgTime")}: ${s.avgCompletionTime ? formatTime(s.avgCompletionTime) : "—"}</span>
      </div>
      <div class="detail-item">
        <span class="detail-icon">🕒</span>
        <span class="detail-text">${t("lastActivity")}: ${formatDate(s.lastActivity)}</span>
      </div>
      ${s.lastCompletedTask ? `
      <div class="detail-item">
        <span class="detail-icon">✅</span>
        <span class="detail-text">${t("lastCompleted")}: "${s.lastCompletedTask.title.substring(0, 20)}${s.lastCompletedTask.title.length > 20 ? '…' : ''}"</span>
      </div>
      ` : ''}
    </div>

    <button id="clearDataBtn" class="btn danger-btn">${t("clearData")}</button>
  `;

  document.getElementById("fab").style.display = "none";

  document.getElementById("clearDataBtn").addEventListener("click", () => {
    if (confirm(t("confirmDelete"))) {
      save({ tasks: [], notes: [] });
      alert(t("dataCleared"));
      renderTracker(view);
    }
  });
}