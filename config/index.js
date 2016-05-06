'use strict';

var config = process.env.NODE_ENV === 'production'
  ? {
    development: {},
    test: {},
    production: {}
  }
  : require('./config');

module.exports = function() {

console.log('USERNAME', process.env.USERNAME);

return {
  "development": {
   "username": process.env.USERNAME || config.development.username,
   "database": process.env.DATABASE || config.development.database,
   "password": process.env.PASSWORD || config.development.password,
   "host": process.env.HOST || config.development.host,
   "dialect": process.env.DIALECT || config.development.dialect
 },
 "test": {
   "username": process.env.USERNAME || config.test.username,
   "database": process.env.DATABASE || config.test.database,
   "host": process.env.HOST || config.test.host,
   "dialect": process.env.DIALECT || config.test.dialect
 },
 "production": {
   "host": process.env.HOST,
   "database": process.env.DATABASE,
   "username": process.env.USERNAME,
   "password": process.env.PASSWORD,
   "dialect": process.env.DIALECT,
   "database_url": process.env.DATABASE_URL
 }
};

}();