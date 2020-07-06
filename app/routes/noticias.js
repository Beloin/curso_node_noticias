const { get } = require("../../config/server");

module.exports = function (application) {
    application.get("/noticias", function (req, res) {
        const getNoticias = application.app.controllers.noticias.noticias;
        getNoticias(application, req, res);
    });

    application.get("/noticia", function (req, res) {
        const getNoticia = application.app.controllers.noticias.noticia;
        getNoticia(application, req, res);
    });
};
