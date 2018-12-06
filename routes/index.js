//Get Express and Routing engine
var express = require('express');
var router = express.Router();

/* GET home page. */
//ROUTES LIKE /user/:id ///you can get your :id go req.params or req.params.id Here it goes on
router.get('/', function(req, res, next) {

    //res.send('You can Send everthing');
    // LIKE 404 401 errors http status and stuff like jsonfiles

    // you can get Post and get Variables from
    //req.query.name req.query.password req.query.title



    //Send to routes/index the Title: 'Express' can add , 404 or 200 prob
    res.render('index', { title: 'Express' });

});

//Start Router File (Return File)
module.exports = router;
