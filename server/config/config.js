var env = process.env.NODE_ENV || 'development';

var config = require('./config.json');
var envConfig = config[env];
console.log(env);

Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);