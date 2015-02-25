/*jslint node: true, browser: true, nomen: true, todo: true */
'use strict';

var gulp = require('gulp');

gulp.task('prod_copy_src_lib_to_dist', function () {
    return gulp.src('src/lib/**/*')
        .pipe(gulp.dest('dist/src/lib'));
});