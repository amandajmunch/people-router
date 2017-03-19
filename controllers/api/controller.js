const People = require('../../models/people');

const controller = {};

controller.index = (req, res) => {
  People
    .findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log('ERROR:', err));
};

controller.show = (req, res) => {
  const id = req.params.id;
  People
    .findById(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log('ERROR:', err));
};

controller.create = (req,res) => {
const name = req.body.name,
      favoriteCity = req.body.favoriteCity;
People
  .create(name, favoriteCity)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log('ERROR:', err));
};

controller.update = (req,res) => {
  const name = req.body.name,
      favoriteCity = req.body.favoriteCity,
      id = req.params.id;
  People
    .update(id, name, favoriteCity)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log('ERROR:', err));
};

controller.destroy = (req,res) => {
  const id = req.params.id;
  People
    .destroy(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log('ERROR:', err));
};

module.exports = controller;
