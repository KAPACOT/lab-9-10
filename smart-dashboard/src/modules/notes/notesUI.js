import { getMainContainer } from '../../core/uiContainer.js';
import { getNotes, addNote, deleteNote } from './notes.js';

export function renderNotesUI() {
  const container = getMainContainer();
  container.innerHTML = `
    <div class="module notes-module">
      <h2>Заметки</h2>
      <form id="add-note-form">
        <textarea id="note-content" placeholder="Новая заметка" required></textarea>
        <button type="submit">Добавить</button>
      </form>
      <ul id="notes-list" class="notes-list"></ul>
    </div>
  `;

  const form = document.getElementById('add-note-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const contentInput = document.getElementById('note-content');
    const content = contentInput.value.trim();
    if (content) {
      addNote({ content });
      contentInput.value = '';
      renderNotesList();
    }
  });

  renderNotesList();
}

function renderNotesList() {
  const list = document.getElementById('notes-list');
  const notes = getNotes();
  list.innerHTML = notes
    .map(
      (note) => `
      <li class="note-item">
        <span>${note.content} <small>(${note.date})</small></span>
        <button class="delete-btn" data-id="${note.id}">✗</button>
      </li>
    `
    )
    .join('');

  document.querySelectorAll('.delete-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      deleteNote(id);
      renderNotesList();
    });
  });
}