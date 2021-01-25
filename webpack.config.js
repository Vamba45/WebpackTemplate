const path = require('path')

const HTMLPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({}),
            new UglifyJsPlugin({})
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 4200
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    }, 
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}