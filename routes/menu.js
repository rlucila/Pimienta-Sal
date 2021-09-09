var express = require('express');
var router = express.Router();
const {detail}= require ('../controllers/menuController');


/* /menu */
router.get('/detail/:id', detail)