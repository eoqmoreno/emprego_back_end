const vaga = require('../models/vaga')();

module.exports.inserirVaga = function (req, res) {
    var promise = vaga.create(req.body);
    promise.then(
        function(vaga){
            res.status(201).json(vaga);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.listaVaga = function (req,res) {
    var promise = vaga.find().exec();
    promise.then(
        function(vaga){
            res.status(200).json(vaga);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.buscarVaga = function (req,res) {
    var promise = vaga.findById(req.params.id);
    promise.then(
        function(vaga){
            res.status(200).json(vaga);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}