const KEY = "app_data";

export function load() {
  return JSON.parse(localStorage.getItem(KEY)) || {
    tasks: [],
    notes: []
  };
}

export function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}