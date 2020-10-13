var mongoose = require('mongoose');

module.exports = function () {
    let schema = mongoose.Schema({
        curriculo: {
            type: mongoose.Schema.ObjectId,
            required: true,
        },
        vaga: {
            type: mongoose.Schema.ObjectId,
            required: true,
        },
        estado: {
            type: Boolean,
            required:true,
        }
    });
    return mongoose.model('candidaturas', schema);
}