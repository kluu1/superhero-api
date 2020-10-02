const router = require('express').Router();
const controller = require('../controllers');

router.route('/all').get(controller.all);
router.route('/id/:id').get(controller.id);

module.exports = router;
