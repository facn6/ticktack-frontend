/* eslint import/no-extraneous-dependencies: ["error", { devDependencies: true }] */

import path from 'path';
import webpack from 'webpack';
import dotenv from 'dotenv';

// PLUGINS

import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';

// HELPERS

import { PATH_DIST, PATH_ROOT, PATH_NPM, PATH_SRC } from '../paths';

// CONFIG

dotenv.config({ path: path.resolve(PATH_ROOT, '.env') });

// WEBPACK CONFIG

module.exports = {
    output: {
        path: PATH_DIST,
    },
    resolve: {
        alias: {
            '~': PATH_NPM,
            '@': PATH_SRC,
        },
        descriptionFiles: ['package.json'],
        extensions: ['.js', '.jsx', '.json'],
        modules: [PATH_NPM, PATH_SRC],
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: [PATH_NPM],
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            failOnError: true,
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                include: /node_modules\/(?=(dom7|ssr-window|swiper)\/).*/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                        },
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: [PATH_NPM],
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [
        new webpack.EnvironmentPlugin({ NODE_ENV: JSON.stringify(process.env.NODE_ENV) }),
        new webpack.EnvironmentPlugin(['PORT', 'SSL_PORT', 'API_URL']),

        new FriendlyErrorsWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    node: {
        fs: 'empty',
        vm: 'empty',
        net: 'empty',
        tls: 'empty',
    },
};
