const userModel = require("../model/user.model");

const getUsers = (req, res) => {
  res.status(200).send({ message: "Get req working" });
};

const createUser = (req, res) => {
  res.status(201).send({ message: "Post req working" });
};

const updateUser = (req, res) => {
  res.status(200).send({ message: "Put req working" });
};

const deleteUser = (req, res) => {
  res.status(200).send({ message: "Delete req working" });
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
