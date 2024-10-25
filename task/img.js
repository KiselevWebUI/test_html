import gulp from "gulp"; 

import path from "../config/path.js";
import app from "../config/app.js";

import plumber from"gulp-plumber";
import notify from "gulp-notify";
import imagemin from 'gulp-imagemin';
import newer from "gulp-newer";
import webp from "gulp-webp";
import gulpif from "gulp-if";

export default () => {
    return gulp.src(path.img.src, {
        encoding: false,
        removeBOM: false
    })
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "IMG",
            message: error.message
        }))
    }))
    .pipe(newer(path.img.dest))
    .pipe(webp(app.webp))
    .pipe(gulp.dest(path.img.dest))

    .pipe(gulp.src(path.img.src, {
        encoding: false,
        removeBOM: false
    }))
    .pipe(newer(path.img.dest))
    .pipe(imagemin())
    .pipe(gulp.dest(path.img.dest));

    console.log('img');
}
