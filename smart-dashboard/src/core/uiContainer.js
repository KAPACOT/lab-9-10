export function initUI() {
  document.getElementById("app").innerHTML = `
    <header>Smart Dashboard</header>
    <nav>
      <a href="#/tasks">Tasks</a>
      <a href="#/notes">Notes</a>
      <a href="#/tracker">Tracker</a>
    </nav>
    <main id="view"></main>
  `;
}