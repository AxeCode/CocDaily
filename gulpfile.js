var gulp = require('gulp'),
    server = require('gulp-express');

gulp.task('server', function(err) {
    if (err) {
        console.log(err.stack);
    }
    server.run(['app.js']);
    gulp.watch(['*.js'], server.run);
})
