import fs from 'fs';
import merge from 'lodash.merge';


const getConfigs = (paths) => (
  paths.reduce((memo, path) => {
    if (fs.existsSync(path)) memo.push(require(path).default);
    return memo;
  }, [])
);

const environment = process.env.NODE_ENV || 'development';

const base = {
  environment,
  debug: environment === 'development' && !(process.argv.indexOf('build') >= 0),
};

const overrides = getConfigs([
  `${__dirname}/default.js`,
  `${__dirname}/${environment}.js`,
  `${__dirname}/local.js`,
]);

const envOverride = {};
const config = merge(base, ...overrides, envOverride);

export default config;
