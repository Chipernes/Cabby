import fs from 'fs';
import del from "del";
import zipPlugin from "gulp-zip";
export const gitignore = () => {
    if (!fs.existsSync('.gitignore')) {
        fs.writeFile('./.gitignore', '', cb);
        fs.appendFile('./.gitignore', 'package-lock.json\r\n', cb);
        fs.appendFile('./.gitignore', 'node_modules/\r\n', cb);
        fs.appendFile('./.gitignore', '.gitignore\r\n', cb);
        fs.appendFile('./.gitignore', 'dist/\r\n', cb);
        fs.appendFile('./.gitignore', 'hosting/\r\n', cb);
        fs.appendFile('./.gitignore', 'Source/\r\n', cb);
        fs.appendFile('./.gitignore', 'version.json\r\n', cb);
        fs.appendFile('./.gitignore', '**/*.zip\r\n', cb);
        fs.appendFile('./.gitignore', '**/*.rar\r\n', cb);
    }
    return app.gulp.src(`${app.path.buildFolder}`);
}
function cb() { }