var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: 'js/[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, "./src/"),
				exclude: path.resolve(__dirname, "./node_modules/"),
				query: {
					presets: ['env']
				}
			},
			// {
			// 	test: /\.html$/,
			// 	use: [
			// 		'html-loader'
			// 	]
			// },
			{
				test: /\.ejs$/,
				use: [
					'ejs-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?importLoaders=1',
					'postcss-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'less-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			// {
			// 	test:/\.(png|jpg|gif|svg)/,
			// 	loader: 'file-loader',
			// 	query: {
			// 		name: 'assets/[name]-[hash:5].[ext]'
			// 	}
			// },
			// {
			// 	test:/\.(png|jpg|gif|svg)/,
			// 	loader: 'url-loader',
			// 	query: {
			// 		limit: 15000,
			// 		name: 'assets/[name]-[hash:5].[ext]'
			// 	}
			// },
			{
				test:/\.(png|jpg|gif|svg)/,
				use: [
					'url-loader?limit=10&name=assets/[name]-[hash:5].[ext]',
					'image-webpack-loader'
				]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body'
		})
	]
};