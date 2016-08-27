'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
 return gulp.src('public/js/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('dist'));
});
