const mongoose = require("mongoose");

//const uri = "mongodb+srv://aluno:aluno@cluster0.tmvwi.mongodb.net/anime";
const uri = "mongodb://localhost:27017/anime";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useFindAndModify", false);

module.exports = mongoose;
