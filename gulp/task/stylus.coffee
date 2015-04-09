gulp = require 'gulp'
stylus = require 'gulp-stylus'
minifyCss = require 'gulp-minify-css'
path = require('../config.coffee').path

gulp.task 'stylus', ->
  gulp.src "#{path.src.stylus}/**/!(_)*.styl"
    .pipe stylus()
    .pipe minifyCss()
    .pipe gulp.dest "#{path.dest.css}"
