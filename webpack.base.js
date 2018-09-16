const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

// const extractSass = new ExtractTextPlugin({
//     filename: "style.css"
// })

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        'front': './front',
        'en/front': './en/front'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 
                    ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                            "css-loader",
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: () => [require('autoprefixer')({
                                        'browsers': ['> 0.5%', 'last 4 versions']
                                    })],
                                }
                            },
                        ]
                    }),
            },
            {
                // test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                // use: extractSass.extract({
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            minimize: true
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            outputStyle: "compressed"
                        }
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        // extractSass,
        new CopyWebpackPlugin([
            { from: './images', to: '../dist/images' },
            { from: './fonts', to: '../dist/fonts' },
            { from: './index.php', to: '../dist/index.php' },
            { from: './not-supported.html', to: '../dist/not-supported.html' },
            { from: './js_off.html', to: '../dist/js_off.html' },
            { from: './particles-configs', to: '../dist/particles-configs' },

            { from: './en/images', to: '../dist/en/images' },
            { from: './en/fonts', to: '../dist/en/fonts' },
            { from: './en/index.php', to: '../dist/en/index.php' },
            { from: './en/not-supported.html', to: '../dist/en/not-supported.html' },
            { from: './en/js_off.html', to: '../dist/en/js_off.html' },
            { from: './en/particles-configs', to: '../dist/en/particles-configs' },
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery',
            "window.$" : 'jquery'
        }),
        new ExtractTextPlugin({
            filename: '[name].css' 
        })
    ],
    resolve: {
        extensions: [".js"],
        modules: [
            path.resolve(__dirname + '/src'),
            path.resolve(__dirname + '/node_modules')
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
}