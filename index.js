require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const connection = require("./connection/db.connection");
const userModel = require("./model/user.model");
const userRoute = require("./routes/user.routes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

connection();

app.listen(8000, () => console.log(`Server is running`));

app.use("/register", userRoute);
