import { express } from 'express';
let app = express();
import databaseConnection from 'database';

app.get('/blog/:postId', function(req, res) {
    let query = "SELECT * FROM posts where POSTID = " + req.params.postId;
    databaseConnection(query, null, function(err, rows) {
        if(err) {
            console.log("[MYSQL]: MYSQL query failed. Query: " + query + " Result: " + err);
        }
        res.locals.rows = rows;
        res.send(rows);
    });
});

app.get('/blog', function(req, res) {
    let query = "SELECT * FROM posts";
    databaseConnection(query, null, function(err, rows) {
        if(err) {
            console.log("[MYSQL]: MYSQL query failed. Query: " + query + " Result: " + err);
        }
        res.locals.rows = rows;
        res.send(rows);
    });
});