var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');




router.post('/', passport.authenticate('local', {
    successRedirect: '../views/index.html',
    failureRedirect: '/'
}));

router.get('/name', function(req, res, next){
    res.json(req.user);

});

router.get("/*", function(req, res, next){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;











