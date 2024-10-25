import browserSync from "browser-sync"; 
import path from "../config/path.js";

const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

export default server;