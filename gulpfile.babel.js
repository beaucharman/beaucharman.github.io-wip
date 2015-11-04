import gulp from 'gulp'
import './tasks'

gulp.task('default', [
  'watch',
])

gulp.task('build', [
  'jade',
  'stylus',
  'images',
])
