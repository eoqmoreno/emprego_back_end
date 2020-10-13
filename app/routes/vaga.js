let controller = require("../controllers/vaga.js");

module.exports = function(app){
    app.get("/vagas",controller.listaVaga);
    app.post("/vagas",controller.inserirVaga);
    app.get("/vagas/:id",controller.buscarVaga);
}