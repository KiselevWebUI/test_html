import gulp from "gulp";
import browserSync from "browser-sync"; 

import path from "./config/path.js";
import app from "./config/app.js";

import clear from "./task/clear.js";
import css from "./task/css.js";
import font from "./task/font.js";
import html from "./task/html.js";
import img from "./task/img.js";
import js from "./task/js.js";
import pug from "./task/pug.js";
import scss from "./task/scss.js";
import server from "./task/server.js";

const watcher = () => {
    if(app.render == "html"){
        gulp.watch(path.html.watch, html).on("all", browserSync.reload);
    }else if(app.render == "pug"){
        gulp.watch(path.pug.watch, pug).on("all", browserSync.reload);
    }
    gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
    gulp.watch(path.js.watch, js).on("all", browserSync.reload);
    gulp.watch(path.img.watch, img).on("all", browserSync.reload);
    gulp.watch(path.font.watch, font).on("all", browserSync.reload);
    
}

const build = gulp.series(
    clear,
    gulp.parallel(app.render == "pug" ? pug : html, scss, js, img),
    font
);

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
);

export { watcher };
export { server };
export { scss };
export { js };
export { img };
export { pug };
export { font };

//exports.build = build;
//exports.dev = dev;

export default app.isProd ? build : dev;

console.log(process.argv)