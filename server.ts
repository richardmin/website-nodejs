'use strict';

require('dotenv').config();
var express = require('express');
let app = express();
var path = require('path');
var mysql = require('mysql');

import { database } from "./src/database";

if(process.env.NODE_ENV === "development") {

    let webpack = require('webpack');
    let config = require('./config/webpack.config');
    let compiler = webpack(config);

    let webpackDevMiddleware = require('webpack-dev-middleware');
    let webpackHotMiddleware = require('webpack-hot-middleware');

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
    var blogConnection =  new database("blog");
    blogConnection.databaseConnection("SELECT * FROM posts where ID = ?", req.params.postId, function (err, rows) {
        if(err) {
            res.status(503).json({ error: err.code });
        }
        else {
            res.json({ data: rows });
        }
    });
});

app.get('/api/blog', function(req, res) {
    var blogConnection = new database("blog");
    blogConnection.databaseConnection("SELECT * FROM posts", null, function (err, rows) {
        if(err) {
            res.status(503).json({ error: err.code });
        } 
        else {
            res.json({ data: rows });
        }
    });
});


if(process.env.NODE_ENV === "development") {
    app.get("*", function(req, res) {
        res.sendFile("public/index.html", { root: '.'});
    });
}

app.listen(3000, function(err, res) {
    if (err) {
        return console.log(err);
    }
    console.log('listening on 3000');
});