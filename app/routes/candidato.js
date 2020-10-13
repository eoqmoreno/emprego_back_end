let controller = require("../controllers/candidato.js");

module.exports = function(app){
    app.get("/candidatos",controller.listaCandidato);
    app.get("/candidatos/:id",controller.buscarCandidato);
    app.post("/candidatos",controller.inserirCandidato);
}