const mongoose = require("mongoose");
const validator = require("validator");

const songSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  audioUrl: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isURL(v),
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  genre: { type: String },
  language: { type: String },
  mood: { type: String, default: "Neutral" },
  duration: { type: Number, required: true },
  uploader: {
    type: mongoose.Schema.Types.ObjectId, // References the user who uploaded the song
    ref: "User",
    required: true,
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Users who liked the song
  favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Users who marked this song as favourite
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], // References comments made on this song
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Song", songSchema);
