const express = require("express");
const { getFood } = require("../controller/food.controller");
const { verify } = require("../middleware/auth/verifytoken.auth");
const router = express.Router();

router.get("/", verify, getFood);

module.exports = router;
