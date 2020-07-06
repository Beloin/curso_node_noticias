module.exports = function (app) {
    app.get("/formulario_inclusao_noticia", function (req, res) {
        const form = app.app.controllers.admin.formulario_inclusao_noticia;
        form(app, req, res);
    });

    app.post("/noticias/salvar", function (req, res) {
        const saveNot = app.app.controllers.admin.noticias_salvar;
        saveNot(app, req, res);
    });
};
