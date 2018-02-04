import * as path 					from 'path'
import * as webpack 				from 'webpack'
import * as merge 					from 'webpack-merge'
import common 						from './common'

export default merge(common, <any>{

	devtool: "cheap-module-eval-source-map",

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