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

async function listarFiltro(req, res) {
  var pesquisar = req.body.pesquisar;
  var opcao = req.body.opcao;

  if (opcao == "email") {
    Usuario.find({ email: new RegExp(pesquisar, "i") })
      .lean()
      .exec(function (err, docs) {
        if (err) {
          console.log("O erro que aconteceu foi: " + err);
        } else {
          res.render("usuario/list.ejs", { Usuarios: docs });
        }
      });
  } else if (opcao == "nome")
    Usuario.find({ nome: new RegExp(pesquisar, "i") })
      .lean()
      .exec(function (err, docs) {
        if (err) {
          console.log("O erro que aconteceu foi: " + err);
        } else {
          res.render("usuario/list.ejs", { Usuarios: docs });
        }
      });
}

async function abreEdt(req, res) {
  Usuario.findById(req.params.id)
    .lean()
    .exec(function (err, docs) {
      if (err) {
        console.log("O erro que aconteceu foi: " + err);
      } else {
        res.render("usuario/edit.ejs", { msg: "", Usuario: docs });
      }
    });
}

async function edt(req, res) {
  Usuario.findById(req.params.id, function (err, usuario) {
    usuario.nome = req.body.nome;
    usuario.email = req.body.email;
    usuario.senha = req.body.senha;
    usuario.foto = req.body.foto;
    usuario.save(function (err, docs) {
      if (err) {
        console.log("O erro que aconteceu foi: " + err);
      } else {
        res.render("usuario/edit.ejs", {
          msg: "O usuario foi editado com sucesso!",
          Usuario: docs,
        });
      }
    });
  });
}

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
