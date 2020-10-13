var mongoose = require('mongoose');

module.exports = function (uri) {
    mongoose.connect(uri);
    mongoose.connection.on('connected', function () {
        console.log('Conectado ' + uri);
    });
    mongoose.connection.on('disconnected', function () {
        console.log('Desconectado ' + uri)
    });
    mongoose.connection.on('error', function (erro) {
        console.log('Erro: ' + erro);
    });
    mongoose.set('debug', true);
}