'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

gulp.task('js-clean', function() {
  return gulp.src('dist/js/*').pipe($.clean());
});
gulp.task('clean', function() {
  //runSequence(['js-clean', 'css-clean', 'html-clean']);
  runSequence(['js-clean']);
});

gulp.task('js-min-root', function() {
  return gulp.src('src/js/*.js')
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.uglify())
  .pipe(gulp.dest('src/js/min'));
});
gulp.task('js-min-lib', function() {
  return gulp.src('src/js/lib/*.js')
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.uglify())
  .pipe(gulp.dest('src/js/min/lib'));
});
gulp.task('js-no-min-param', function() {
  //return gulp.src(['src/js/param/*.js','src/js/param/*.json'])
  return gulp.src(['src/js/param/*.js'])
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe(gulp.dest('src/js/min/param'));
});
gulp.task('js-no-min-conf', function() {
  //return gulp.src(['src/js/conf/*.js','src/js/conf/*.json'])
  return gulp.src(['src/js/conf/*.js'])
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe(gulp.dest('src/js/min/conf'));
});
gulp.task('js-dist-browser', function() {
  return gulp.src('src/js/min/*.js')
  .pipe($.browserify())
  .pipe(gulp.dest('dist/js/browser'));
});
gulp.task('js-dist-node', function() {
  return gulp.src(['src/js/min/**/*.js','src/js/min/**/*.json'])
  .pipe(gulp.dest('dist/js/node'));
});
gulp.task('spec', function() {
  return gulp.src('spec/*.js')
  .pipe($.jasmine());
});

//gulp.task('js-browser', function() {
//  return gulp.src('src/js/min/*.js')
//        .pipe($.jshint())
//        .pipe($.jshint.reporter('jshint-stylish'))
//        .pipe($.browserify())
//        .pipe($.uglify())
//        .pipe(gulp.dest('dist/js/browser'));
//});
//gulp.task('js-node', function() {
//  return gulp.src(['src/js/min/**/*.js','src/js/min/**/*.json'])
//        .pipe($.jshint())
//        .pipe($.jshint.reporter('jshint-stylish'))
//        .pipe($.uglify())
//        .pipe(gulp.dest('dist/js/node'));
//});
//gulp.task('js-client', function() {
//  return gulp.src('./src/js/client/**/*.js')
//        .pipe($.jshint())
//        .pipe($.jshint.reporter('jshint-stylish'))
//        .pipe($.uglify())
//        .pipe(gulp.dest('dist/js/client'));
//});
gulp.task('js', function() {
  //runSequence('js-browser', 'js-node', 'js-client');
  runSequence(
    ['js-min-root', 'js-min-lib', 'js-no-min-param', 'js-no-min-conf'],
    'js-dist-browser', 'js-dist-node', 'spec'
  );
});


//gulp.task('less', function() {
//  return gulp.src('./src/less/**/*.less')
//        .pipe($.less())
//        //.pipe(autoprefixer('last 1 version', '> 1%', 'ie 8', 'ie 7', { cascade: true }))
//        .pipe($.autoprefixer('', { cascade: true }))
//        .pipe($.cssmin())
//        .pipe(gulp.dest('dist/css'));
//});


//gulp.task('html', function() {
//  return gulp.src('./src/html/**/*.html')
//        .pipe($.minifyHtml())
//        .pipe(gulp.dest('dist/html'));
//});


gulp.task('build', function() {
  runSequence(
    'clean',
    //['html', 'less', 'js']
    ['js']
  );
});


//gulp.task('browser-sync', function() {
//  browserSync({ server: { baseDir: './dist' } });
//});
//gulp.task('bs-reload', function() {
//  browserSync.reload();
//});


//gulp.task('default', ['build', 'browser-sync'], function() {
gulp.task('default', ['build'], function() {
//  gulp.watch('./src/html/**/*.html', function() {
//    runSequence('html-clean', 'html', 'bs-reload');
//  });
//  gulp.watch('./src/less/**/*.less', function() {
//    runSequence('less-clean', 'less', 'bs-reload');
//  });
  gulp.watch([
    './src/js/*.js', 'src/js/lib/*.js', 'src/js/param/*.js', 'src/js/conf/*.js',
    './spec/*.js'
  ], function() {
    //runSequence('js-clean', 'js', 'bs-reload');
    runSequence('js-clean', 'js');
  });
});

