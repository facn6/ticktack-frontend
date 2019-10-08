/* eslint import/no-extraneous-dependencies: ["error", { devDependencies: true }] */

import path from 'path';
import merge from 'webpack-merge';

// PLUGINS

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// HELPERS

import { PATH_SRC } from '../paths';
import { cssLoader, postcssLoader, sassLoader, fileLoader, styleLoader } from '../loaders';

// WEBPACK CONFIG

import commonConfig from './webpack.common.babel';

module.exports = merge(commonConfig, {
    target: 'web',
    entry: [
        '@babel/polyfill',
        path.resolve(PATH_SRC, 'client.js'),
    ],
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [styleLoader(), cssLoader(), postcssLoader()],
            },
            {
                test: /\.(scss|sass)$/,
                include: [path.resolve(PATH_SRC, 'theme', 'main.scss')],
                use: [MiniCssExtractPlugin.loader, cssLoader(), postcssLoader(), sassLoader()],
            },
            {
                test: /\.(scss|sass)$/,
                exclude: [path.resolve(PATH_SRC, 'theme', 'main.scss')],
                use: [styleLoader(), cssLoader({ modules: true }), postcssLoader(), sassLoader()],
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg|gif|png|jpg|jpeg|webp)$/,
                use: [fileLoader()],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunksSortMode: 'dependency',
            inject: 'body',
            template: path.resolve(PATH_SRC, 'index.ejs'),
            templateParameters: {
                head: null,
                app: null,
                loadableStateTag: null,
                initialStateTag: null,
            },
        }),

        new HtmlWebpackPlugin({
            chunksSortMode: 'dependency',
            inject: 'body',
            filename: 'index.ejs',
            template: `!!raw-loader!${path.resolve(PATH_SRC, 'index.ejs')}`,
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[name].[hash].chunk.css',
        }),
    ],
});
