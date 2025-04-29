const User = require("../models/user-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
      message: "Users fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Failed to fetch users: " + error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      data: user,
      message: "User fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Failed to fetch user: " + error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // Allow partial updates
      },
      { new: true, runValidators: true }
    ).select("-password"); // exclude password from response

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedUser,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Failed to update user: " + error.message,
    });
  }
};

module.exports = { getAllUsers, getUserById, updateUser };
