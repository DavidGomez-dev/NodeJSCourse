const express = require("express");
const model = require("../model/model");

const Router = express.Router();

Router.get("/", (req, res, next) => {
  res.render("index.ejs", { path: "/", pageTitle: "Home page" });
});

Router.get("/users", (req, res, next) => {
  res.render("users.ejs", {
    users: model,
    path: "/users",
    pageTitle: "Users page",
  });
});

Router.post("/", (req, res, next) => {
  const user = req.body;
  model.push(user);
  //console.log(model);
  res.redirect("/users");
});

module.exports = Router;
