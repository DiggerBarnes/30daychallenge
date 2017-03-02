import config from 'config';
import gulp from 'gulp';
import browserify from 'browserify';
import pump from 'pump';
import source from 'vinyl-source-stream';


const options = {
  debug: config.debug,
  entries: [`${__dirname}/../client/index.js`],
  paths: [`${__dirname}/../node_modules`],
};

gulp.task('browserify', (done) => {
  pump(
    browserify(options).bundle(),
    source('app.js'),
    gulp.dest(config.build.assets_location),
    done,
  );
});
