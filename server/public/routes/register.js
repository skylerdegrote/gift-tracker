var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Users = require('../models/user');

router.post("/", function (req, res, next){
    console.log("Made it to post! ", req.body);
    Users.create(req.body, function(err, post){
        if(err) next(err);
        else res.redirect("/")
    });
});

router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../public/views/register.html'));
});

module.exports = router;