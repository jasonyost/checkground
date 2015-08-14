module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("package.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author %>\n" +
				" *  Under <%= pkg.license %> License\n" +
				" */\n"
		},

		// Concat definitions
		concat: {
			options: {
				banner: "<%= meta.banner %>"
			},
			dist: {
				src: ["src/jquery.checkground.js"],
				dest: "dist/jquery.checkground.js"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/jquery.checkground.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				files: {
        	"dist/jquery.checkground.min.js": ["src/jquery.checkground.js"],
					"demo/javascripts/jquery.checkground.min.js": ["src/jquery.checkground.js"]
      	}
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// CoffeeScript compilation
		coffee: {
			compile: {
				files: {
					"dist/jquery.checkground.js": "src/jquery.checkground.coffee"
				}
			}
		},

		jasmine: {
	    test: {
	      src: 'src/**/*.js'
			},
	      options: {
	        specs: 'test/spec/test.js',
	        keepRunner : false,
					vendor: [
        		'bower_components/jquery/dist/jquery.js',
        		'bower_components/jasmine-jquery/lib/jasmine-jquery.js'
      		],
					outfile: 'test/_SpecRunner.html'
	      }
    },

		// watch for changes to source
		// Better than calling grunt a million times
		// (call 'grunt watch')
		watch: {
		    files: ['src/*'],
		    tasks: ['default']
		}

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("build", ["concat", "uglify"]);
	grunt.registerTask("default", ["jshint", "jasmine", "build"]);
	grunt.registerTask("travis", ["default"]);

};
