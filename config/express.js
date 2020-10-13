let express =  require('express')

let categoriaRouter = require('../app/routes/categoria.js');
let candidatoRouter = require('../app/routes/candidato.js');
let empresaRouter = require('../app/routes/empresa.js');
let profissaoRouter = require('../app/routes/profissao.js');
let habilidadeRouter = require('../app/routes/habilidade.js');
let vagaRouter = require('../app/routes/vaga.js');
let curriculoRouter = require('../app/routes/curriculo.js');
let candidatarRouter = require('../app/routes/candidatar.js');


let bodyParser =  require('body-parser');

module.exports = function(){
    let app = express();
    app.set("port", 80);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extends: false}));
    app.use('../uploads', express.static('uploads'))

    categoriaRouter(app);
    candidatoRouter(app);
    empresaRouter(app);    
    profissaoRouter(app);
    habilidadeRouter(app);
    vagaRouter(app);
    candidatarRouter(app);
    curriculoRouter(app);
    
    return app;
}