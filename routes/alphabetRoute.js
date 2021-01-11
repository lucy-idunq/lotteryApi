const express = require('express')

const controller = require('../controller/alphabetController')

const router = express.Router();

router.get('/',controller.getAlphabet);

module.exports = router;