const express = require("express");
const connectDB = require("./database/db");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
  res.send("Mellove Backend is running 🎶");
});

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Server is running on port http://localhost:${process.env.PORT}`
    );
  });
});
