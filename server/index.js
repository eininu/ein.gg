const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || req.body.message || "Hello World!";
  res.status(200).send(message);
});

app.get("/otherpath", (req, res) => {
  res.status(200).send("You're on the other path!");
});

exports.helloWorld = app;
