const express = require("express");
const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  if (req.headers.authorization !== undefined) {
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "paraboyX", (err, data) => {
      if (err)
        return res
          .status(403)
          .send({ auth: false, message: "Failed to authenticate token." });
      else next();
    });
  }
};

module.exports = { verify };
