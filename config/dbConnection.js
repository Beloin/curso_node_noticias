const mysql = require("mysql");

const connMySQL = function () {
    console.log("Iniciado uma conexão ao banco de dados");

    return (connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "2001",
        database: "portal_noticias",
    }));
};

/**
 * Aqui é exportada a função para retornar a connection do MySQL
 */

// Porém, usando consign ele automaticamente executa essa função,
// o que é um problema, pois teriam vários conexões com o BD assim que tivesse uma requisição
// Sendo assim usamos um 'Wrapper'.

module.exports = function () {
    console.log("Autoload Carrregou BD");

    return connMySQL;
};
