// Init Variable
const isProduction = process.env.NODE_ENV === 'production';
const sassLoader = isProduction ? ['css-loader', 'sass-loader'] : ['style-loader', 'css-loader', 'sass-loader'];

// Load Nodejs Module
const Path = require('path');

// Load Webpack Plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack');

// Plugins Instance
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './src/static/index.html',
    filename: 'index.html',
    hash: true
});

const extractSass = new ExtractTextPlugin({
    filename: 'style.css', 
    disable: isProduction ? false : true
});

const cleanWebpackPlugin = new CleanWebpackPlugin([Path.resolve(__dirname, 'src/boot/*')], {
    verbose: true
})

const namedModulesPlugin = new Webpack.NamedModulesPlugin();

const hotModuleReplacementPlugin = new Webpack.HotModuleReplacementPlugin();

module.exports = {
    entry: './src/assets/scripts/index.jsx',
    output: {
        filename: 'index.min.js',
        path: Path.resolve(__dirname, 'src/boot')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: Path.resolve(__dirname, 'src/boot'),
        compress: true,
        hot: true,
        port: 5656,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: sassLoader
                })
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [
                            'env',
                            'react'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        extractSass,
        htmlWebpackPlugin,
        cleanWebpackPlugin,
        namedModulesPlugin,
        hotModuleReplacementPlugin
    ]
}