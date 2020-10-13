var mongoose = require('mongoose');

module.exports = function () {
    let schema = mongoose.Schema({
        escolariadade: {
            type: String,
            required: true,
        },
        nomeInstituição: {
            type: String,
        },
        anoConclusão: {
            type: String,
        },
        cursos: {
            type: [],
        },
        tecnologia: {
            type: [String],
            required: true,
        },
        interpessoais: {
            type: [String],
            required: true,
        },
        experiencias: {
            type: [],
            required: true,
        },
        idiomas: {
            type: [],
        },
        idCandidato: {
            type: String,
            required: true,
        }
    });
    return mongoose.model('curriculos', schema);
}