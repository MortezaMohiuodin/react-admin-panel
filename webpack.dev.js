const path = require('path')
const { merge } = require('webpack-merge');

const common = require('./webpack.common')

module.exports = merge(common,{
    mode : 'development',
    devServer : {
        port : 3000,
        static : {
            directory : path.join(__dirname,'public'),
        }
    }
})