var http = require("http");
//import http from "http";

/// Sem Express
const server = http.createServer(function (req, res) {
    const categoria = req.url;
    if (categoria == "/gasolina")
        res.end("<html> <body> Joga lá gasolinaaa </body> </html>");
    else if (categoria == "/moda")
        res.end("<html> <body> Hello World 2.0 </body> </html>");
    else 
        res.end("<html> <body> Hello World </body> </html>");
});

server.listen(3000);
