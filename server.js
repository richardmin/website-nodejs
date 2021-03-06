'use strict';
exports.__esModule = true;
require('dotenv').config();
var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var database_1 = require("./src/database");
if (process.env.NODE_ENV === "development") {
    var webpack = require('webpack');
    var config = require('./config/webpack.config');
    var compiler = webpack(config);
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: { colors: true },
        hot: true,
        historyApifallBack: true
    }));
    app.use(webpackHotMiddleware(compiler, {
        log: console.log
    }));
}
app.get('/api/blog/:postId', function (req, res) {
    var blogConnection = new database_1.database("blog");
    blogConnection.databaseConnection("SELECT * FROM posts where ID = ?", req.params.postId, function (err, rows) {
        if (err) {
            res.status(503).json({ error: err.code });
        }
        else {
            res.json({ data: rows });
        }
    });
});
app.get('/api/blog', function (req, res) {
    var blogConnection = new database_1.database("blog");
    blogConnection.databaseConnection("SELECT * FROM posts", null, function (err, rows) {
        if (err) {
            res.status(503).json({ error: err.code });
        }
        else {
            res.json({ data: rows });
        }
    });
});
if (process.env.NODE_ENV === "development") {
    app.get("*", function (req, res) {
        res.sendFile("public/index-debug.html", { root: '.' });
    });
}
app.listen(3000, function (err, res) {
    if (err) {
        return console.log(err);
    }
    console.log('listening on 3000');
});
