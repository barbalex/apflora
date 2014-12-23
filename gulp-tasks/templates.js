/*jslint node: true, browser: true, nomen: true, todo: true */
'use strict';

var gulp         = require('gulp'),
    handlebars   = require('gulp-handlebars'),
    defineModule = require('gulp-define-module');

gulp.task('templates', function () {
    return gulp.src('src/templatesDev/*.hbs')
        .pipe(handlebars())
        .pipe(defineModule('node'))
        .pipe(gulp.dest('./src/templates'));
});