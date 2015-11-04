var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
    res.json(req.isAuthenticated());
});

router.get('/name', function(req, res, next){
    res.json(req.user);

});

//I'm not sure why the date and not the user is being put to the db?

router.put("/date", function(req,res,next){
    User.findByIdAndUpdate(req.user.id, {lastlogin: Date.now()}, function(){
        console.log("Date Updated!");
    });



    res.json(req.user);
});

module.exports = router;