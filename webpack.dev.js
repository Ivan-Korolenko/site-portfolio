const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

// const extractSass = new ExtractTextPlugin({
//     filename: "style.css"
// })

module.exports = merge(base, {
    devtool: 'inline-source-map',
    watchOptions: {
        poll: true
    }
})