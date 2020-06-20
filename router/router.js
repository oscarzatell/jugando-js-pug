const express = require("express");
const router = express.Router();

let hola = "hola mundo este es un texto desde una variable externa";
let colores = ["rojo", "azul", "amarillo"];

router.get("/", (req, res) => {
  res.render("inicio", { hola, colores });
});

module.exports = router;
