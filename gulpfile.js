var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass   = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var imagemin = require('gulp-imagemin');

gulp.task('lint', function() {
    gulp.src('./assets/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(notify({ message: 'lint task complete' }));
});

// Sass gulp-ruby-sass: 1.x
gulp.task('sass', function() {
    return sass('./sass/*.scss', { style: 'nested' })
        .on('error', function (err){
         console.error('sass task Error!', err.message);
   })
           .pipe(gulp.dest('./css'))
     .pipe(notify({ message: 'sass task complete' }));
});

gulp.task('scripts', function() {
    gulp.src('./assets/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(notify({ message: 'js task complete' }));
});
// imagemin
gulp.task('images', function() {
  return gulp.src('./assets/images/*')
     .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
     .pipe(gulp.dest('dist/img'))
     .pipe(notify({ message: 'Images task complete' }));
});


gulp.task('default', function(){

    gulp.run("lint",'images');

   /*gulp.watch('./js/*.js', function(){
        gulp.run('lint', 'sass', 'scripts');
    });*/
});
