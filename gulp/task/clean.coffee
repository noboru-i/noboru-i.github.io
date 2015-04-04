gulp = require 'gulp'
path = require('../config').path
clean = require 'gulp-clean'

gulp.task 'clean', ['clean:html']

gulp.task 'clean:html', () ->
  gulp.src ["#{path.dest.html}"]
    .pipe clean()