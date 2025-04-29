const Competition = require("../models/competition-model");

const getAllCompetitions = async (req, res) => {
  try {
    const competitions = await Competition.find();
    res.status(200).json({
      success: true,
      data: competitions,
      message: "Competitions fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Failed to fetch competitions: " + error.message,
    });
  }
};

const getCompetitionById = async (req, res) => {
  try {
    const competition = await Competition.findById(req.params.id);
    if (!competition) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "Competition not found",
      });
    }
    res.status(200).json({
      success: true,
      data: competition,
      message: "Competition fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Failed to fetch competition: " + error.message,
    });
  }
};

const updateCompetition = async (req, res) => {
  try {
    const updatedCompetition = await Competition.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true, runValidators: true }
    );

    if (!updatedCompetition) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "Competition not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedCompetition,
      message: "Competition updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Failed to update competition: " + error.message,
    });
  }
};

module.exports = { getAllCompetitions, getCompetitionById, updateCompetition };
