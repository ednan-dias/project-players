const express = require("express");
const routes = require("./routes");
const app = express();
require("./database");

app.use(express.json());
app.use("/api", routes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.message = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

module.exports = app;
