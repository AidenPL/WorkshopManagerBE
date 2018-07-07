const express = require('express');
const router = express.Router();
const {endUsers} = require('../controller/endUserController')

router.get('/:company_id', endUsers);

module.exports = router;