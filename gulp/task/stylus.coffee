gulp = require 'gulp'
stylus = require 'gulp-stylus'
path = require('../config.coffee').path

gulp.task 'stylus', ->
  gulp.src "#{path.src.stylus}/**/*.styl"
    .pipe stylus()
    .pipe gulp.dest "#{path.dest.css}"
