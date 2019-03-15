module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      build: {
        // src: 'src/<%= pkg.name %>.js',
        src: 'build/bundle.js',
        dest: 'build/bundle.min.js'
      }
    },
    browserify: {
      build: {
        src: 'src/objects.js',
        dest: 'build/bundle.js'
      }
    }
  });

  // Load the plugin that provides the "node-browserify" task.
  grunt.loadNpmTasks('grunt-browserify');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['browserify', 'uglify']);

};
