var mysql = require('mysql');

export default function (sqlString: string, values, callback: Function) {
    if (arguments.length === 2) {
        callback = values;
        values = null;
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

    connection.query(sqlString, values, function(err) {
        connection.end();

        if (err) {
            throw err;
        }
        callback.apply(this, arguments);
    });
}
