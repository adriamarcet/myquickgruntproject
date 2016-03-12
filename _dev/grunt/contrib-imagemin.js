module.exports = function(grunt) {

	grunt.config('imagemin', {

		// Optimize images

		dynamic: { 								// Another target
			files: [{
				expand: true,       			// Enable dynamic expansion
				cwd: '../_img/',				// Src matches are relative to this path
				src: ['**/*.{png,jpg,gif}'],    // Actual patterns to match
				dest: '../img/'                 // Destination path prefix
			}]
		}
	});

    grunt.loadNpmTasks('grunt-contrib-imagemin');
};