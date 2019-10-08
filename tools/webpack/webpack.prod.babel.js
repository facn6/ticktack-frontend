import webpack from 'webpack';
import merge from 'webpack-merge';

// PLUGINS

import CompressionPlugin from 'compression-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// WEBPACK CONFIG

import browserConfig from './webpack.browser.babel';

module.exports = merge(browserConfig, {
    mode: 'production',
    plugins: [
        new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(jsx?|css|scss|sass|html)$/,
        }),

        new BundleAnalyzerPlugin({
            analyzerMode: process.env.ANALYZE ? 'server' : 'disabled',
        }),
    ],
});
