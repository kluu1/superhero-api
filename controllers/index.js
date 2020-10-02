const axios = require('axios');

module.exports = {
  all: async (req, res) => {
    try {
      const request = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
      res.json(request.data);
    } catch (err) {
      throw new Error(err);
    }
  },

  id: async (req, res) => {
    const { id } = req.params;
    const url = `https://akabab.github.io/superhero-api/api/id/${id}.json`;

    try {
      const request = await axios.get(url);
      res.json(request.data);
    } catch (err) {
      throw new Error(err);
    }
  },

  powerstats: async (req, res) => {
    const { id } = req.params;
    const url = `https://akabab.github.io/superhero-api/api/powerstats/${id}.json`;

    try {
      const request = await axios.get(url);
      res.json(request.data);
    } catch (err) {
      throw new Error('Error fetching superheroes..');
    }
  },

  appearance: async (req, res) => {
    const { id } = req.params;
    const url = '`https://akabab.github.io/superhero-api/api/appearance/${id}.json';

    try {
      const request = await axios.get(url);
      res.json(request.data);
    } catch (err) {
      throw new Error('Error fetching superheroes..');
    }
  },
}
