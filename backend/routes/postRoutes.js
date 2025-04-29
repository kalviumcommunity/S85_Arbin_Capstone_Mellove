const express = require("express");
const router = express.Router();

// Controllers
const { createUser } = require("../controllers/user-controller");
const { createSong } = require("../controllers/song-controller");
const { createCompetition } = require("../controllers/competition-controller");

// User - POST
router.post("/users", createUser);

// Song - POST
router.post("/songs", createSong);

// Competition - POST
router.post("/competitions", createCompetition);

module.exports = router;
