/*jslint es5: true, devel: true, node: true, indent: 2, vars: true, white: true, nomen: true */
/*global */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    appFolder: './app',
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %>',
    
    connect: {
      server: {
        options: {
          port: 8080,
          base: '<%= appFolder %>',
          //keepalive: true,
          middleware: function(connect, options) {
            return [
              // Serve static files.
              connect.static(options.base),
              // Make empty directories browsable.
              connect.directory(options.base),
            ];
          }
        }
      }
    },
    
    open : {
      dev : {
        path: 'http://127.0.0.1:8080',
        app: 'Google Chrome'
      }
    },
    
    // Task configuration.
    less: {
      options: {
        paths: ['<%= appFolder %>/styles/less']
      },
      dev: {
        src: ['<%= appFolder %>/styles/less/main.less'],
        dest: '<%= appFolder %>/styles/css/main.css'
      }
    },
    watch: {
      less: {
        files: '<%= appFolder %>/**/*.less',
        tasks: ['less:dev']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');

  // Default task.
  grunt.registerTask('develop', ['less:dev', 'connect:server', 'open:dev', 'watch']);
  grunt.registerTask('default', ['develop']);

};
