const axios = require('axios');
const { render } = require('express/lib/response');
const res = require('express/lib/response');

const apiController = {
    
    pokeapi: (req, res) => {

      /*axios.get(" https://pokeapi.co/api/v2/pokemon")
      .then((datos) => {
        let name = datos.data;
        res.send(name); 
      })
      .catch((e) => {
        console.log(e)
      })*/

      res.render("pokeapi")

    },

    rickandmorty: (req, res) => {

      axios.get("https://rickandmortyapi.com/api/character/80")
      .then((datos) => {
        let name = datos.data.name;
        res.send(name);
      })
      .catch((e) => {
        console.log(e)
      })

    },

}

module.exports = apiController