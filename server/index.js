const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let message = req.query.message || req.body.message || "Hello World!";
  res.status(200).send(message);
});

app.get("/otherpath", (req, res) => {
  res.status(200).send("You're on the other path!");
});

app.get("/sum/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const sum = (a, b) => {
    return a + b;
  };
  const c = sum(a, b);
  res.status(200).send({ a, b, c });
});

exports.helloWorld = app;
