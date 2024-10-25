import gulp from "gulp"; 

import path from "../config/path.js";
import app from "../config/app.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";
import babel from "gulp-babel";
//import uglify from "gulp-uglify";
import webpack from "webpack-stream";

export default () => {
    return gulp.src(path.js.src, {sourcemaps: app.isDev})
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "JS",
            message: error.message
        }))
    }))
    .pipe(babel())
    .pipe(webpack(app.webpack))
    //.pipe(uglify())
    .pipe(gulp.dest(path.js.dest, {sourcemaps: app.isDev}));

    console.log('js');
}
