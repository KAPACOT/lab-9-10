const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Статические файлы из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Статические файлы из папки src, доступные по пути /src
app.use('/src', express.static(path.join(__dirname, 'src')));

// Для SPA — любой не найденный путь отправляем на index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`✅ Smart Dashboard запущен на http://localhost:${port}`);
});