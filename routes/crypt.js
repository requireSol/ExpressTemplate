var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/.well-known/acme-challenge/qEvyHA7R7U8xXpof-Sjc33n1yCHfXzjyeU6OkdI-Kzw', function(req, res, next) {
	res.send('qEvyHA7R7U8xXpof-Sjc33n1yCHfXzjyeU6OkdI-Kzw.aJubN4a_pXPEIER2Wu5AwGgvOHV7p0vfDEQIRodNsqw');
});

module.exports = router;
