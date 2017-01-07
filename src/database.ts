var mysql = require('mysql');

export class database {
    database: string;
    constructor(database: string) { this.database = database; }

    databaseConnection(sqlString: string, values, callback: Function) {
        var connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: this.database
        });

        connection.connect();

        connection.query(sqlString, values, function(err) {
            if (err) {
                console.log("[MYSQL] Error connecting to mysql:" + err+'\n');
            }
            callback.apply(this, arguments);
        });

        connection.end();

    }
}