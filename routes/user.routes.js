const express = require("express");
const routes = express.Router();
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");

routes.post("/", createUser);
routes.get("/", getUsers);
routes.put("/", updateUser);
routes.delete("/", deleteUser);

module.exports = routes;
