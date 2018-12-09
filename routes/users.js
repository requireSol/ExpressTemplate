//Get Express and Routing engine
var express = require('express');
var mongoose = require('mongoose');
var bodyParser  = require('body-parser');
var router = express.Router();

//'/' Route Written on app.js
//ROUTES LIKE /user/:id ///you can get your :id go req.params or req.params.id Here it goes on
router.all('/', function(req, res, next) {

	//res.send('respond with a resource');

	if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {
        var userData = {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
          passwordConf: req.body.passwordConf,
        }
		
        //use schema.create to insert data into the db
        var User = require(__dirname + '/../models/users');
		User.create(userData, function (err, user) {
          if (err) {
            return next(err)
          } else {
            return res.redirect('/profile');
          }
        });
	}
      
});

//Start Router File (Return File)
module.exports = router;


