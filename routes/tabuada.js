const express = require('express')
const router = express.Router()

const tabuadaControler = require('../controllers/tabuada')

router.get('/', tabuadaControler.list)
router.get('/do/:num', tabuadaControler.tabuada)



module.exports = router