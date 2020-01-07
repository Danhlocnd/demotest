var express = require('express');
var pathBase = express();

var homeRouter = require('./home/index');

/* GET home page. */
pathBase.use('/',homeRouter)

module.exports = pathBase;
