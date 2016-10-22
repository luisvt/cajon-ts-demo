var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: 'web',
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  });

  gulp.watch(['web/**/*.html', 'web/**/*.js']).on('change', reload);
});