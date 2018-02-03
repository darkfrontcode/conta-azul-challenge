import * as path 					from 'path'
import * as webpack 				from 'webpack'
import * as merge 					from 'webpack-merge'
import * as HtmlWebpackPlugin		from 'html-webpack-plugin'
import common 						from './common'

export default merge(common, <any>{

	devtool: "cheap-module-eval-source-map",

	entry: {
		'polyfills': path.join(__dirname, '../angular/utils/polyfills'),
		'vendor': path.join(__dirname, '../angular/utils/vendor'),
		'main': path.join(__dirname, '../angular/plans/development'),
	},

	module: {

		rules: [
			{
				test: /\.styl$/,
				use: [
					'to-string-loader',
					'style-loader',
					{ 
						loader: 'css-loader', 
						options: { 
							sourceMap: false,
							importLoaders: 2
						}
					},
					{
						loader: 'postcss-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'stylus-loader',
						options: {
							import: [
								path.join(__dirname, '../stylus/variables'),
							]
						}
					}
				]
			}
		]

	},

	plugins: [

		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../pug/template.pug'),
			filename: 'index.html',
			favicon: path.join(__dirname, '../assets/favicon.ico'),
			inject: true
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),

	],

	devServer: {
		open: true,
		historyApiFallback: true,
		inline: true,
		hot: true,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
		},
		stats: { 
			colors: true
		}
	}

})