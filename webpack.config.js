const path = require ('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, './dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        port: 9000,
        compress: true
    },
    plugins: [
		new NodePolyfillPlugin()
	],
}