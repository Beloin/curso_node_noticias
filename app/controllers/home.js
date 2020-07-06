module.exports.index = function (application, req, res) {
    const connection = application.config.dbConnection();
    const NoticiasModel = new application.app.models.NoticiasDAO(connection);

    NoticiasModel.getFiveLastNoticias(function (error, result) {
        console.log(result);
        res.render("home/index", { noticias: result });
    });
};
