const mongoose = require("mongoose");

const competitionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  judges: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // References users who are acting as judges
  winners: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // References a winning user
      rank: { type: Number },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Competition", competitionSchema);
