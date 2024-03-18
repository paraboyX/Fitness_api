require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connection established");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connection;
