let controller = require("../controllers/curriculo.js");

module.exports = function(app){
    app.get("/curriculos",controller.listaCurriculo);
    app.post("/curriculos",controller.inserirCurriculo);
    app.get("/curriculos/:id",controller.buscarCurriculo);
}