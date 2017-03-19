const router = require('express').Router();

router.use('/people', require('./controllers/people'));
router.use('/api', require('./controllers/api'));
router.get('/', (req, res) => res.render('index'));

module.exports = router;
