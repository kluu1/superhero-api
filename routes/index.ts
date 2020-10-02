const router = require('express').Router();
const controller = require('../controllers');

router.route('/all').get(controller.all);
router.route('/id/:id').get(controller.id);
router.route('/powerstats/:id').get(controller.powerstats);
router.route('/appearance/:id').get(controller.appearance);
router.route('/biography/:id').get(controller.biography);
router.route('/work/:id').get(controller.work);

module.exports = router;
