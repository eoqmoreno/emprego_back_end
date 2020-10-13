let controller = require("../controllers/candidatar.js");

module.exports = function(app){
    app.get("/candidaturas",controller.listaCandidaturas);
    app.post("/candidaturas",controller.inserirCandidatura);
}