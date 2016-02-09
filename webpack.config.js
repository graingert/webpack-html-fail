const webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: './src/htmlFail',
    module: {
        loaders: [
            {test: /\.html$/, loader: 'html'},
        ],
    },
    output: {
        path: "dist",
        publicPath: "/",
        filename: "[name]-[chunkhash].bundle.js",
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
