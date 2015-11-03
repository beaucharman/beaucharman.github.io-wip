import gulp from 'gulp'
import jade from 'gulp-jade'
import stylus from 'gulp-stylus'

import { LOCALS, PATHS } from './constants'

gulp.task('default', ['jade', 'stylus', 'watch'])

gulp.task('jade', () =>  {
  gulp.src(PATHS.SRC.VIEWS)
    .pipe(jade({ locals: LOCALS }))
    .pipe(gulp.dest(PATHS.DIST.VIEWS))
})

gulp.task('stylus', () =>  {
  gulp.src(PATHS.SRC.STYLES)
    .pipe(stylus())
    .pipe(gulp.dest(PATHS.DIST.STYLES))
})

gulp.task('watch', function() {
  gulp.watch(PATHS.SRC.VIEWS, ['jade'])
  gulp.watch(PATHS.SRC.STYLES, ['stylus'])
})
