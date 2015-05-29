/**
 * Baut das Projekt für die Entwicklung
 */

'use strict';

var gulp        = require('gulp'),
    requireDir  = require('require-dir'),
    runSequence = require('run-sequence');

requireDir('../gulp-tasks', {recurse: true});

return gulp.task('dev', function () {
    runSequence(
        'templates',
        'browserify',
        ['dev_style', 'dev_src'],
        'watch'
    );
});