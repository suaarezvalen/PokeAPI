const axios = require('axios');

const apiController = {
    
    pokemon: (req, res) => {

      axios.get(" https://pokeapi.co/api/v2/pokemon/ditto")
      .then((datos) => {
        const name = datos.data.name;
        res.send(name);
      })
      .catch((e) => {
        console.log(e)
      })

    },

    rickandmorty: (req, res) => {

      axios.get("https://rickandmortyapi.com/api/character/80")
      .then((datos) => {
        const name = datos.data.name;
        res.send(name);
      })
      .catch((e) => {
        console.log(e)
      })

    },

}

module.exports = apiController