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
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    totalTasks: "Total tasks",
    completed: "Completed",
    notesCount: "Notes",
    noTasks: "No tasks yet",
    noNotes: "No notes yet",
    confirmDelete: "Delete?",
    clearData: "Clear all data",
    dataCleared: "All data cleared",
    active: "Active",
    completionRate: "Completion rate",
    avgTime: "Average completion time",
    lastActivity: "Last activity",
    lastCompleted: "Last completed",
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
    cancel: "Отмена",
    delete: "Удалить",
    edit: "Изменить",
    totalTasks: "Всего задач",
    completed: "Выполнено",
    notesCount: "Заметки",
    noTasks: "Нет задач",
    noNotes: "Нет заметок",
    confirmDelete: "Удалить?",
    clearData: "Очистить данные",
    dataCleared: "Данные удалены",
    active: "Активные",
    completionRate: "Прогресс выполнения",
    avgTime: "Среднее время",
    lastActivity: "Последняя активность",
    lastCompleted: "Последняя выполненная",
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
    cancel: "取消",
    delete: "删除",
    edit: "编辑",
    totalTasks: "任务总数",
    completed: "已完成",
    notesCount: "笔记",
    noTasks: "暂无任务",
    noNotes: "暂无笔记",
    confirmDelete: "确认删除？",
    clearData: "清除数据",
    dataCleared: "数据已清除",
    active: "进行中",
    completionRate: "完成率",
    avgTime: "平均完成时间",
    lastActivity: "最近活动",
    lastCompleted: "最近完成",
  }
};

let currentLang = localStorage.getItem("lang") || "en";

export function t(key) {
  return translations[currentLang]?.[key] || key;
}

export function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  location.reload();
}

export function getLang() {
  return currentLang;
}