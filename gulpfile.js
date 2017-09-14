//variables
var gulp = require('gulp'),
	concat = require('gulp-concat');
	rename = require("gulp-rename");
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	order = require("gulp-order"),
	browserSync = require('browser-sync').create(),
	reloadBrowser = browserSync.reload;


//TASKS

//compile sass
gulp.task('compile-sass', function(){
	gulp.src('app/scss/master-scss.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(rename('master-css.css'))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());

});

//min-css
gulp.task('min-css', function(){
	gulp.src('app/css/master-css.css')
		.pipe(cleanCSS())
		.pipe(rename('master-css-min.css'))
		.pipe(gulp.dest('app/css'));
});

//concat-js
gulp.task('concat-js', function(){
	gulp.src('app/js-dev/**/*.js')
		.pipe(order([
			'plugins/picturefill.js',
			'**/*.js'
		]))
		.pipe(concat('master-js.js'))
		.pipe(gulp.dest('app/js-compiled'))
		
});

//min-js
gulp.task('min-js', function(){
	gulp.src('app/js-compiled/master-js.js')
		.pipe(uglify())
		.pipe(rename('master-js-min.js'))
		.pipe(gulp.dest('app/js-compiled'))
		.pipe(browserSync.stream());
});

//watch
gulp.task('watch', function(){
	browserSync.init({
	    server: {
	    	
	      baseDir: "app/"
	    }
  	});
	gulp.watch('app/js-dev/**/*.js', ['concat-js']);
	gulp.watch('app/js-compiled/master-js.js', ['min-js'])
	gulp.watch('app/scss/**/*.scss', ['compile-sass'])
	gulp.watch('app/css/master-css.css', ['min-css'])
	gulp.watch('app/*.html').on('change', reloadBrowser);
});


//default task
gulp.task('default',['watch']);
