var gulp            = require('gulp');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var cssmin          = require('gulp-cssmin');
var uglify          = require('gulp-uglify');
var rename          = require('gulp-rename');
var concat          = require('gulp-concat');
var filter          = require('gulp-filter');

var paths = {
    'scss' : './src/styles/',
    'css' : './dist/styles/',
    'js' : './dist/js'
}


/*
 * scssのコンパイル
 */

gulp.task('scss',function(){
    gulp.src([
        paths.scss + 'styles.scss',
    ])
    .pipe(sass())
    .pipe(autoprefixer('last 2 version'))
    .pipe(cssmin())
    // .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest(paths.css));
});


/*
 * 自動監視
 */

gulp.task('watch', ['scss'], function(){
    gulp.watch(paths.scss + '*.scss', ['scss']);
});


/*
 * ライブラリのassets出力
 */

 gulp.task('libs', function(){
     gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/popper.js/dist/umd/popper.js',
        './node_modules/bootstrap/dist/js/bootstrap.js'
	])
    .pipe(concat('libs.js'))
	.pipe(uglify())
    .pipe(rename('libs.min.js'))
	.pipe(gulp.dest(paths.js));

    // gulp.src([
    //     './node_modules/fullpage.js/dist/jquery.fullpage.css'
    // ])
    // .pipe(cssmin())
    // .pipe(rename('libs.min.css'))
    // .pipe(gulp.dest(paths.css));
 });
