const candidatura = require('../models/candidatar')();

module.exports.listaCandidaturas= function (req, res) {
    var promise = candidatura.find().exec();
    promise.then(
        function (candidatura) {
            res.status(200).json(candidatura);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    )
}

module.exports.inserirCandidatura = function (req,res){
    var promise = candidatura.create(req.body)
    promise.then(
        function(candidatura){
            res.status(201).json(candidatura);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}