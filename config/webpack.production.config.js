var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.tsx'
    ],
    output: {
        filename: 'app.js',
        publicPath: '/assets/js',
        path: path.resolve('dist/js')
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx', '.webpack.js', '.web.js'],
        modulesDirectories: ['src', 'node_modules'],
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') },
            { test: /\.json$/, loader: 'json-loader' },
        ],

        preloaders: [
            { test: /\.js$/, loader: 'source-map-loader' },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            mangle: true,
            compress: {
                warnings: false, // Suppress uglification warnings
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true
            },
            output: {
                comments: false,
            },
            exclude: [/\.min\.js$/gi] // skip pre-minified libs
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]), //https://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack,
        new ExtractTextPlugin({
            filename: 'public/main.css',
            allChunks: true
        }),
    ],
};