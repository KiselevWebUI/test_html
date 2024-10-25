import news from "../data/news.json" assert { type: 'json' };

const isProd =  process.argv.includes("--production");
const isDev =  !isProd;

const app = {

    isProd: isProd,
    isDev: isDev,

    render: "html",
    //render: "pug",

    htmlmin: {
        collapseWhitespace: isProd
    },

    pug: {
        pretty: isDev,
        data: {
            news: news
        }
    },

    webpack: {
        mode: isProd ? "production" : "development"
    },

    imagemin:{
        verbose: true
    },

    fonter:{
        formats: ["otf"]
    },

    webp: {
        quality:70
    }

}

export default app;