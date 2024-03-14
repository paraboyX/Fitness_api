const express = require("express");
const { getFood, searchFood } = require("../controller/food.controller");
const { verify } = require("../middleware/auth/verifytoken.auth");
const router = express.Router();

router.get("/", verify, getFood);
router.get("/:name", verify, searchFood);

module.exports = router;
