require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Nutrition");
    console.log("DB connection established");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connection;
