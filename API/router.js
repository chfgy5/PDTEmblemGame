var express = require('express');
var router = express.Router();

var boardController = require('./controllers/board');

router.use('/board', boardController);

module.exports = router;