const express = require('express');

const timesRoute = require('./timesRoute');
const alphabetRoute = require('./alphabetRoute')
const lotteryRoute = require('./lotteryCheckerRoute')

const router = express.Router();

router.use('/times',timesRoute);
router.use('/alphabets',alphabetRoute);

router.use('/lottery',lotteryRoute)

module.exports = router;