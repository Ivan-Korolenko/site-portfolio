const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// const extractSass = new ExtractTextPlugin({
//     filename: "style.css"
// })

module.exports = merge(base, {
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        })
      ],
    optimization: {
        noEmitOnErrors: true,
        minimize: true,
        // minimizer: [
        //     new UglifyJsPlugin({
        //         beautify: false,
        //         comments: false,
        //         compress: {
        //             sequences: true,
        //             booleans: true,
        //             loops: true,
        //             unused: true,
        //             warnings: false,
        //             drop_console: true,
        //             safari10: true,
        //             ie8: true,
        //             dead_code: true,
        //         },
        //         output: {
        //           comments: false
        //         }
        //     }),
        // ],
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
                },
                default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
                }
            }
        }
    }
})