const mysql = require("mysql")

var connexion = mysql.createPool({
    host: "localhost",
    port: "3306",
    database: "portfolio",
    user: "root",
    password: "root"
});

module.exports = connexion