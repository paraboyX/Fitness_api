const express = require("express");
const { userLogin } = require("../controller/login.controller");
const router = express.Router();

router.post("/", userLogin);

module.exports = router;
