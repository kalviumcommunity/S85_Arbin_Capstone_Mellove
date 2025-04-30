const express = require("express");
const router = express.Router();
const { updateUser } = require("../controllers/user-controller");
const { updateSong } = require("../controllers/song-controller");
const { updateCompetition } = require("../controllers/competition-controller");

router.put("/users/:id", updateUser);
router.put("/songs/:id", updateSong);
router.put("/competitions/:id", updateCompetition);

module.exports = router;
