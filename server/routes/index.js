var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Users = require('../models/user');



router.post('/', passport.authenticate('local', {
    successRedirect: '../views/users.html',
    failureRedirect: '/'
}));

router.get('/create', function(req, res, next){
    console.log("Made it to Get Request");
    res.sendFile(path.join(__dirname, "../public/views/index.html"));

    //res.json(req.user);

});

//User Registration
router.post('/register', function(req,res,next) {
    res.create(req.body, function (err, post) {
        if (err)
            next("This is the error! " + err);
        else
            console.log('user registered!');
        res.redirect('/');
    })
});

router.get("/*", function(req, res, next){
    console.log("index.js 3");
    console.log("Is this next?");
    console.log("Hit: ", req.params);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;











