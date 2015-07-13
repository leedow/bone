module.exports = function(grunt){
	grunt.initConfig({		
		uglify: {
			build: {
				src: [],
				dest: 'bone.min.js'
			}/*,
			build2: {
				src: ['js/iscroll-lite.js'],
				dest: 'iscroll.min.js'
			}*/
	    },
	    watch: {
	    	client: {
	    		files: ['*', 'demos/*', 'js/*', 'less/*'],
	    		options: {
	    			livereload: true
	    		}
	    	},
	    	compress: {
	    		files: ['less/*.less', 'js/*'],
	    		tasks: ['less:dev', 'uglify:build']
	    	}
	    },	
	    less: {
	    	dev: {
	    		options: {
	    			compress: true
	    		},
	    		files: {
	    			'bone.min.css' : 'less/main.less'
	    		}
	    	}
	    }
    }) 
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['uglify', 'less']);
	grunt.registerTask('live', ['watch']);
}