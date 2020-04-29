const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
            {
            test: /\.(mp3)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'sounds',
                            name: '[name].[ext]',
                        },
                    },
                ],
           },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {from:'src/images',to:'images'},
            {from:'index.html',to:'index.html'},
            {from:'src/sounds',to:'sounds'}
        ]),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};
