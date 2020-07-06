const express = require("express");
const consign = require("consign");
const bdParser = require("body-parser");
const validator = require("express-validator");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");

// Aqui se inclui os midwares usados dentro do server
app.use(express.static("./app/public"))
app.use(bdParser.urlencoded({ extended: true })); // Se tem o parser para JSON numa requisição
app.use(validator());

// Faz autoload dos módulos, não só de rotas, mas do que precisarmos!!!
consign()
    .include("app/routes")
    .then("config/dbConnection.js") // Porém o config lê e executa se for uma função
    .then("app/models")
    .then("app/controllers")
    .into(app);

module.exports = app;
