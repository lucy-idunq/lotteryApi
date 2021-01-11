const express = require('express')

const controller = require('../controller/timesController')

const router = express.Router();

router.get('/', controller.getTimes);

module.exports = router;