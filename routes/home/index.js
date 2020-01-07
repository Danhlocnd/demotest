var express = require('express');
var router = express.Router();
const homeController = require('../../controller/home.controller');
/* GET home page. */
router.get('/',homeController.getdata);

router.get('/home2',homeController.getdata2);


module.exports = router;
