'use strict';

let gulp 		= require('gulp');
let sass 		= require('gulp-sass');
let concat 		= require('gulp-concat');
let watch 		= require('gulp-watch');
let browserSync = require('browser-sync');
let uglify 		= require('gulp-uglify');
let pump = require('pump');
let cleanCSS = require('gulp-clean-css');

// Pour le dev
gulp.task('sass', function () {
  return gulp.src('./app/scss/global.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('concatJs', function() {
  return gulp.src(['./app/javascript/jquery-3.2.1.min.js', './app/javascript/*.js'])
    .pipe(concat('production.js'))
    .pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', ['browserSync','sass','concatJs'], function(){
	gulp.watch('./app/scss/**/*.scss', ['sass']);
	gulp.watch('./app/javascript/**/*.js', ['concatJs']);
	gulp.watch('./app/*.html', browserSync.reload);
	gulp.watch('./app/js/**/*.js', browserSync.reload);
	gulp.watch('./app/css/**/*.css', browserSync.reload);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('./app/js/production.js'),
        uglify(),
        gulp.dest('./dist/js/')
    ],
    cb
  );
});

gulp.task('minify-css', () => {
  return gulp.src('./app/css/global.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('copy', function(){
	gulp.src('./app/*.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build',['compress','minify-css','copy'], function() {});