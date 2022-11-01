const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry : "./src/app.js",
    output:{
        path: path.join(__dirname,"dist"),
        filename: "bundle.js"
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".js",".jsx"]
    },
    module : {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test :/\.(css)$/,
                use : ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            minify: false,
        }),
    ]
}