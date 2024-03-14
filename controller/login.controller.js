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
