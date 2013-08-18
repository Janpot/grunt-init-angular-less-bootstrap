/*jslint es5: true, devel: true, node: true, indent: 2, vars: true, white: true, nomen: true */
/*global angular*/

'use strict';

// Basic template description.
exports.description = 'Generate a project with bower, less, bootstrap and angular.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Please run "npm install && bower install" afterwards';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'Gruntfile.js';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    {
      name: 'name',
      message: 'How would you like to call your app?',
      default: 'Awesome'
    },
    {
      name: 'description',
      message: 'How would you like to describe your app?',
      default: 'Built with angular, Less and Bootstrap'
    },
    {
      name: 'author',
      message: 'Who are you?',
      default: 'The man'
    }
  ], function(err, props) {

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'app/lib/**'});

    // All done!
    done();
  });

};