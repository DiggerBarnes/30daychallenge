import gulp from 'gulp';
import sequence from 'run-sequence';
import './gulp';


gulp.task('default', (done) => {
  sequence(
    'clean',
    ['browserify', 'stylus'],
    'watch',
    'server',
    done,
  );
});
