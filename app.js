const express = require('express');
const app = express();
const axios = require('axios');

const port = 3000;

app.get('/all', async (req, res) => {
  try {
    const request = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
    res.json(request.data);
  } catch (err) {
    throw new Error('Error fetching superheroes..');
  }
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
