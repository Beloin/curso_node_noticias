module.exports = function (app) {
    app.get("/", function (req, res) {
        const home = app.app.controllers.home.index;
        home(app, req, res);
    });
};
