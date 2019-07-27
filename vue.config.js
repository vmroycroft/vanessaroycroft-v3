module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/styles/theme.scss";`
			},
			postcss: {
				plugins: [require('rucksack-css')(), require('autoprefixer')()]
				// plugins: [require('rucksack-css')(), require('autoprefixer')({ grid: true })]
			}
		}
	}
};
