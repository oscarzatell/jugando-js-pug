const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Router = require("./router/router");

app.set("view engine", "pug");
/*
app.get("/", (req, res) => {
  res.render("inicio");
});
*/
app.use("/", Router);

app.listen(3000, () => console.log("App lista!"));
