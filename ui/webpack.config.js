let path = require("path");
let HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

// This is the webpack configuration for development.

let config = {
    entry: {
        app: "./app/main.js",
    },
    output: {
        // Output the single bundle. This bundle then is served from ./app/index.html
        path: path.resolve(__dirname, "./app"),
        publicPath: "/",
        filename: "bundle.js",
    },
    devServer: {
        // Create a devlopment server which serves the index.html file.
        contentBase: path.join(__dirname, "app"),
        watchContentBase: true,
        historyApiFallback: true,
        publicPath: "/",
    },
    mode: "development",
    devtool: "inline-source-map",

    plugins: [
        // Used for caching the build content to make the build faster on next time build.
        new HardSourceWebpackPlugin(),
    ],

    module: {
        rules: [
            {
                test: /.jsx?$/,
                include: [
                    path.resolve(__dirname, "./app"),
                ],
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015", "react", "stage-1", "react-hmre"],
                    },
                },
            },
            {
                test: /\.(gif|svg|jpg|png|otf|woff)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]",
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader?localIdentName=[local]--[hash:base64:5]&modules=true",
                    "less-loader?modules=true",
                ],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
        ],
    },
};

module.exports = config;
