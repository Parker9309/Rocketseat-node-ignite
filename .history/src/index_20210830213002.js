const { response } = require("express");
const express = require("express");

use.app = express();

app.get("/", (req, res) => {
  return response.json({message: "ain duuu"});
});

app.listen(3200);