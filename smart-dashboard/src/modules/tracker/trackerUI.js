import { getMainContainer } from '../../core/uiContainer.js';
import { getTotalActivityPoints, getUserLevel } from './tracker.js';

export function renderTrackerUI() {
  const container = getMainContainer();
  const points = getTotalActivityPoints();
  const level = getUserLevel(points);

  container.innerHTML = `
    <div class="module tracker-module">
      <h2>Прогресс</h2>
      <div class="stats">
        <p>Всего баллов: <strong>${points}</strong></p>
        <p>Уровень: <strong>${level}</strong></p>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${(points % 10) * 10}%;"></div>
        </div>
        <p>До следующего уровня: ${10 - (points % 10)} баллов</p>
      </div>
      <div class="mascot">
        <img src="/icons/mascot.svg" alt="Маскот" width="100" />
        <p>Продолжай в том же духе!</p>
      </div>
    </div>
  `;
}