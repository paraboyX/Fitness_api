const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const connection = require('./connection/db.connection');

const app = express();
const port = 8000;

app.use(express.json());
connection();

