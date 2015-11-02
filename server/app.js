/**
 * Created by Skyler DeGrote on 8/11/15.
 */
/////// THIS IS THE SERVER SIDE APP.JS FILE ////////
//TRAFFIC CONTROL FILE//




var express = require("express");
var path = require("path");
var mongoose = require("mongoose");

var app = express();

var index = require("./routes/index");
//save all other files that are in the routes folder to variables for readability


var mongoURI = "mongodb://localhost:27017/gift-tracker";//the collection (database_name) is the database we are going to connect to
var mongoDB = mongoose.connect(mongoURI).connection;//establishes the connection to the database


//if the database is not connected correctly this will happen
mongoDB.on("error", function(err){
    if(err){
        console.log("MONGO ERROR ", err);
    }
});
//if the database is connected correctly this will happen
mongoDB.once("open", function(){
    console.log("CONNECTED TO MONGODB!");
});

//CHANGES THE FORMAT OF: DATABASE TO SERVER INFORMATION
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded:true}));







//Create app and set port
app.set("port", (process.env.PORT || 5000));

//Start web service
app.listen(app.get('port'), function() {
    console.log("Now listening on port: " + app.get('port'));
});

//Catchall for serving index.html
app.get("/*", function(req, res) {
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});