const curriculo = require('../models/curriculo')();

module.exports.inserirCurriculo = function (req, res) {
    var promise = curriculo.create(req.body);
    promise.then(
        function(curriculo){
            res.status(201).json(curriculo);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.listaCurriculo = function (req,res) {
    var promise = curriculo.find().exec();
    promise.then(
        function(curriculo){
            res.status(200).json(curriculo);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.buscarCurriculo = function (req,res) {
    var promise = curriculo.findById(req.params.id);
    promise.then(
        function(curriculo){
            res.status(200).json(curriculo);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}