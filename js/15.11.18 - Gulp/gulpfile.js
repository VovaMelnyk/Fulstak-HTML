const gulp = require('gulp');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rigger = require('gulp-rigger');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

const path = {
    src: {
        html: './src/index.html',
        scss: './src/sass/style.scss',
        img: './src/img/*',
        fonts: './src/fonts/*',
        watchHtml: './src/html/*.html',
        watchScss: './src/sass/*.scss',
    },
    dest: {
        html: './build/',
        css: './build/css/',
        img: './build/img/',
        fonts: './build/fonts/',
    }
}

gulp.task('html', () => (
    gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.dest.html))
    .pipe(browserSync.stream())
))

gulp.task('scss', () => (
    gulp.src(path.src.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 5 versions'],
    }))
    .pipe(cssnano())
    .pipe(gulp.dest(path.dest.css))
    .pipe(browserSync.stream())
))

gulp.task('img', () => (
    gulp.src(path.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(path.dest.img))
))

gulp.task('fonts', () => (
    gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.dest.fonts))
))

gulp.task('browser-sync', () => (
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    })
));

gulp.task('watch', function () {
    gulp.watch(path.src.watchHtml, ['html']);
    gulp.watch(path.src.watchScss, ['scss']);
});


gulp.task('build', (callback) => (
    runSequence('html', 'scss', 'img', 'fonts', 'browser-sync', 'watch', callback)))