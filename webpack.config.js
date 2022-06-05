const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const extractSass = new MiniCssExtractPlugin({
	filename: '[name].css'
});

const config = {
	entry: [
		'./src/js/index.js',
		'./src/scss/main.scss',
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					// 'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		extractSass
	]
};

module.exports = config;
