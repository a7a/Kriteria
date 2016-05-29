'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var browserify = require('browserify');
var soruce = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var Jasmine = require('jasmine');
var SpecReporter = require('jasmine-spec-reporter');

gulp.task('js-clean', function() {
  return del('dist/js/**/*');
});
gulp.task('clean-all', function(callback) {
  return runSequence(['js-clean'], callback);
});

gulp.task('js-dist', function() {
  return gulp.src('src/js/*.js')
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe(gulp.dest('dist/js/node'));
});
gulp.task('js-dist-lib', function() {
  return gulp.src('src/js/lib/*.js')
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe(gulp.dest('dist/js/node/lib'));
});
gulp.task('js-dist-param', function() {
  return gulp.src(['src/js/param/*.js', 'src/js/param/*.json'])
  .pipe(gulp.dest('dist/js/node/param'));
});
gulp.task('js-dist-min', function() {
  return gulp.src('dist/js/node/*.js')
  .pipe($.uglify())
  .pipe(gulp.dest('dist/js/node/min'));
});
gulp.task('js-lib-dist-min', function() {
  return gulp.src('dist/js/node/lib/*.js')
  .pipe($.uglify())
  .pipe(gulp.dest('dist/js/node/min/lib'));
});
gulp.task('js-param-dist-min', function() {
  return gulp.src('dist/js/node/param/*.js')
  .pipe($.uglify())
  .pipe(gulp.dest('dist/js/node/min/param'));
});
gulp.task('js-min-browser', function() {
  return browserify({ entries: 'dist/js/node/Kriteria.js' })
  .bundle()
  .pipe(soruce('Kriteria.js'))
  .pipe(gulp.dest('dist/js/browser'));
});
gulp.task('js-browser-min', function() {
  return gulp.src('dist/js/browser/*.js')
  .pipe($.uglify())
  .pipe(gulp.dest('dist/js/browser/min'));
});

gulp.task('spec', function() {
  return gulp.src('spec/*.js')
  .pipe($.jasmine({
    reporter: new SpecReporter()
  }));
});

gulp.task('build-js', function(callback) {
  return runSequence(
    ['js-dist', 'js-dist-lib', 'js-dist-param'],
    ['js-dist-min', 'js-lib-dist-min', 'js-param-dist-min'],
    'js-min-browser',
    'js-browser-min',
    'spec',
    callback
  );
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean-all',
    ['build-js'],
    callback
  );
});

gulp.task('default', ['build'], function() {
  return gulp.watch([
    'src/js/*.js',
    'src/js/lib/*.js',
    'src/js/param/*.js',
    'src/js/conf/*.js',
    'spec/*.js'
  ], function() {
    runSequence(
      'build'
    );
  });
});

