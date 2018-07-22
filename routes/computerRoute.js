const express = require('express');
const router = express.Router();
const {computers, postComputer, computerById, UpdateComputer} = require('../controller/computersController')

router.get('/', computers);

router.get('/:computerID', computerById)

router.post('/', postComputer)

router.put('/:computerID', UpdateComputer)

module.exports = router;