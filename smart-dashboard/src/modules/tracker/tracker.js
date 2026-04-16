import { load } from "../../core/dataService.js";

export function getStats() {
  const data = load();
  return {
    tasks: data.tasks.length,
    done: data.tasks.filter(t => t.done).length,
    notes: data.notes.length
  };
}