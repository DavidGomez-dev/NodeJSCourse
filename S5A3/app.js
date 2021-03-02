const path = require("path");
const express = require("express");
const app = express();
const routes = require("./routes/routes");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(3000);
