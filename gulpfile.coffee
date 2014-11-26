gulp        = require 'gulp'
browserSync = require 'browser-sync'

gulp.task 'serve', ->
  browserSync({
    notify: false,
    server: ['.']
  })
