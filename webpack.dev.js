const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode : "development",
    devtool: 'source-map',
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
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ]
    },
    plugins: [ 
        new htmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename:"index.html"
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
    
}