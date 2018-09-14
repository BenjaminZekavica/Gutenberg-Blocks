module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),


        // Babel JS 
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
  

        // Compile if save File
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
  
        // Autoprefixer  
        autoprefixer: {
            options: {
              browsers: ['last 4 versions', 'ie 8', 'ie 9'], 
              map: true
            },
            single_file: {
              src: '../css/style.css',
              dest: '../css/style.css'
            }
        },
    
        // SASS 

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

    });
  
  
    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-esnext');
  };