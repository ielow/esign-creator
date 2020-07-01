const {resolve,join}= require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports={
    mode:'production',
    entry: './src/index.js',
    output: {
        filename:'main.js',
        path: resolve( __dirname, 'dist' )
    },
    module:{
        rules:[
            {test: /\.html$/i, loader : 'html-loader'}
        ]
    },
    devServer:{
        open: true,
        port: 3000,
        clientLogLevel: 'error'
    },
    plugins:[
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
        new htmlWebpackPlugin({
            template: './src/index.html',
            inject: true
        })
    ]
}