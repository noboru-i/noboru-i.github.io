gulp = require 'gulp'
path = require('../config.coffee').path

gulp.task 'copy:image', ->
  gulp.src ["#{path.src.image}/**/*"]
    .pipe gulp.dest "#{path.dest.image}"

gulp.task 'copy', ['copy:image']