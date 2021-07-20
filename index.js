const express = require("express");
const app = express();
var usuario = require("./routes/usuarioRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use("/usuario", usuario);

app.listen("3000", function () {
  console.log("Projeto funcionando!");
});
