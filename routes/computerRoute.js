const express = require('express');
const router = express.Router();
const {computers, postEndUser} = require('../controller/computersController')

router.get('/', computers);

router.post('/', postEndUser)

module.exports = router;