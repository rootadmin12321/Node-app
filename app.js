const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

app.get('/', (req, res) => {
  db.query('SELECT NOW() as time', (err, result) => {
    if (err) throw err;
    res.send(`Hello World! DB Time: ${result[0].time}`);
  });
});

app.listen(port, () => {
  console.log(`App running at http://0.0.0.0:${port}`);
});

