const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello world')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
