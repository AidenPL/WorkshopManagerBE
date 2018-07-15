const express = require('express');
const router = express.Router();
const {computers, postEndUser, computerById, UpdateComputer} = require('../controller/computersController')

router.get('/', computers);

router.get('/:computerID', computerById)

router.post('/', postEndUser)

router.put('/:computerID', UpdateComputer)

module.exports = router;