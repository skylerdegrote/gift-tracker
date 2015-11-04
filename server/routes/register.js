var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var User = require('../models/user');

router.get("/", function (req, res, next){
    console.log("register.js 1");

    res.sendFile(path.resolve(__dirname, '../public/views/register.html'));
});

router.post('/', function(req,res,next) {
    console.log("register.js 2");

    console.log("Made it to post! " , req.body);
    User.create(req.body, function (err, post) {
        console.log("register.js 3");

        console.log("in post" + req.body);
        if (err) next("That user already exists in this nug!");
        else res.redirect('/')
    });
});

module.exports = router;