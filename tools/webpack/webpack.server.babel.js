/* eslint import/no-extraneous-dependencies: ["error", { devDependencies: true }] */

import path from 'path';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

// HELPERS

import { PATH_SRC, PATH_DIST, PATH_SERVER } from '../paths';
import { cssLoaderLocals, sassLoader, postcssLoader, fileLoader } from '../loaders';

// WEBPACK CONFIG

import commonConfig from './webpack.common.babel';

module.exports = merge(commonConfig, {
    mode: 'none',
    target: 'node',
    entry: [
        '@babel/polyfill',
        path.resolve(PATH_SERVER, 'server.js'),
    ],
    output: {
        filename: 'server.js',
        library: 'app',
        libraryTarget: 'commonjs2',
        publicPath: PATH_DIST,
    },
    resolve: {
        symlinks: true,
    },
    externals: [
        nodeExternals(),
    ],
    module: {
        rules: [
            {
                test: /\.(woff|woff2|ttf|eot|svg|gif|png|jpg|jpeg|webp)$/,
                use: [fileLoader({ emitFile: false })],
            },
            {
                test: /\.(css|scss|sass)$/,
                include: [path.resolve(PATH_SRC, 'theme', 'main.scss')],
                use: [cssLoaderLocals(), postcssLoader(), sassLoader()],
            },
            {
                test: /\.(scss|sass)$/,
                exclude: [path.resolve(PATH_SRC, 'theme', 'main.scss')],
                use: [cssLoaderLocals({ modules: true }), postcssLoader(), sassLoader()],
            },
        ],
    },
    optimization: {
        minimize: false,
        splitChunks: false,
    },
    node: {
        __dirname: true,
        __filename: true,
    },
});
