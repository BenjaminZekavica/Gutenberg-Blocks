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
          "../js/func.js": "js/func.js"
        }
      }
    },
    watch:{
        scripts: {
            files : ['/js/*.js'],
            tasks: ['babel']
        }
    }

  });
  
  grunt.registerTask('default', ['babel']);
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-esnext');

};
