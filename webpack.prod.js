const {merge} = require('webpack-merge')

const common = require('./webpack.common')

module.exports = merge(common,{
    mode : 'production',
})

// TODO OPTIMIZATION
// TODO make dist folder organized
// TODO write first test for button
