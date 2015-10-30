var gulp = require("gulp");
var browserify = require("gulp-browserify");

gulp.task('scripts', function () {
    gulp.src(['app/main.js'])
        .pipe(browserify({
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('./public/js'));
});