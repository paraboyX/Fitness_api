require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

const connection = async () => {
  try {
    await mongoose
      .connect(MONGO_URL)
      .then(() => {
        console.log("DB connection established");
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connection;
