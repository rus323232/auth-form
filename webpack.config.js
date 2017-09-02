'use strict';

const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path              = require('path');

module.exports = {
    entry: {
        'app': './src/app/main.js'
    },
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.js'],
        alias: {

        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.scss$/,
                include: path.resolve('src', 'app'),
                use: ['css-to-string-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.scss$/,
                include: path.resolve('src', 'assets', 'sass'),
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    use: 'css-loader?sourceMap'
                })
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\|\/)core(\|\/)(esm(\|\/)src|src)(\|\/)linker/,
            path.resolve('./src'), // каталог с исходными файлами
            {} // карта маршрутов
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app']
        }),

        new HtmlWebpackPlugin({
             template: 'src/index.html'
        }),

        new ExtractTextPlugin('[name].[hash].css'),

        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false
            }
        }),

        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.min.js",
            jQuery: "jquery/dist/jquery.min.js",
            "window.jQuery": "jquery/dist/jquery.min.js"
        })
    ]
};
