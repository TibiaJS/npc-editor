var del = require('del'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    preprocess = require('gulp-preprocess'),
    sourcemaps = require('gulp-sourcemaps'),
    stylus = require('gulp-stylus');

gulp.task('clean', function (cb) {
    del(['public'], cb);
});

gulp.task('scripts', function () {
    gulp.src('scripts/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'));
});

gulp.task('stylus', function () {
    gulp.src('stylesheets/main.styl')
        .pipe(stylus())
        .pipe(concat('stylesheets.css'))
        .pipe(gulp.dest('./public'));
});

gulp.task('templates', function () {
    gulp.src('templates/index.html')
        .pipe(preprocess())
        .pipe(gulp.dest('./public'));
});

gulp.task('default', ['scripts', 'stylus', 'templates']);