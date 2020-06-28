const {resolve,join}= require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry: './src/index.js',
    output: {
        filename:'main.js',
        path: resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {test: /\.html$/i, loader : 'html-loader'}
        ]
    },
    devServer:{
        contentBase: join(__dirname,'dist'),
        compress: true,
        port: 4000
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html',
            inject: true
        })
    ]
}