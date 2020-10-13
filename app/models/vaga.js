var mongoose = require('mongoose');

module.exports = function () {
    let schema = mongoose.Schema({
        categoria: {
            type: String,
            required: true,
        },
        profissao: {
            type: String,
            required: true,
        },
        descricao: {
            type: String,
            required: true,
        },
        salario: {
            type: String,
            required: true,
        },
        horario: {
            type: String,
            required: true,
        },
        dias: {
            type: String,
            required: true,
        },
        habTecnica: {
            type: [String],
            required: true,
        },
        habInterpessoais: {
            type: [String],
            required: true,
        },
        perfil: {
            type: String,
            required: true,
        },
        qtdVagas: {
            type: String,
            required: true,
        },
        idEmpresa: {
            type: mongoose.Schema.ObjectId,
            required: true,
        }
    });
    return mongoose.model('vagas', schema);
}