import _ from 'lodash'
import gulp from 'gulp'
import jade from 'gulp-jade'
import stylus from 'gulp-stylus'
import imagemin from 'gulp-imagemin'

import { LOCALS, PATHS } from './constants'

gulp.task('default', ['watch'])

gulp.task('build', ['jade', 'stylus', 'images'])

gulp.task('jade', () =>  {
  const paths = PATHS.VIEWS.IGNORE
  paths.unshift(PATHS.VIEWS.ENTRY)

  gulp.src(paths)
    .pipe(jade({ locals: LOCALS }))
    .pipe(gulp.dest(PATHS.VIEWS.DIST))
})

gulp.task('stylus', () =>  {
  const nib = require('nib')
  const options = {
    use: [
      nib(),
    ]
  }

  gulp.src(PATHS.STYLES.ENTRY)
    .pipe(stylus(options))
    .pipe(gulp.dest(PATHS.STYLES.DIST))
})

gulp.task('images', () =>  {
  gulp.src(PATHS.IMAGES.ENTRY)
    .pipe(imagemin({
      progressive: true,
    }))
    .pipe(gulp.dest(PATHS.IMAGES.DIST))
})

gulp.task('watch', function() {
  gulp.watch(PATHS.VIEWS.ENTRY, ['jade'])
  gulp.watch(PATHS.STYLES.SRC, ['stylus'])
  gulp.watch(PATHS.IMAGES.ENTRY, ['images'])
})
