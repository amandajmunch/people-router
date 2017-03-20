const pgp = require('pg-promise')();

var db = pgp(
  process.env.DATABASE_URL
  || 'postgres://amandamunch@localhost:5432/spotify_database');


module.exports = db;
