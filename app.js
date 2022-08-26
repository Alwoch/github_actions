const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello there....!");
});

app.get("/dashboard", (req, res) => {
  res.send("this is the dashboard!!");
});

app.listen(3000, console.log("listening on port 3000"));
