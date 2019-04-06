const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');

//compile scss into css
function style(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(browserSync.stream())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./style'));
}

// function minifyCss() {
//     // Folder with files to minify
//     return gulp.src('./styles/*.css')
//     //The method pipe() allow you to chain multiple tasks together 
//     //I execute the task to minify the files
//    .pipe(cleanCSS())
//    //I define the destination of the minified files with the method dest
//    .pipe(gulp.dest('./style'));
// };

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

function copy() {
    return gulp.src('*.html').pipe(gulp.dest('./dist/'))
      .pipe(gulp.src('./img/**/*')).pipe(gulp.dest('./dist/img/'))
      .pipe(gulp.src('./js/**/*')).pipe(gulp.dest('./dist/js/'))
      .pipe(gulp.src('./style/**/*')).pipe(gulp.dest('./dist/style/'));
}

exports.style = style;
exports.watch = watch;
exports.build = gulp.series(style, copy);
// exports.minifyCss = minifyCss;
