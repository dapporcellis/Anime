var Usuario = require("../model/Usuario");

async function abreAdd(req, res) {
  res.render("usuario/add.ejs", { msg: "" });
}

async function add(req, res) {
  var nome = req.body.nome;
  var email = req.body.email;
  var senha = req.body.senha;
  var foto = req.body.foto;

  var novoUsuario = new Usuario({
    nome: nome,
    email: email,
    senha: senha,
    foto: foto,
  });

  novoUsuario.save(function (err) {
    if (err) {
      console.log("O erro que aconteceu foi: " + err);
    } else {
      res.render("usuario/add.ejs", { msg: "Usuário adicionado!" });
    }
  });
}

async function listar(req, res) {
  Usuario.find({})
    .lean()
    .exec(function (err, docs) {
      if (err) {
        console.log("O erro que aconteceu foi: " + err);
      } else {
        res.render("usuario/list.ejs", { Usuarios: docs });
      }
    });
}

async function listarFiltro(req, res) {}

async function abreEdt(req, res) {}

async function edt(req, res) {}

async function del(req, res) {
  Usuario.findByIdAndDelete(req.params.id).exec(function (err) {
    if (err) {
      console.log("O erro que aconteceu foi: " + err);
    } else {
      res.redirect("/usuario");
    }
  });
}

module.exports = {
  add,
  abreAdd,
  listar,
  listarFiltro,
  abreEdt,
  edt,
  del,
};
