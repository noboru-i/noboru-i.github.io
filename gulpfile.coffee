gulp = require 'gulp'
runSequence = require 'run-sequence'
requireDir = require 'require-dir'

dir = requireDir './gulp/task'

gulp.task 'default', (callback) ->
  runSequence(
    'clean',
    'jade',
    callback
    )