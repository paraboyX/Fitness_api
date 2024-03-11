const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const connection = require("./connection/db.connection");
const userModel = require("./model/user.model");

const app = express();
const port = 8000;

app.use(express.json());
connection();

app.listen(port, () => console.log(`Server is running on :${port}`));

app.get("/register", (req, res) => {
  res.send({ message: "Get req working" });
});

app.post("/register", (req, res) => {
  let user = req.body;
  userModel
    .create(user)
    .then(() => {
      res.status(201).send({ message: "User created successfully!" });
    })
    .catch((err) => {
      if (!err.errors) {
        return res.status(400).send({ message: "Something went wrong" });
      } else {
        for (let errName in err.errors) {
          if (err.errors[errName].message === "User name already exists") {
            return res
              .status(409)
              .send({ message: `Username ${user.username} is already taken` });
          }
        }
      }
    });
});
