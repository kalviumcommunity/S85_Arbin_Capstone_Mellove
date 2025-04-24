const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  song: { type: mongoose.Schema.Types.ObjectId, ref: "Song", required: true }, // Reference to the Song collection
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User collection
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", commentSchema);
