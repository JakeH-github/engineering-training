const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/script.js'),
    },
    module: {
        rules: [
            {
                test: [/\.js$/],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            "@babel/preset-env",
                            ["@babel/preset-react", {"runtime": "automatic"}]
                        ]
                    }
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'script.js',
    },
};
