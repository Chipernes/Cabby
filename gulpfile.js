// Main module
import gulp from "gulp";
// Import paths
import { path } from "./gulp/config/path.js";
// Import of common plugins
import { plugins } from "./gulp/config/plugins.js";

// Passing value to global variable
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fonstStyle } from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js";
import { gitignore } from "./gulp/tasks/gitignore.js";

// File change watcher
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

// Font preprocessing
const fonts = gulp.series(otfToTtf, ttfToWoff, fonstStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Building scenarios for executing tasks
const dev = gulp.series(reset, mainTasks, gitignore, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks, gitignore);
const deployZIP = gulp.series(reset, mainTasks, zip, gitignore);

// Script export
export { dev }
export { build }
export { deployZIP }

// Default script execution
gulp.task('default', dev);