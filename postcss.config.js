module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-cssnext': {
			warnForDuplicates: false
		},
		'postcss-simple-vars': {},
		'cssnano': {
			reduceIdents: false
		}
	}
}