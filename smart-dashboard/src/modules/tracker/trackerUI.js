import { getMainContainer } from "../../core/uiContainer.js";
import { getTotalPoints } from "../tasks/tasks.js";
import { getTotalNotePoints } from "../notes/notes.js";

export function renderTrackerUI() {
  const container = getMainContainer();
  const taskPoints = getTotalPoints();
  const notePoints = getTotalNotePoints();
  const total = taskPoints + notePoints;

  container.innerHTML = `
    <h2>Прогресс</h2>
    <p>Очков за задачи: ${taskPoints}</p>
    <p>Очков за заметки: ${notePoints}</p>
    <h3>Всего: ${total}</h3>
    <div style="width: 100%; background: #333; height: 20px; border-radius: 10px;">
      <div style="width: ${Math.min(total, 100)}%; background: #4caf50; height: 20px; border-radius: 10px;"></div>
    </div>
    <p>Уровень: ${Math.floor(total / 50) + 1}</p>
  `;
}