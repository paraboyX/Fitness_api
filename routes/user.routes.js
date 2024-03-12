const express = require('express');
const routes = express.Router();

routes.get("/api", (req, res) => {
  res.send({ message: "Get req working" });
});

routes.post("/register", (req, res) => {
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


routes.put("/api", (req, res) => {
  res.send({ message: "put req working" });
});

routes.patch("/api", (req, res) => {
  res.send({ message: "patch req working" });
});

routes.delete("/api", (req, res) => {
  res.send({ message: "Delete req working" });
});

module.exports = routes;