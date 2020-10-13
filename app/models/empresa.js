var mongoose = require('mongoose');

module.exports = function () {
    let schema = mongoose.Schema({
        nomeJuridico: {
            type: String,
            required: true
        },
        nomeFantasia: {
            type: String,
            required: true
        },
        cnpj: {
            type:String,
            required:true
        },
        endereço: {
            type:String,
            required:true
        },
        email: {
            type: String,
            required: true
        },
        senha: {
            type: String,
            required: true
        },
        telefone: {
            type: String,
            required: true
        },
        historico: {
            type: String,
            required: true
        },
        atuacao: {
            type: String,
            required: true
        },
        foto: {
            type: String,
            required: true
        }
        // empresa: {
        //     type: mongoose.Schema.ObjectId,
        //     ref: "empresas"
        // }
    });
    return mongoose.model('empresas', schema);
}