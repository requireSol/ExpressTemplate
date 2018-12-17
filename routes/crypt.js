var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/.well-known/acme-challenge/RAP1trw2GxJAy_1II1hrMYy-QlWtP-snESo5n6c9pjQ', function(req, res, next) {
	res.send('RAP1trw2GxJAy_1II1hrMYy-QlWtP-snESo5n6c9pjQ.slwyuQFQuHa_ZRclggLn_ETt-tCZ_9yCaraZFCCNiJc');
});

module.exports = router;
