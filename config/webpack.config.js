var webpack = require('webpack');
var path = require('path');
// var WebpackNotifierPlugin = require('webpack-notifier');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.tsx'
    ],
    output: {
        filename: 'app.js',
        publicPath: '/assets/js',
        path: path.resolve('dist')
    },


    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.webpack.js', '.web.js']
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [
                'babel-loader',
                'ts-loader'
            ],
            exclude: /node_modules/,
        }, ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    devServer: {
        host: 'localhost',
        port: 3000,


        historyApiFallback: true,

        hot: true
    },
};