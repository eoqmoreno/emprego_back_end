const profissoes = require("../models/profissao")();

module.exports.listaProfissoes = function (req, res) {
    var promise = profissoes.find().sort('nome').exec();
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

module.exports.buscarProfissoes = function (req, res) {
    var promise = profissoes.findById(req.params.id);
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

module.exports.inserirProfissoes = function (req, res) {
    var promise = profissoes.create(req.body);
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