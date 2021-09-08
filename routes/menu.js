var express = require('express');
var router = express.Router();
const { detail }= require('../controllers/menuController')

/* GET users listing. */
router.get('/:id', detail);

module.exports = router;
