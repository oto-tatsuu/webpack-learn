const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "output.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require("postcss-preset-env")
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({title:"plugin test",template:"index.html"})]
}
