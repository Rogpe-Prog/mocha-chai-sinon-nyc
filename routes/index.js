const express = require('express')
const router = express.Router()

const indexControler = require('../controllers/index')

router.get('/', indexControler.home)



module.exports = router