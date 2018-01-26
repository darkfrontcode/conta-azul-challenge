import * as path 					from 'path'
import * as webpack 				from 'webpack'
import * as merge 					from 'webpack-merge'
import * as HtmlWebpackPlugin		from 'html-webpack-plugin'
import common 						from './common'
import { GLOBAL }					from '../express/global'

const OpenBrowserPlugin 	= require('open-browser-webpack-plugin')

export default merge(common, <any>{

	devtool: "cheap-module-eval-source-map",

	entry: {
		'polyfills': path.join(__dirname, '../angular/polyfills'),
		'vendor': path.join(__dirname, '../angular/vendor'),
		'main': [
			'webpack-hot-middleware/client?reload=true',
			path.join(__dirname, '../angular/plans/development')
		]
	},
	
	output: {

		publicPath: `http://localhost:${ GLOBAL.PORT }/`

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
								path.join(__dirname, '../stylus/variables')
							]
						}
					}
				]
			}
		]

	},

	plugins: [

		new HtmlWebpackPlugin({
			template: path.join(__dirname, "../express/views/layout.pug"),
			filename: 'index.html',
			inject: false
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new OpenBrowserPlugin({ url: `http://localhost:${ GLOBAL.PORT }/` }),

	]

})