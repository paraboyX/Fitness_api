const express = require("express");
const foodModel = require("../model/food.model");

const getFood = (req, res) => {
  res.status(200).send({
    message: "Get Food Successful",
  });
};

const searchFood = (req, res) => {
  res.status(200).send({
    message: "Get Food Successful",
  });
};

module.exports = { getFood, searchFood };
