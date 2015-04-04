gulp = require 'gulp'
path = require('../config').path
browserSync = require 'browser-sync'

gulp.task 'serve', ->
  browserSync
    notify: false,
    server: [path.dest.html]
