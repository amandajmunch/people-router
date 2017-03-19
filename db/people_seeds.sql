DROP TABLE IF EXISTS people;

CREATE TABLE people(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  favoriteCity VARCHAR(250) NOT NULL
);

INSERT INTO people (name, favoriteCity) VALUES
(
  'Sean', 'New York'
);
