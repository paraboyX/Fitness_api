const userModel = require("../model/user.model");
var bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    let newUser = req.body;
    let pass = newUser.password;
    var salt = bcrypt.genSaltSync(10);
    var hashedPass = bcrypt.hashSync(pass, salt);
    newUser.password = hashedPass;
    let doc = await userModel.create(newUser);
    res.status(201).send({ message: "User created" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error in updation" });
  }
};

const getUsers = async (req, res) => {
  userModel
    .find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send({ message: "Server error" });
    });
};

const updateUser = async (req, res) => {
  let id = req.params.id;
  let updatedData = req.body;
  userModel
    .updateOne({ _id: id }, { age: 25 })
    .then(() => {
      res.status(200).send({ message: "User updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Error in updation" });
    });
};

const deleteUser = async (req, res) => {
  let id = req.params.id;
  userModel
    .deleteOne({ _id: id })
    .then(() => {
      res.status(200).send({ message: "Deleted the user" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Server error" });
    });
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
