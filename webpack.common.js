const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry : './src/index.js',
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output : {
        filename : 'index.js',
        path : path.resolve(__dirname , 'dist'),
        clean:true
    },
    resolve : {
        alias : {
            '@' : path.resolve(__dirname,'./')
        },
        extensions : [".tsx", ".ts", ".js"],
    },
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                use : ['babel-loader'],
                exclude : /node_modules/ 
            },
            {
                test : /\.(ts|tsx)$/,
                use : ['ts-loader'],
                exclude : /node_modules/
            },
            {
                test : /\.css$/,
                use : ['style-loader' , 'css-loader']
            },
            {
                test : /\.(s[ac]ss)$/,
                use : ['style-loader' , 'css-loader','sass-loader']
            },
            {
                test : /\.(png|jp?eg|svg|webp|)$/,
                use : ['file-loader']
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : 'react typescript app',
            template : './public/index.html'
        })
    ]
}


// TODO add fonts and video