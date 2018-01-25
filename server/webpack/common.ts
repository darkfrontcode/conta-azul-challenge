import * as path 					from 'path'
import * as webpack 				from 'webpack'
import * as copy 					from 'copy-webpack-plugin'
import * as ExtractTextPlugin		from 'extract-text-webpack-plugin'

export default new Object({

	output: {

		path: path.join(__dirname, '../../public'),
		filename: "[name].js",
		chunkFilename: '[id].chunk.js'

	},

	resolve: {

		alias: {

			models: path.join(__dirname, '../express/models'),
			builders: path.join(__dirname, '../express/builders'),
			vehicles: path.join(__dirname, '../express/vehicles'),
			api: path.join(__dirname, '../express/controllers/api')

		},

		extensions: [ '.js', '.ts', '.pug', '.styl']

	},

	module: {
		
		exprContextCritical: false,

		rules: [
			
			{
				test: /\.ts$/,
				use: [
					'awesome-typescript-loader', 
					'angular-router-loader',
					'angular2-template-loader'
				]
			},
			{
				include: /\.pug/,
				use: [
					'raw-loader',
					'pug-html-loader'
				]
			},
			{
				test: /\.styl$/,
				use: ['to-string-loader'].concat(
					<any>ExtractTextPlugin.extract({
						fallback: "style-loader",
						use: [
							{ 
								loader: 'css-loader', 
								options: { 
									sourceMap:true,
									importLoaders: 1,
									localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
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

		new webpack.optimize.CommonsChunkPlugin(
			new Object({ name: ['main', 'vendor', 'polyfills'] })
		),

		new copy([
			{
				from: path.join(__dirname, '../assets'),
				to: path.join(__dirname, '../../public/assets')
			}
		]),

		new ExtractTextPlugin("[name].css"),

	]
})