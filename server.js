const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer();

app.post('/upload', upload.any(), (req, res) => {
  console.log(req.files);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('Успішно');
});

app.listen(3000, () => {
  console.log('Сервер http://localhost:3000/');
});
