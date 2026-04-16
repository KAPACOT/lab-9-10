export function initUI() {
  document.getElementById("app").innerHTML = `
    <div class="app">
      
      <aside class="sidebar">
        <h1>Dashboard</h1>
        <nav class="nav">
          <a href="#/tasks">Tasks</a>
          <a href="#/notes">Notes</a>
          <a href="#/tracker">Tracker</a>
        </nav>
      </aside>

      <div class="main">
        <header class="header">
          <h2 id="pageTitle">Dashboard</h2>
        </header>

        <div id="view" class="content"></div>
      </div>

    </div>
  `;
}