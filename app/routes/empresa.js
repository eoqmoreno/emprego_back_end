let controller = require("../controllers/empresa.js");

module.exports = function(app){
    app.get("/empresas",controller.listaEmpresas);
    app.get("/empresas/:id",controller.buscarEmpresas);
    app.post("/empresas",controller.inserirEmpresas);
}