const habilidades = require('../models/habilidade')();

module.exports.listaHabilidades= function (req, res) {
    var promise = habilidades.find().exec();
    promise.then(
        function (habilidade) {
            res.status(200).json(habilidade);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    )
}

module.exports.buscarHabilidades = function (req, res) {
    var promise = habilidades.find({tipo: req.params.tipo}).exec();
    promise.then(
        function (habilidade) {
            res.status(200).json(habilidade);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    )
}

module.exports.inserirHabilidades = function (req, res) {
    var promise = habilidades.create(req.body);
    promise.then(
        function (habilidade) {
            res.status(200).json(habilidade);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    )
}