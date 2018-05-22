var webpack = require("webpack");
var path = require("path");

module.exports = {
	// 页面入口
	entry:[
		'./app.js'
	],
	// 入口文件配置
	output: {
		path: path.resolve(__dirname,'./build'),
		filename:'bundle.js'
	},
	module: {
		// 加载器配置
		rules:[  //loader不支持了
			{ test: /\.css$/,loader: 'style-loader!css-loader'},
			{ test: /\.scss$/,loader: 'style-loader!css-loader!sass-loader'},
			{ test: /\.(png|jpg)$/,loader: 'url-loader?limit=8192' }
		]
	}
}