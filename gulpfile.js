// Include necessary modules
var gulp = require('gulp');
    browserSync = require('browser-sync');
    sass = require('gulp-sass');

// Configure Browsersync.
gulp.task('browser-sync', function() {
    var files = [
        './style.css',
        './*.php'
    ];

    // Initialize Browsersync with a PHP server.
    browserSync.init(files, {
        proxy: "http://localhost:8888/portfolio-site/"
    });
});

// Configure Sass task to run when the specificied .scss files change.
// Browsersync will also reload browsers.
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass({
            'outputStyle': 'compressed'
        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

// Create the default task that can be called using 'gulp'.
// The task will process sass, run browser-sync and start watching for changes.
gulp.task('default', ['sass','browser-sync'], function() {
    gulp.watch("sass/**/*.scss", ['sass']);
})