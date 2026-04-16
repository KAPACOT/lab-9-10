import { getTasks, addTask, toggleTask } from "./tasks.js";

export function renderTasks(view) {
  view.innerHTML = `
    <h2>Tasks</h2>
    <div id="list"></div>
  `;

  renderList();

  document.getElementById("fab").onclick = openModal;
}

function renderList() {
  const list = document.getElementById("list");

  list.innerHTML = getTasks().map(t => `
    <div class="card task" data-id="${t.id}">
      <span>${t.title}</span>
      <input type="checkbox" ${t.done ? "checked" : ""}/>
    </div>
  `).join("");

  list.querySelectorAll(".task").forEach(el => {
    el.onclick = () => {
      toggleTask(Number(el.dataset.id));
      renderList();
    };
  });
}

function openModal() {
  const modal = document.getElementById("modal");

  modal.innerHTML = `
    <div class="modal-box">
      <input id="newTask" placeholder="Task"/>
      <button id="save" class="btn">Add</button>
    </div>
  `;

  modal.classList.remove("hidden");

  document.getElementById("save").onclick = () => {
    addTask(document.getElementById("newTask").value);
    modal.classList.add("hidden");
    renderList();
  };
}