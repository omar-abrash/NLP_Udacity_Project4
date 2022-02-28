const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: "production",
    optimization: {
        minimizer: [new TerserPlugin({}), new MiniCssExtractPlugin({})] // we used (mini-css-extract-plugin) 
    },                                                                  // insted of (optimize-css-assets-webpack-plugin)
    devtool: 'source-map',                                              // in (npmjs.com)  For webpack v5 or above please use css-minimizer-webpack-plugin instead.
        output: {
        libraryTarget: 'var',
        library: 'Client'    // you can use any word in here .
    },
    module: {
        rules: [
            { // babel loaders
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
            },
            { // css loaders
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            }
        ]
    },
    plugins: [ 
        new htmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename:"index.html"
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        // new WorkboxPlugin.GenerateSW()
    ]
    
}
