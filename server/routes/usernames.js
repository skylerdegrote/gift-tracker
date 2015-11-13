var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
    res.json(req.isAuthenticated());
});



router.get('/name', function(req, res, next){
    res.json(req.user);

});

router.put("/date", function(req,res,next){
    User.findByIdAndUpdate(req.user.id, {lastlogin: Date.now()}, function(){
        console.log("Date Updated!");
    });

    res.json(req.user);
});

router.post('/create', function(req,res,next) {
    User.create(req.body, function (err, post) {
        if (err)
            next("That user already exists!");
        else
            res.redirect('/views/login.html');
    })
});

module.exports = router;