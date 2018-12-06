var express = require('express');
var router = express.Router();

/* GET users listing. */
//Do it in Routes Files
//Routing mongoose
app.get('/users', function(req, res){       //Users Table
    mongoose.model('users').find(function(err, users){
        res.send(users);
    });
});


module.exports = router;
