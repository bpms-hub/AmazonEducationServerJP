var gulp = require("gulp");
var del = require('del');
var browserify = require('browserify');
var sourcemaps = require('gulp-sourcemaps');

var uglify = require('gulp-uglify');
var glob = require('glob')
var $ = require('gulp-load-plugins')();
var source = require('vinyl-source-stream')
var buff = require('vinyl-buffer')

var exec = require('child_process').exec;
var babel = require('gulp-babel');
var babelify = require('babelify')
var gzip = require('gulp-gzip');


var paths = {
  client: 'src/app.js',
  server: ['src/server.js','src/**/*.js','!src/app.js'],
  images: 'assets/img/**/*',
  templates: 'templates/*.*',
  data: 'src/data/**/*',
  toClean: ['.tmp', 'dist/*', '!dist/.git'],
  dist:'dist'
};

gulp.task('run',function(){
});

gulp.task("default",['scripts']);

gulp.task("scripts",['client','app']);

gulp.task('client', function () {
  var files = glob.sync(paths.client);
  return browserify({
      entries: files,
      debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(buff())
    .pipe($.uglify({output:{comments: /^!|\b(copyright|license)\b|@(preserve|license|cc_on)\b/i } }))
    .pipe(gulp.dest('assets/'));
});

gulp.task('app',['babelize', 'copy:data']);

gulp.task('babelize',function(){
  return gulp.src(paths.server)
    .pipe(babel())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('copy:data',function(){
  return gulp.src(paths.data)
    .pipe(gulp.dest(paths.dist + '/data'));
});

gulp.task('clean', function() {
      del(paths.toClean, {dot: true});
});
