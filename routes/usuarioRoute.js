const express = require("express");
const router = express.Router();
var usuarioController = require("../controller/usuarioController");

//CREATE
router.get("/add", usuarioController.abreAdd);
router.post("/add", usuarioController.add);

//READ
router.get("/", usuarioController.listar);
router.post("/", usuarioController.listarFiltro);

//UPDATE
router.get("/edt/:id", usuarioController.abreEdt);
router.post("/edt/:id", usuarioController.edt);

//DELETE
router.get("/del/:id", usuarioController.del);

module.exports = router;
