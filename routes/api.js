const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apiController")

router.get("/pokeapi", apiController.pokeapi);
router.get("/rickandmorty", apiController.rickandmorty);

module.exports = router;