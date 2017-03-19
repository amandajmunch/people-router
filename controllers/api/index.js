const router = require('express').Router();
const controller = require('./controller');

router.get('/people', controller.index);
router.get('/people/:id', controller.show);

router.post('/people', controller.create);

router.put('/people/:id', controller.update);
router.get('/people/:id/edit', controller.update);
router.delete('/people/:id', controller.destroy);


module.exports = router;
