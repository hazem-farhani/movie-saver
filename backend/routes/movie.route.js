const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movie.controller");

router.get("/movies", movieController.getMovies);

module.exports = router;
