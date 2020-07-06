module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia", {
        validacao: {},
        noticia: {},
    });
};

module.exports.noticias_salvar = function (application, req, res) {
    const connection = application.config.dbConnection();
    const noticiasModel = new application.app.models.NoticiasDAO(connection);

    const noticia = req.body;

    req.assert("titulo", "Título é obrigatório!").notEmpty();
    req.assert("resumo", "Resumo é obrigatório!").notEmpty();
    req.assert("resumo", "10 <= Resumo <= 100").len(10, 100);
    req.assert("autor", "Autor é obrigatório").notEmpty();
    req.assert("data_noticia", "Data é obrigatório")
        .notEmpty()
        .isDate({ format: "YYYY-MM-DD" });
    req.assert("noticia", "Noticia é obrigatório").notEmpty();

    let errors = req.validationErrors();
    if (errors) {
        console.log(errors);
        res.render("admin/form_add_noticia", {
            validacao: errors,
            noticia: noticia,
        });
        // Cancela o resto da operação.
        return;
    }

    noticiasModel.saveNoticia(noticia, function (error, result) {
        if (error) {
            res.send(error);
        } else res.redirect("/noticias");
    });
};
