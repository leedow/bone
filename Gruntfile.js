module.exports = function(grunt){
	grunt.initConfig({		
		uglify: {
			build: {
				src: ['js/bone.js',
					'js/placeholder.hack.js',
					'js/verify.js',
					'js/count_widget.js',
					'js/dialog.js',
					'js/notice_widget.js',
					'js/score_widget.js'
				],
				dest: 'D:/sae/wwwroot/source/Earth/js/bone.min.js'
			},
			build2: {
				src: ['js/iscroll-infinite.js'],
				dest: 'iscroll.min.js'
			}
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
	    		tasks: ['less:dev', 'uglify:build', 'uglify:build2']
	    	}
	    },	
	    less: {
	    	dev: {
	    		options: {
	    			compress: true
	    		},
	    		files: {
	    			'D:/sae/wwwroot/source/Earth/source/bone.min.css' : 'less/main.less'
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