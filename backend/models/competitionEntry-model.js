const mongoose = require("mongoose");

const competitionEntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // References the user who is participating in the competition
  song: { type: mongoose.Schema.Types.ObjectId, ref: "Song", required: true }, // References the song that the user submitted as entry
  competitionId: {
    type: mongoose.Schema.Types.ObjectId, // References the competition this entry belongs to
    ref: "Competition",
    required: true,
  },
  votes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // References users who have voted for this entry
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CompetitionEntry", competitionEntrySchema);
