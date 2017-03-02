import config from 'config';
import gulp from 'gulp';
import watch from 'gulp-watch';
import livereload from 'livereload';


const pathNormalize = (path) => (path.replace(`#{__dirname}/../`, ''));
const triggerTaskAction = (task) => (
  (event) => {
    console.info(`File ${pathNormalize(event.path)} was changed`);
    gulp.start(task);
  }
)

const browserifyWatch = [
  `${__dirname}/../client/**/*.js`,
];

const stylusWatch = [
  `${__dirname}/../styles/**/*.styl`,
  `${__dirname}/../client/**/*.styl`,
];

const livereloadWatch = [
  config.build.assets_location,
];

gulp.task('watch', () => {
  watch(browserifyWatch, triggerTaskAction('browserify'));
  watch(stylusWatch, triggerTaskAction('stylus'));

  const server = livereload.createServer();
  server.watch(livereloadWatch);
});
