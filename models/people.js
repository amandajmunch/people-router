// this is referencing index.js
const db = require('../db');

const People = {};

People.findAll = () => {
  return db.manyOrNone('SELECT * FROM people');
};

People.findById = (id) => {
  return db.one(
    'SELECT * FROM people WHERE id=$1',
    [id]
  );
};

People.create = (name, favoriteCity) => {
  return db.one(
    'INSERT INTO people (name, favoriteCity) VALUES ($1, $2, $3, $4) returning id',
    [name, favoriteCity]
  );
};

People.update = (id, name, favoriteCity) => {
  return db.one(
    'UPDATE people SET name = $1, favoriteCity = $2 WHERE id = $3 returning id',
    [name, favoriteCity, id]
  );
};


People.destroy = (id) => {
  return db.none(
    'DELETE FROM people WHERE id = $1',
    [id]
  );
};

module.exports = People;
