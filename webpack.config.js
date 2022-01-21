const path = require("path");
module.exports = {
    entry: "./src/index.mjs",
    output: {
        filename: "output.js",
        path: path.resolve(__dirname, "dist")
    }
}
