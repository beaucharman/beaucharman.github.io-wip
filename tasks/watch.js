import { PATHS } from '../constants'
import gulp from 'gulp'

gulp.task('watch', function() {
  gulp.watch(PATHS.VIEWS.ENTRY, ['jade'])
  gulp.watch(PATHS.STYLES.SRC, ['stylus'])
  gulp.watch(PATHS.IMAGES.ENTRY, ['images'])
})
