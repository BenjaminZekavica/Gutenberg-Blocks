module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      "babel": {
        options: {
          sourceMap: true
        },
        dist: {
          files: {
            "../js/func.js" : "js/func.js"
          }
        }
      },


      watch:{ 
          css: {
            files: ['scss/*.scss'],
            tasks: ['sass','autoprefixer'],
          },

          js: {
              files : ['js/*.js'],
              tasks: ['babel']
          }
      }, 

      autoprefixer: {
          options: {
            browsers: ['last 20 versions', 'ie 8', 'ie 9'], 
            map: true
          },
          single_file: {
            src: '../css/style.css',
            dest: '../css/style.css'
          }
      },
  
  
      sass: {
          dist: {
            options: {
              style: 'compressed',
              sourcemap: true,
              cacheLocation: 'scss/.sass-cache'
            },
            files: {                         // Dictionary of files
              '../css/style.css': 'scss/style.scss'      // 'destination': 'source'
            }
          },
      },
        // concat: {
        //       options: {
        //           separator: ';',
        //       },
        //       dist: {
        //           src: ['js/func.js', 'js/'],
        //           dest: 'js/funcConcat.js',
        //       },
        //   },
        //   uglify: {
        //       javas: {
        //           files: {
        //               '../js/func.js': ['js/funcConcat.js']
  
        //           }
        //       }
        //   },
  });


  grunt.registerTask('default', ['watch']);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-esnext');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-jest');
};
