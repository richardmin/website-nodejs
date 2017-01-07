'use strict';
require('dotenv').config();
require('typescript-require');
var express = require('express');
let app = express();
var path = require('path');
var mysql = require('mysql');

function databaseConnection(sqlString, values, callback) {
    var connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'blog'
    });

    connection.connect(function(err) {
        if (err !== null) {
            console.log("[MYSQL] Error connecting to mysql:" + err);
        }
    });

    connection.query(sqlString, values, function(err) {
        connection.end();
        if (err !== null) {
            console.log("[MYSQL] Error with mysql query:" + err);
        }
        callback.apply(this, arguments);
    });
}


if(process.env.NODE_ENV === "development") {

    var webpack = require('webpack');
    var config = require('./config/webpack.config');
    var compiler = webpack(config);
    var WebpackDevServer = require('webpack-dev-server');

    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: {colors: true},
        hot: true,
        historyApifallBack: true
    }));

    app.use(webpackHotMiddleware(compiler, {
        log: console.log
    }));
}

app.get('/api/blog/:postId', function(req, res) {
    let query = "SELECT * FROM posts where ID = " + req.params.postId;
    databaseConnection(query, null, function(err, rows) {
        if(err) {
            res.status(503).json({ error: err.code });
        }
        else {
            res.json({ data: rows });
        }
    });
});

app.get('/api/blog', function(req, res) {
    let query = "SELECT * FROM posts";
    databaseConnection(query, null, function(err, rows) {
        if(err) {
            res.status(503).json({ error: err.code });
        } 
        else {
            res.json({ data: rows });
        }
    });
});

app.get("*", function(req, res) {
    res.sendFile("index.html", { root: '.'});
});

app.listen(3000, function(err, res) {
  if (err) return console.log(err);
  console.log('listening on 3000');
});
