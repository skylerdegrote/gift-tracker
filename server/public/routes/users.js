var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
    res.json(req.isAuthenticated());
});

router.get('/name', function(req, res, next){
    res.json(req.user);

});

router.post("/registeruser", function (req, res, next){
    var user = new Users({username: req.body.username, password: req.body.password, firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email});
    teacher.save(function(err){
        if(err) console.log('error: ', err);
        res.send(user.toJSON());
    });
});

router.put("/date", function(req,res,next){
    User.findByIdAndUpdate(req.user.id, {lastlogin: Date.now()}, function(){
        console.log("Date Updated!");
    });

    res.json(req.user);
});

module.exports = router;