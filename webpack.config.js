const path = require('path');
const webpack = require('webpack');

const ROOT_PATH = path.join(__dirname, '.');
const TARGET_PATH = path.join(ROOT_PATH, './target-webpack');

const SHARED_SOURCE_PATH = path.join(ROOT_PATH, './src/shared');
const BROWSER_SOURCE_PATH = path.join(ROOT_PATH, './src/browser');
const SERVICE_WORKER_SOURCE_PATH = path.join(ROOT_PATH, './src/service-worker');

const config = {
    devtool: 'source-map',
    entry: {
        browser: path.join(BROWSER_SOURCE_PATH, './index.ts'),
        'service-worker': path.join(SERVICE_WORKER_SOURCE_PATH, './index.ts'),
    },
    output: {
        path: TARGET_PATH,
        filename: '[name].js',
    },
    resolve: {
        extensions: [
            // start defaults
            '.js',
            '.json',
            // end defaults
            '.ts',
        ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: [BROWSER_SOURCE_PATH],
                loader: 'awesome-typescript-loader',
                options: {
                    instance: 'browser',
                    configFileName: path.join(BROWSER_SOURCE_PATH, 'tsconfig.json'),
                },
            },
            {
                test: /\.ts$/,
                include: [SERVICE_WORKER_SOURCE_PATH],
                loader: 'awesome-typescript-loader',
                options: {
                    instance: 'service-worker',
                    configFileName: path.join(SERVICE_WORKER_SOURCE_PATH, 'tsconfig.json'),
                },
            },
        ],
    },
};

module.exports = config;
