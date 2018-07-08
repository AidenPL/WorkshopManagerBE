const express = require('express');
const router = express.Router();
const {endUsers, postEndUser} = require('../controller/endUserController')

router.get('/:company_id', endUsers);

router.post('/', postEndUser)

module.exports = router;