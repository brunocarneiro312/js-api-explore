(function () {
    var gulp = require('gulp');
    var concat = require('gulp-concat');
    var less = require('gulp-less');
    var browserSync = require('browser-sync').create();

    /**
     * Task Default
     */
    gulp.task('default', [
        'pack.app',
        'pack.vendors',
        'serve'
    ]);

    /**
     * pack.app
     */
    gulp.task('pack.app', function () {

    });

    /**
     * pack.vendors
     */
    gulp.task('pack.vendors', function() {
        return gulp
            .src([
                'node_modules/angular/angular.min.js',
                'node_modules/angular-route/angular-route.min.js',
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/bootstrap/dist/js/bootstrap.js'
            ])
            .pipe(concat('app.js'))
            .pipe(gulp.dest('./app/dist/js/'));
    })

    /**
     * serve
     */
    gulp.task('serve', function() {
        return browserSync.init({
            server: {
                baseDir: './app/'
            }
        });
    });

    gulp.watch('app/scripts/**/*.js', ['pack.app', 'pack.vendors']).on('change', function() { browserSync.reload(); });
})();