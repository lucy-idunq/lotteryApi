const express = require('express')

const controller = require('../controller/lotteryCheckerController')

const router = express.Router();

router.get('/', controller.getLottery);

module.exports = router;