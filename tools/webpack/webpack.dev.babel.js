import merge from 'webpack-merge';

// HELPERS

import { PATH_SRC } from '../paths';

// WEBPACK CONFIG

import browserConfig from './webpack.browser.babel';

module.exports = merge(browserConfig, {
    mode: 'development',
    devServer: {
        contentBase: PATH_SRC,
        host: '0.0.0.0',
        port: 8000,
        disableHostCheck: true,
        historyApiFallback: true,
        watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/,
        },
    },
});
