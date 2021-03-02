const path = require("path");
const express = require("express");

const Router = express.Router();

Router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

Router.get("/users", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "users.html"));
});

Router.post("/users", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = Router;
