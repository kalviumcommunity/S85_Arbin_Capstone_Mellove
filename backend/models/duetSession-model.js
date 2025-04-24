const mongoose = require("mongoose");

const duetSessionSchema = new mongoose.Schema({
  baseSinger: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // References the original user who started the duet
    required: true,
  },
  baseAudioUrl: { type: String, required: true },
  overlaySinger: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // References the second user joining the duet (optional)
  overlayAudioUrl: { type: String },
  mergedAudioUrl: { type: String },
  isLive: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("DuetSession", duetSessionSchema);
