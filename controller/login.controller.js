const express = require("express");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");

const userLogin = (req, res) => {
  let email = req.body.email;
  if (!email || typeof email !== "string")
    return res.status(400).send({ error: "'Email' field is required!" });
  else {
    userModel
      .findOne({ email: email })
      .then((data) => {
        let password = req.body.password;
        bcrypt.compare(password, data.password, (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).send({ error: err.message });
          }
          if (result) {
            res.status(200).send({ message: "Pass correct" });
            // Generate token for the user and send it to client side
            const payload = {
              user_email: data.email,
              username: req.body.name,
              exp: Math.floor(Date.now() / 1000) + 60 * 60, // Token expiration time (1 hour from now)
            };

            const token = jwt.sign(payload, "paraboyX", { algorithm: "HS256" });
            console.log(token);
          } else {
            res.status(401).send({ error: "Wrong Password!" });
          }
        });
      })
      .catch((err) => {
        res.send({ message: "Email Not Found", error: err });
      });
  }
};
module.exports = { userLogin };
