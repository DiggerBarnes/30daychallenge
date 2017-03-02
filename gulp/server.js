import config from 'config';
import gulp from 'gulp';
import express from 'express';
import livereload from 'connect-livereload';


gulp.task('server', () => {
  const app = express();

  app.use(livereload());
  app.use(express.static(`${__dirname}/..`));

  app.listen(config.build.server_port, () => {
    console.info(`Development server is running on port: ${config.build.server_port}`);
  });
});
