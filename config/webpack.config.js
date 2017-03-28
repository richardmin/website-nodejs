var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
        './src/index.tsx'
    ],
    output: {
        filename: 'app.js',
        publicPath: '/assets/js',
        path: path.resolve('dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.webpack.js', '.web.js'],
    },
    module: {
        rules: [{
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: [
                    /node_modules/
                ]
            },
            { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'] },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                    publicPath: "/dist"
                })
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new WebpackNotifierPlugin({ alwaysNotify: true }),
        new ExtractTextPlugin({ filename: 'public/style.css', allChunks: true }),
    ],
};