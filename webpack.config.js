const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill','./src/index.jsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash].js"
    },
    devServer: {
        port:3000,
        historyApiFallback:true
    },
    plugins: [
        new HTMLWebPackPlugin({template: './src/index.html'}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules:[
            {
                test:/\.(css|less)$/,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.(jpg|jpeg|png|svg)/,
                use:['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react","@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ]
    }

}