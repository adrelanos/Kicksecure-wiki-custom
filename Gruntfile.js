/* eslint-env node */
module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-eslint' );
	grunt.loadNpmTasks( 'grunt-stylelint' );

	grunt.initConfig( {
		eslint: {
			options: {
				cache: true
			},
			all: [
				'**/*.{js,json}',
				'!node_modules/**',
				'!vendor/**'
			]
		},
		stylelint: {
			all: [
				'**/*.css',
				'**/*.less',
				'!node_modules/**',
				'!vendor/**'
			]
		}
	} );

	grunt.registerTask( 'test', [ 'eslint', 'stylelint' ] );
}
