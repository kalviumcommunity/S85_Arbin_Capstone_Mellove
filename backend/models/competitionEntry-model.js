const mongoose = require("mongoose");

const competitionEntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  song: { type: mongoose.Schema.Types.ObjectId, ref: "Song", required: true },
  competitionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Competition",
    required: true,
  },
  votes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CompetitionEntry", competitionEntrySchema);
