// File: Gulpfile.js
'use strict';

import gulp from 'gulp'
import eslint from 'gulp-eslint'

gulp.task('lint', () =>{
  return  gulp.src('./*.js')
          .pipe(eslint({configFile: '.eslintrc'}))
          .pipe(eslint.format())
          .pipe(eslint.failOnError());
})
