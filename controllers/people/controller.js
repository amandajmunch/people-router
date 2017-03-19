const People = require('../../models/people');

const controller = {};

controller.index = (req, res) => {
  People
  // referencing the models functions
    .findAll()
    .then((data) => {
      // rendering a page
      res.render('people/index', {people: data});
    })
    .catch(err => console.log('ERROR:', err));
};

controller.show = (req, res) => {
  const id = req.params.id;
  People
    .findById(id)
    .then((data) => {
      res.render('people/show',data);
    })
    .catch(err => console.log('ERROR:', err));
};

// your work here

controller.new = (req, res) => {
  res.render('people/new');
};

controller.edit = (req, res) => {
  const id = req.params.id;
  People
    .findById(id)
    .then((data) => {
      res.render('people/edit', data);
    })
    .catch(err => console.log('ERROR:', err));

};

module.exports = controller;
