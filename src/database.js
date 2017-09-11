"use strict";
exports.__esModule = true;
var mysql = require('mysql');
var database = /** @class */ (function () {
    function database(database) {
        this.database = database;
    }
    database.prototype.databaseConnection = function (sqlString, values, callback) {
        var connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: this.database
        });
        connection.connect();
        connection.query(sqlString, values, function (err) {
            if (err) {
                console.log("[MYSQL] Error connecting to mysql:" + err + '\n');
            }
            callback.apply(this, arguments);
        });
        connection.end();
    };
    return database;
}());
exports.database = database;
