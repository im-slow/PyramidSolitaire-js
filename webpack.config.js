const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const PUBLIC_PATH = 'https://solitaire104.web.app/';

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader",
                            options: { minimize: true }
                        }
                    ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: 'src/images/',
                        publicPath: 'src/img/',
                        esModule: false
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: './src/images'
                        }
                    }
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/images', to: 'src/images'},
            ],
        }),
        new WebpackPwaManifest({
            name: 'Solitaire104',
            short_name: 'Solitaire104',
            description: 'Solitaire104 by im_sloww',
            background_color: '#286e26',
            theme_color: '#286e26',
            'theme-color': '#286e26',
            start_url: '/',
            icons: [
                {
                    src: "./src/images/favicon.ico",
                    sizes: [96, 128, 192, 256, 384, 512],
                }
            ]
        }),
        new SWPrecacheWebpackPlugin(
            {
                cacheId: "solitaire104-cache",//'my-domain-cache-id',
                dontCacheBustUrlsMatching: /\.\w{8}\./,
                filename: 'service-worker.js',
                minify: true,
                navigateFallback: PUBLIC_PATH, //+ 'index.html',
                staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
            }
        ),
    ]
}
