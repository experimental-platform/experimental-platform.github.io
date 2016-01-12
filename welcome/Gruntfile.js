module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    uglify: {
      build: {
        files: {
          'experimental.platform.min.js': [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/jquery-modal/jquery.modal.js'
          ]
        },
        options: {
          mangle: false
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'experimental.platform.min.css': ['node_modules/jquery-modal/jquery.modal.css', 'main.css']
        }
      }
    }
  });

  grunt.registerTask('buildcss', ['cssmin']);
  grunt.registerTask('buildjs', ['uglify']);
  grunt.registerTask('default', ['buildjs', 'cssmin']);
};

