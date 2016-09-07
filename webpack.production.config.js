require('shelljs/global')
const path = require('path');
const config = require('./webpack.config')
const assetsPath = path.resolve(__dirname, 'dist')

rm('-rf', assetsPath)

config.output.publicPath= ''
config.plugins = [
	new webpack.DefinePlugin({
	    'process.env': {
	        NODE_ENV: '"prod"'
	    }
	})
].concat(config.plugins)

module.exports = config;
