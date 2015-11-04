import { LOCALS, PATHS } from '../constants'
import gulp from 'gulp'
import jade from 'gulp-jade'

gulp.task('jade', () =>  {
  const paths = PATHS.VIEWS.IGNORE
  paths.unshift(PATHS.VIEWS.ENTRY)

  gulp.src(paths)
    .pipe(jade({
      locals: LOCALS,
    }))
    .pipe(gulp.dest(PATHS.VIEWS.DIST))
})
