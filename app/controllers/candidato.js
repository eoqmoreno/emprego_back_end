const { Promise } = require("mongoose");
const categoria = require("../models/categoria");

const candidatos = require("../models/candidato")();

module.exports.listaCandidato = function(req,res){
    promise = candidatos.find().exec();
    promise.then(
        function(candidato){
            res.status(200).json(candidato);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
} 

module.exports.buscarCandidato = function(req,res){
    var id = req.params.id;
    var promise = candidatos.findById(id);
    promise.then(
        function(candidato){
            res.status(200).json(candidato);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.inserirCandidato = function(req,res){
    var promise = candidatos.create(req.body);
    promise.then(
        function(candidato){
            res.status(200).json(candidato);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}