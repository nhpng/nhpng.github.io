const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const COUNTER_FILE = 'counter.json';

app.use(cors());

app.get('/counter', (req, res) => {
  const data = JSON.parse(fs.readFileSync(COUNTER_FILE, 'utf8'));
  res.json({ count: data.count });
});

app.post('/counter', (req, res) => {
  let data = JSON.parse(fs.readFileSync(COUNTER_FILE, 'utf8'));
  data.count += 1;
  fs.writeFileSync(COUNTER_FILE, JSON.stringify(data));
  res.json({ count: data.count });
});

app.listen(3000, () => console.log('Counter API running on port 3000'));
