let path = require('path') 
let htmlWebpackPlugin = require('html-webpack-plugin')
let cleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        hello: './src/hello.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
} 
 