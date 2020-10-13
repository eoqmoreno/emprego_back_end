var mongoose = require('mongoose');

module.exports = function () {
    let schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
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
        data: {
            type: String,
            required: true
        },
        foto: {
            type: String,
            required: true
        }
    });
    return mongoose.model('candidatos', schema);
}