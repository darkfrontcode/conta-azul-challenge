import * as path 					from 'path'
import * as webpack 				from 'webpack'
import * as merge 					from 'webpack-merge'
import common 						from './common'
import { GLOBAL }					from '../express/global'


export default merge(common, <any>{

	entry: {
		'polyfills': path.join(__dirname, '../angular/polyfills'),
		'vendor': path.join(__dirname, '../angular/vendor'),
		'main': path.join(__dirname, '../angular/plans/production')
	},

	plugins: [

		new webpack.optimize.UglifyJsPlugin({
			mangle: false,
			compress:{ warnings: true }
		}),
		new webpack.BannerPlugin("{copyright:[`Dark Front Code`,`https://github.com/darkfrontcode`]}"),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	]

})