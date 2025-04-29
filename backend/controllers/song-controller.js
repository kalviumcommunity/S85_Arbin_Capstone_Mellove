const Song = require("../models/song-model");

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json({
      success: true,
      data: songs,
      message: "Songs fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Failed to fetch songs: " + error.message,
    });
  }
};

const getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "Song not found",
      });
    }
    res.status(200).json({
      success: true,
      data: song,
      message: "Song fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Failed to fetch song: " + error.message,
    });
  }
};

const createSong = async (req, res) => {
  try {
    const { title, audioUrl, genre, language, mood, duration, uploader } =
      req.body;

    // Check required fields
    if (!title || !audioUrl || !duration || !uploader) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Title, audioUrl, duration, and uploader are required",
      });
    }

    const newSong = await Song.create({
      title,
      audioUrl,
      genre,
      language,
      mood,
      duration,
      uploader,
    });

    res.status(201).json({
      success: true,
      data: newSong,
      message: "Song uploaded successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Failed to upload song: " + error.message,
    });
  }
};

module.exports = { getAllSongs, getSongById, createSong };
