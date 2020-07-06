const app = require("./config/server");

// const rotaHome = require("./app/routes/home")(app);

// const rotaForm = require("./app/routes/formulario_noticia")(app);

// const rotaNoticias = require("./app/routes/noticias");
// rotaNoticias(app);

app.listen(3000, function () {
    console.log("Servidor Rodando com Express");
});
