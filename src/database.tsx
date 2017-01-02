var mysql = require('mysql');

var sqlConnection = function sqlConnection(sql, query, next) {
    if (arguments.length === 2) {
        next = query;
        query = null;
    }

    var connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'blog'
    });

    connection.connect(function(err) {
        if (err !== null) {
            console.log("[MYSQL] Error connecting to mysql:" + err+'\n');
        }
    });

    connection.query(sql, query, function(err) {
        connection.end();

        if (err) {
            throw err;
        }
        next.apply(this, arguments);
    });
}

module.exports = sqlConnection;