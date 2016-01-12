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
    }
  });

  grunt.registerTask('buildjs', ['uglify']);
  grunt.registerTask('default', ['buildjs']);
};

