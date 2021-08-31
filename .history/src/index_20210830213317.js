const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({message: "ain duuu"});
});

app.listen(3200);