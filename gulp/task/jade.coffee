gulp = require 'gulp'
jade = require 'gulp-jade'
path = require('../config.coffee').path

gulp.task 'jade', ->
  gulp.src ["#{path.src.jade}/**/!(_)*.jade"]
    .pipe jade
      basedir: path.src.jade
      pretty: true
    .pipe gulp.dest "#{path.dest.html}"
