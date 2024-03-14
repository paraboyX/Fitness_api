require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connection = require("./connection/db.connection");
const userModel = require("./model/user.model");
const userRoute = require("./routes/user.routes");
const loginRoute = require("./routes/userLogin.routes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

connection();

app.listen(8000, () => console.log(`Server is running`));

app.use("/register", userRoute);
app.use("/login", loginRoute);
