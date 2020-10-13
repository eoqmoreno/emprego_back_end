let controller = require("../controllers/habilidade.js");

module.exports = function(app){
    app.get("/habilidades",controller.listaHabilidades);
    app.get("/habilidades/:tipo",controller.buscarHabilidades);
    app.post("/habilidades",controller.inserirHabilidades);
}