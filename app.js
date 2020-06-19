const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("inicio");
});

app.listen(3000, () => console.log("App lista!"));
