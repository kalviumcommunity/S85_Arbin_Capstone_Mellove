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

const createUser = async (req, res) => {
  try {
    const { username, email, password, profileImage, bio, role } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Username, email, and password are required",
      });
    }

    const newUser = await User.create({
      username,
      email,
      password,
      profileImage,
      bio,
      role,
    });

    res.status(201).json({
      success: true,
      data: newUser,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Failed to create user: " + error.message,
    });
  }
};

module.exports = { getAllUsers, getUserById, createUser };
