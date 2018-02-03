import * as path 					from 'path'
import * as webpack 				from 'webpack'
import * as merge 					from 'webpack-merge'
import * as ExtractTextPlugin		from 'extract-text-webpack-plugin'
import common 						from './common'


export default merge(common, <any>{

	entry: {
		'polyfills': path.join(__dirname, '../angular/polyfills'),
		'vendor': path.join(__dirname, '../angular/vendor'),
		'main': path.join(__dirname, '../angular/plans/production')
	},

	stats: {
		children: false  
	},

	module: {
		rules: [
			{
				test: /\.styl$/,
				exclude: /node_modules/,
				use: ['to-string-loader'].concat(
					<any>ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: [
							{ 
								loader: 'css-loader', 
								options: { 
									sourceMap:false,
									importLoaders: 1
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
					})
				)
			}
		]
	},

	plugins: [

		new webpack.optimize.UglifyJsPlugin({
			mangle: true,
			compress:{ warnings: false }
		}),
		new ExtractTextPlugin('[name].css'),
		new webpack.BannerPlugin("{copyright:[`DarkFrontCode`,`https://github.com/darkfrontcode/conta-azul-challenge`]}"),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	]

})