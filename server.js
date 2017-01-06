'use strict';
require('dotenv').config();

require('typescript-require');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./config/webpack.config');

var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var compiler = webpack(config);
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



app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true},
    hot: true,
    historyApifallBack: true
}))

app.use(webpackHotMiddleware(compiler, {
    log: console.log
}))

app.get('/blog/:postId', function(req, res) {
    let query = "SELECT * FROM posts where ID = " + req.params.postId;
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

app.use(express.static(path.join(__dirname, '.')));

  // new WebpackDevServer(webpack(config), {
  //   publicPath: config.output.publicPath,
  //   hot: true,
  //   historyApiFallback: true
  // }).listen(3000, 'localhost', function (err, result) {
  //   if (err) {
  //     return console.log(err);
  //   }

  //   console.log('Listening at http://localhost:3000/');
  // });

app.listen(3000, function(err, res) {
  if (err) return console.log(err);
  console.log ('listening on 3000')
});
