import { setLang, getLang } from "./i18n.js";

export function initUI() {
  document.getElementById("app").innerHTML = `
    <div class="app-container">

      <div class="main-content" id="view"></div>

      <!-- FAB -->
      <button id="fab" class="fab">+</button>

      <!-- Bottom nav -->
      <nav class="bottom-nav">
        <button class="nav-btn" data-route="#/tasks">Tasks</button>
        <button class="nav-btn" data-route="#/notes">Notes</button>
        <button class="nav-btn" data-route="#/tracker">Tracker</button>
      </nav>

      <!-- Modal -->
      <div id="modal" class="modal">
        <div class="modal-content">
          <textarea id="modalInput"></textarea>
          <button id="modalSave" class="btn-primary">Save</button>
        </div>
      </div>

    </div>
  `;

  initNav();
  initFAB();
  initSwipe();
}

function initNav() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.onclick = () => location.hash = btn.dataset.route;
  });
}

function initFAB() {
  const fab = document.getElementById("fab");
  const modal = document.getElementById("modal");

  fab.addEventListener("click", () => {
    modal.classList.add("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target.id === "modal") {
      modal.classList.remove("active");
    }
  });

  document.getElementById("modalSave").addEventListener("click", () => {
    const text = document.getElementById("modalInput").value.trim();

    if (!text) return;

    // 🔥 безопасный вызов
    if (location.hash === "#/tasks") {
      document.dispatchEvent(new CustomEvent("addTask", { detail: text }));
    } else if (location.hash === "#/notes") {
      document.dispatchEvent(new CustomEvent("addNote", { detail: text }));
    }

    document.getElementById("modalInput").value = "";
    modal.classList.remove("active");
  });
}