const empresas = require("../models/empresa")();

module.exports.listaEmpresas = function (req, res) {
    var promise = empresas.find().exec();
    promise.then(
        function (profissao) {
            res.status(200).json(profissao);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    )
}

module.exports.buscarEmpresas = function (req, res) {
    var promise = empresas.findById(req.params.id);
    promise.then(
        function (profissao) {
            res.status(200).json(profissao);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    )
}

module.exports.inserirEmpresas = function (req, res) {
    var promise = empresas.create(req.body);
    promise.then(
        function (profissao) {
            res.status(200).json(profissao);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    )
}