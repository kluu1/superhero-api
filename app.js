const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// fetch all superheroes
app.get('/all', async (req, res) => {
  try {
    const request = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
    res.json(request.data);
  } catch (err) {
    throw new Error('Error fetching superheroes..');
  }
});

// fetch superhero by id
app.get('/id/:id', async (req, res) => {
  const { id } = req.params;
  const url = `https://akabab.github.io/superhero-api/api/id/${id}.json`;

  try {
    const request = await axios.get(url);
    res.json(request.data);
  } catch (err) {
    throw new Error('Error fetching superheroes..');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
