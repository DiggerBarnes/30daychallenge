import config from 'config';
import gulp from 'gulp';
import pump from 'pump';
import stylus from 'gulp-stylus';
import rename from 'gulp-rename';


const options = {
  'include css': true,
  paths: [
    `${__dirname}/../node_modules`,
    `${__dirname}/../client`,
  ],
};

gulp.task('stylus', (done) => {
  pump(
    gulp.src(`${__dirname}/../styles/index.styl`),
    stylus(options),
    rename('app.css'),
    gulp.dest(config.build.assets_location),
    done,
  );
});
