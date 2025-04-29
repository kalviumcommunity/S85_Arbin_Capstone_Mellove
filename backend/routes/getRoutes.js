const express = require("express");
const router = express.Router();

// Controllers (assuming they are implemented in separate files)
const { getAllUsers, getUserById } = require("../controllers/user-controller");
const { getAllSongs, getSongById } = require("../controllers/song-controller");

const {
  getAllCompetitions,
  getCompetitionById,
} = require("../controllers/competition-controller");

// User Routes
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);

// Song Routes
router.get("/songs", getAllSongs);
router.get("/songs/:id", getSongById);

// Competition Routes
router.get("/competitions", getAllCompetitions);
router.get("/competitions/:id", getCompetitionById);

module.exports = router;
