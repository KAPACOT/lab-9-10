const translations = {
  en: {
    dashboard: "Dashboard",
    tasks: "Tasks",
    notes: "Notes",
    tracker: "Tracker",
    newTask: "New task",
    addTask: "Add task",
    writeNote: "Write note...",
    save: "Save",
    totalTasks: "Total tasks",
    completed: "Completed",
    notesCount: "Notes"
  },

  ru: {
    dashboard: "Панель",
    tasks: "Задачи",
    notes: "Заметки",
    tracker: "Статистика",
    newTask: "Новая задача",
    addTask: "Добавить",
    writeNote: "Введите заметку...",
    save: "Сохранить",
    totalTasks: "Всего задач",
    completed: "Выполнено",
    notesCount: "Заметки"
  },

  zh: {
    dashboard: "仪表板",
    tasks: "任务",
    notes: "笔记",
    tracker: "统计",
    newTask: "新任务",
    addTask: "添加",
    writeNote: "写笔记...",
    save: "保存",
    totalTasks: "任务总数",
    completed: "已完成",
    notesCount: "笔记"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

export function t(key) {
  return translations[currentLang][key] || key;
}

export function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  location.reload();
}

export function getLang() {
  return currentLang;
}