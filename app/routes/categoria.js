let controller = require("../controllers/categoria.js");

module.exports = function(app){
    app.get("/categorias",controller.listaCategorias);
    app.get("/categorias/:id",controller.buscarCategorias);
    app.post("/categorias",controller.inserirCategoria);
    app.delete("/categorias/:id",controller.excluirCategoria);
}