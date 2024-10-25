import gulp from "gulp"; 

import path from "../config/path.js";
import app from "../config/app.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";
import newer from "gulp-newer";
import fonter from "gulp-fonter";
import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";

export default () => {
    gulp.src(path.font.src, {
        encoding: false, // Important!
        removeBOM: false,
      })
    .pipe(newer(path.font.dest))
    .pipe(ttf2woff())
    .pipe(gulp.dest(path.font.dest));
    return gulp.src(path.font.src, {
        encoding: false, // Important!
        removeBOM: false,
      })
    .pipe(newer(path.font.dest))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(path.font.dest));

    console.log('font');
}