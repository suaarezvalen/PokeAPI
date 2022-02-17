const axios = require('axios');

const apiController = {
    
    index: (req, res) => {

      axios.get("https://rickandmortyapi.com/api/character/1")
      .then((datos) => {
        const name = datos.data.name;
        res.send(name);
      })
      .catch((e) => {
        console.log(e)
      })

    }

}

module.exports = apiController