import gulp from "gulp";

import path from "../config/path.js";
import app from "../config/app.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";
import pug from "gulp-pug";
import webpHtml from "gulp-webp-html";

export default () => {
    return gulp.src(path.pug.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Pug",
            message: error.message
        }))
    }))
    .pipe(pug(app.pug))
    .pipe(webpHtml())
    .pipe(gulp.dest(path.pug.dest));

    console.log('pug');
}