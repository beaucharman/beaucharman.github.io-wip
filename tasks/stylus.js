import { PATHS } from '../constants'
import gulp from 'gulp'
import stylus from 'gulp-stylus'
import nib from 'nib'

gulp.task('stylus', () =>  {
  const options = {
    use: [
      nib(),
    ]
  }

  gulp.src(PATHS.STYLES.ENTRY)
    .pipe(stylus(options))
    .pipe(gulp.dest(PATHS.STYLES.DIST))
})
