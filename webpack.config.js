var webpack = require('webpack');
var path 	= require('path');

var SRC 	= path.resolve(__dirname,"src");
var PUBLIC	= path.resolve(__dirname,"public");

var config = {
	entry: SRC + "/index.jsx",
	output: {
		path: PUBLIC,
		filename: "scripts.js"
	},
	module: {
		loaders: [{
			include: SRC,
			loader: "babel-loader",
		}]
	}
};

module.exports = config;
