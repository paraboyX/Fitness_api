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
  userModel
    .find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send({message : "Server error"});
    });
};

const updateUser = (req, res) => {
  res.status(200).send({ message: "Put req working" });
};

const deleteUser = (req, res) => {
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
