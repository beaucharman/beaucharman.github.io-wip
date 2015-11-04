import { LOCALS, PATHS } from '../constants'
import gulp from 'gulp'
import imagemin from 'gulp-imagemin'

gulp.task('images', () =>  {
  gulp.src(PATHS.IMAGES.ENTRY)
    .pipe(imagemin({
      progressive: true,
    }))
    .pipe(gulp.dest(PATHS.IMAGES.DIST))
})
