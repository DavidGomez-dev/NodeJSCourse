const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   console.log("Middleware One");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Middleware Two");
//   res.send("<h1>Hello World</h1>");
// });

app.use("/users", (req, res, next) => {
  console.log("Route /users");
  res.send("<h1>Users</h1>");
});

app.use((req, res, next) => {
  console.log("Route /");
  res.send("<h1>Hello World</h1>");
});

app.listen(3000);
