gulp = require 'gulp'
path = require('../config').path
browserSync = require 'browser-sync'

gulp.task 'reload', ->
  browserSync.reload()

gulp.task 'serve', ['jade', 'stylus', 'copy'], ->
  browserSync
    notify: false,
    server: [path.dest.html]
  gulp.watch "#{path.src.jade}/**/*.jade", ['jade']
  gulp.watch "#{path.dest.html}/**/*.html", ['reload']
  gulp.watch "#{path.src.stylus}/**/*.styl", ['stylus']
  gulp.watch "#{path.dest.css}/**/*.css", ['reload']
  gulp.watch "#{path.src.image}/**/*", ['copy:image']
  gulp.watch "#{path.dest.image}/**/*", ['reload']
