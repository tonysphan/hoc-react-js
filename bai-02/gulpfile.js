global.Promise   = require('promise');

var gulp         = require('gulp');
var react        = require('gulp-react');
var clean        = require('gulp-clean');
var plumber      = require('gulp-plumber');
var concat       = require('gulp-concat');
var browserify   = require('gulp-browserify');
var autoprefixer = require('gulp-autoprefixer');

var $src = 'source';
var $dst = 'build';

gulp.task('clean', function(){
	return gulp.src( $dst, { read: false } )
		.pipe( plumber() )
		.pipe( clean() )
	;
});

gulp.task('copy', ['clean'], function() {
	return gulp.src( [
		$src + '/index.html',
		$src + '/**/*.js'
	])
		.pipe( plumber() )
		.pipe( gulp.dest( $dst ) );
});

gulp.task('copy-img', ['clean'], function() {
	return gulp.src( [
		$src + '/img/*'
	])
		.pipe( plumber() )
		.pipe( gulp.dest( $dst + '/img' ) );
});

gulp.task('copy-fonts', ['clean'], function() {
	return gulp.src( [
		$src + '/fonts/**/*'
	])
		.pipe( plumber() )
		.pipe( gulp.dest( $dst + '/fonts' ) );
});

gulp.task('css', ['clean'], function() {
	return gulp.src( [
		$src + '/css/font-roboto.css',
		$src + '/css/bootstrap.min.css',
		$src + '/css/font-awesome.min.css',
		$src + '/css/default.css'
	])
		.pipe( plumber() )
		.pipe( autoprefixer() )
		.pipe( concat('index.css') )
		.pipe( gulp.dest( $dst + '/css' ) );
});

gulp.task('jsx', ['clean'], function() {
	return gulp.src( $src + '/**/*.jsx' )
		.pipe( plumber() )
		.pipe( react() )
		.pipe( gulp.dest( $dst ) )
	;
});

gulp.task('browserify', ['copy', 'jsx'], function() {
	return gulp.src( $dst + '/js/index.js' )
		.pipe( plumber() )
		.pipe( browserify() )
		.pipe( gulp.dest( $dst + '/js' ) )
	;
});

gulp.task('clean-tmp', ['browserify'], function() {
	return gulp.src( [
		$dst + '/js/**/*.js',
		'!' + $dst + '/js/index.js'
	], {read: false} )
		.pipe( plumber() )
		.pipe( clean() )
	;
});

gulp.task('build', [
		'clean',
		'copy', 'copy-img', 'copy-fonts',
		'css',
		'jsx', 'browserify',
		'clean-tmp'
]);
gulp.task('default', ['build']);