import { getNotes, addNote } from "./notes.js";
import { t } from "../../core/i18n.js";

export function renderNotes(view) {
  view.innerHTML = `
    <div class="card">
      <textarea id="noteInput" placeholder="${t("writeNote")}"></textarea>
      <button id="saveNote">${t("save")}</button>
      <ul id="notesList"></ul>
    </div>
  `;

  document.getElementById("saveNote").onclick = () => {
    addNote(document.getElementById("noteInput").value);
    renderNotes(view);
  };

  document.getElementById("notesList").innerHTML =
    getNotes().map(n => `<li>${n.text}</li>`).join("");
}