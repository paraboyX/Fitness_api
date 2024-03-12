const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
console.log(MONGO_URL);

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Nutrition", {});
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connection;
