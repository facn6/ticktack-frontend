const path = require('path');

require('dotenv').config({ path: '../.env' });

module.exports = {
    apps: [
        {
            name: process.env.APP_NAME,
            script: path.resolve(__dirname, '..', 'server/index.js'),
            out_file: path.resolve(__dirname, '..', 'logs', 'output-pm2.log'),
            error_file: path.resolve(__dirname, '..', 'logs', 'error-pm2.log'),
            merge_logs: true,
            autorestart: true,
            min_uptime: 10000,
            max_restarts: 5,
            watch: false,
        },
    ],
};
