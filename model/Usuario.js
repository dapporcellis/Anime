var conexao = require("./conexao");

var UsuarioScheme = conexao.Schema({
  nome: { type: String },
  email: { type: String },
  senha: { type: String },
  foto: { type: String },
});

module.exports = conexao.model("Usuario", UsuarioScheme);
