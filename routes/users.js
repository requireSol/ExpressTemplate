//Get Express and Routing engine
var express = require('express');
var router = express.Router();

/* GET home page. */
//ROUTES LIKE /user/:id ///you can get your :id go req.params or req.params.id Here it goes on
router.get('/users', function(req, res, next) {

   /* if (req.body.email &&
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
        User.create(userData, function (err, user) {
          if (err) {
            return next(err)
          } else {
            return res.redirect('/profile');
          }
        });
      }*/
      res.send('respond with a resource');
});

//Start Router File (Return File)
module.exports = router;
