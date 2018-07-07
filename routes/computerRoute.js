const express = require('express');
const router = express.Router();
const {computers} = require('../controller/computersController')

router.get('/', computers);

module.exports = router;