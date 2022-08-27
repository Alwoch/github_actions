const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({msg:'Hello there.....'})
});

app.get("/dashboard", (req, res) => {
  res.status(200).json({msg:'you are now on the dashboard!'})
});

module.exports=app


