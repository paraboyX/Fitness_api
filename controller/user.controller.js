const userModel = require("../model/user.model");

const getUsers = (req, res) => {
  res.send({ message: "Get req working" });
};

const createUser = (req, res) => {
  res.send({ message: "Post req working" });
};

const updateUser = (req, res) => {
  res.send({ message: "Put req working" });
};

const deleteUser = (req, res) => {
  res.send({ message: "Delete req working" });
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
