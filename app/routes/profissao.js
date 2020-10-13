let controller = require("../controllers/profissao.js");

module.exports = function(app){
    app.get("/profissoes",controller.listaProfissoes);
    app.get("/profissoes/:id",controller.buscarProfissoes);
    app.post("/profissoes",controller.inserirProfissoes);
}