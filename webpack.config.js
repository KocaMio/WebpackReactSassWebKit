const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Webpack = require('webpack');

// Create Extract Instance
const extractSass = new ExtractTextPlugin({
    filename: 'style.css', 
    // disable: true // TODO: true in development, false in production
});

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
        port: 5656
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        // 'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
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
        new CleanWebpackPlugin([Path.resolve(__dirname, 'src/boot/*')], {
            verbose: true
        }),
        new Webpack.NamedModulesPlugin(),
        new Webpack.HotModuleReplacementPlugin()
    ]
}