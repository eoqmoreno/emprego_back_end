const categorias = require("../models/categoria")();

module.exports.listaCategorias = function(req,res){
    var promise =  categorias.find().sort('nome').exec();
    promise.then(
        function(categoria){
            res.status(200).json(categoria);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.buscarCategorias = function(req,res){
    var id = req.params.id;
    var promise = categorias.findById(id);
    promise.then(
        function(categoria){
            res.status(200).json(categoria);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.inserirCategoria = function(req,res){
    let promise = categorias.create(req.body);
    promise.then(
        function(categoria){
            res.status(200).json(categoria);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.excluirCategoria = function(req, res){
    let promise = categorias.deleteOne(req.params.id);
    promise.then(
        function(categoria){
            res.status(200).json(categoria);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}