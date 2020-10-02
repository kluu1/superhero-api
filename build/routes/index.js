"use strict";
var router = require('express').Router();
var controller = require('../controllers');
router.route('/all').get(controller.all);
router.route('/id/:id').get(controller.id);
module.exports = router;
