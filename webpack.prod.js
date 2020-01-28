const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
        }),
        new HtmlWebpackPlugin({
            inject: 'head',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                minifyCSS: true,
                minifyJS: true,
                removeAttributeQuotes: true,
            },
            filename: 'en/index.html',
            template: 'en/index.html',
            chunks: ['redirect', 'en/index']
        }),
        new HtmlWebpackPlugin({
            inject: 'head',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                minifyCSS: true,
                minifyJS: true,
                removeAttributeQuotes: true,
            },
            filename: 'ru/index.html',
            template: 'ru/index.html',
            chunks: ['redirect', 'index']
        })
      ],
    optimization: {
        noEmitOnErrors: true,
        minimize: true,
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