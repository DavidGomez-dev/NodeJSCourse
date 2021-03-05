const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes/routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views"); //redundant, the default is /views

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000, () => {
  console.log("Starting server in 3000");
});
