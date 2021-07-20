async function abreAdd(req, res) {
  res.render("usuario/add.ejs", {});
}

async function add(req, res) {
  res.render("usuario/list.ejs", req.body);
}

async function listar(req, res) {
  res.send("Oi Mundo!");
}

async function listarFiltro(req, res) {}

async function abreEdt(req, res) {}

async function edt(req, res) {}

async function del(req, res) {}

module.exports = {
  add,
  abreAdd,
  listar,
  listarFiltro,
  abreEdt,
  edt,
  del,
};
