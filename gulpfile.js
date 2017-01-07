
'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var textractor = require('textractor');
var cleanCSS = require('gulp-clean-css');
var config = require('./config/config');

gulp.task('minify', function () {
    gulp.src('public/css/app.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('default', ['minify'], function() {
  return textractor({
    'input-dir': '.',
    'output-dir': './locales',
    locales: config.locales,
    exclude: /(node_modules|test|public|dist|locales|\.git)/,
    'join-existing': false,
    keyword: ['__', '__n'],
    parsers: {
      '.js': 'javascript',
      '.jade': 'jade'
    }
  });
});
