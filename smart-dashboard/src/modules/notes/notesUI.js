import { getMainContainer } from "../../core/uiContainer.js";
import { getNotes, addNote, deleteNote, getTotalNotePoints } from "./notes.js";

export function renderNotesUI() {
  const container = getMainContainer();
  const notes = getNotes();
  const total = getTotalNotePoints();

  container.innerHTML = `
    <h2>Заметки</h2>
    <p>Всего очков: ${total}</p>
    <ul style="list-style: none; padding: 0;">
      ${notes.map(n => `
        <li style="margin-bottom: 8px;">
          <span>${n.content} (${n.points} pts)</span>
          <button data-delete="${n.id}">Удалить</button>
        </li>
      `).join("")}
    </ul>
    <div>
      <input type="text" id="new-note-content" placeholder="Новая заметка">
      <input type="number" id="new-note-points" placeholder="Очки" min="1" value="1">
      <button id="add-note-btn">Добавить</button>
    </div>
  `;

  document.querySelectorAll("button[data-delete]").forEach(btn => {
    btn.addEventListener("click", e => {
      deleteNote(Number(e.target.dataset.delete));
      renderNotesUI();
    });
  });
  document.getElementById("add-note-btn").addEventListener("click", () => {
    const content = document.getElementById("new-note-content").value.trim();
    const points = parseInt(document.getElementById("new-note-points").value) || 1;
    if (content) { addNote({ content, points }); renderNotesUI(); }
  });
}