const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();

app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/Nutrition")
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error(err);
  });
