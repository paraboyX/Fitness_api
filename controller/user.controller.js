const userModel = require("../model/user.model");
var bcrypt = require("bcryptjs");

const createUser = (req, res) => {
  let newUser = req.body;
  let pass = newUser.password;
  var salt = bcrypt.genSaltSync(10);
  var hashedPass = bcrypt.hashSync(pass, salt);
  newUser.password = hashedPass;
  userModel
    .create(newUser)
    .then(() => res.status(201).send({ message: "User inserted" }))
    .catch((err) => {
      console.log("Error in creating User", err);
      return res.status(400).send({
        message: "Insertion issue",
      });
    });
};

const getUsers = (req, res) => {
  res.status(200).send({ message: "Get req working" });
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
