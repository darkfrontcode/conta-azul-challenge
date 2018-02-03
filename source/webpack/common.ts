import * as path 					from 'path'
import * as webpack 				from 'webpack'
import * as copy 					from 'copy-webpack-plugin'

export default new Object({

	output: {

		path: path.join(__dirname, '../../build'),
		filename: "[name].js",
		chunkFilename: '[id].chunk.js'

	},

	resolve: {

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
			
		]
	},

	plugins: [

		new webpack.optimize.CommonsChunkPlugin(
			new Object({ name: ['main', 'vendor', 'polyfills'] })
		),

		new copy([
			{
				from: path.join(__dirname, '../assets'),
				to: path.join(__dirname, '../../build/assets')
			},
			{
				from: path.join(__dirname, '../vendors'),
				to: path.join(__dirname, '../../build/vendors')
			}
		]),

	]
})