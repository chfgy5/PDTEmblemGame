var express = require('express');
var router = express.Router();

var db = require('../mock_data');

router.get('/:id', function(req,res) {
    res.send(db.boards[req.params.id])
});

module.exports = router;