var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

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
        path: path.resolve('dist/js')
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
        }],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new WebpackNotifierPlugin({ alwaysNotify: true })
    ],
};