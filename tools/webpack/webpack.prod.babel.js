import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

// PLUGINS

import CompressionPlugin from 'compression-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// CONFIG

import { srcPath } from '../paths';

// WEBPACK CONFIG

const commonConfig = require('./webpack.common.babel');

module.exports = merge(commonConfig, {
    entry: [path.resolve(srcPath, 'client.js')],
    plugins: [
        new webpack.HashedModuleIdsPlugin(),

        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.jsx?$|\.css$|\.(scss|sass)$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),

        new ImageminPlugin({ pngquant: { quality: '95-100' } }),

        new BundleAnalyzerPlugin({
            analyzerMode: process.env.ANALYZE ? 'server' : 'disabled'
        })
    ]
});
