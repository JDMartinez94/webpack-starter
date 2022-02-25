
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtract    = require("mini-css-extract-plugin");
const CopyPlugin        = require("copy-webpack-plugin");

module.exports = {
    mode: "development",

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /style.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /style.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'

            }
        ]
    },

    optimization: {

    },

    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi Webpack App',            
            template: 'src/index.html'
        }),

        new MiniCssExtract({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns:
            [ {from: 'src/assets/', to: 'assets/' }]
        })
    ],

}