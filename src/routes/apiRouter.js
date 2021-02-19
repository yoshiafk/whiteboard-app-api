const express = require('express');
const router = express.Router();
const apiController = require('../controller/api')

router.get('/', apiController.showIndex)

module.exports = router;