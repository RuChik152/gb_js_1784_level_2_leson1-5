const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// let ExtractTextPlugin  = require('extract-text-webpack-plugin');
const miniCss = require("mini-css-extract-plugin");


module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundel.js'
    },

    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [miniCss.loader, "css-loader", "sass-loader"],
          },
        ],
      },

    plugins: [
        new HtmlWebpackPlugin ({
            template: path.resolve(__dirname, './public/template.html'),
            filename: 'index.html',
            title: 'GB__home__work', 
            nameshop: '<h1>MyShop</h1>',
            blocproduct: '<div class="poducts"></div>',
            header: '<header class="headers"></header>'
        }),
        new miniCss({
            filename: 'style.css',
        })
    ],

}