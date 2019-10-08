import { merge } from 'lodash';

import { PATH_NPM, PATH_SRC } from './paths';

export function sassLoader(options = {}) {
    return {
        loader: 'sass-loader',
        options: merge({
            includePaths: [PATH_NPM, PATH_SRC],
            sourceMap: true,
        }, options),
    };
}

export function postcssLoader(options = {}) {
    return {
        loader: 'postcss-loader',
        options: merge({
            sourceMap: true,
        }, options),
    };
}

export function cssLoader(options = {}) {
    return {
        loader: 'css-loader',
        options: merge({
            importLoaders: 3,
            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            sourceMap: true,
        }, options),
    };
}

export function cssLoaderLocals(options = {}) {
    return {
        loader: 'css-loader/locals',
        options: merge({
            importLoaders: 3,
            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            sourceMap: true,
        }, options),
    };
}

export function fileLoader(options = {}) {
    return {
        loader: 'file-loader',
        options: merge({
            name: '[name].[hash].[ext]',
            outputPath: 'assets/',
        }, options),
    };
}

export function styleLoader(options = {}) {
    return {
        loader: 'style-loader',
        options: merge({}, options),
    };
}
