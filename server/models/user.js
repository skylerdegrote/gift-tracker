var mongoose = require('mongoose');
//var user = require('./users');
var bcrypt = require("bcrypt");
var SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    gender: String,
    email: String,
    birthDate: Date,
    imageUrl: {
        type: String,
        default: 'assets/images/user.jpg'
    },
    userName: {
        type: String,
        required: true,
        index: {unique:true}
    },
    password: {
        type: String,
        required: true
    },
    occasions:[{
        name: {
            type: String,
            required: true
        },
        date: Date,
        notes: String
    }],
    people: [{
        firstName: {
            type: String,
            required: true
        },
        lastName: String,
        gender: String,
        email: {
            type: String,
            index: {unique: true}
        },
        birthDate: Date,
        imageUrl: {type: String, default: 'assets/images/user.jpg'},
        notes: String
        }],
    gifts: [{
        name: {
            type: String,
            required: true
        },
        imageUrl: {type: String, default: 'assets/images/gifts.jpg'},
        to: {
            type: [String],
            required: true
        },
        description: String,
        stores:{
            type: [],
            required: true
        },
        purchased: Boolean,
        price: Number,
        notes: String
    }],
    notes: String
});


//
//UserSchema.pre("save", function(next){
//    var user = this;
//    if(!user.isModified('password')) return next();
//    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
//        if(err) return next(err);
//        bcrypt.hash(user.password, salt, function(err, hash){
//            if(err) return next(err);
//            user.password = hash; //encrypts the password for this user
//            next();
//        });
//    });
//});
//
//UserSchema.methods.comparePassword = function(candidatePassword, cb){
//    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
//        if(err) return cb(err);
//        cb(null, isMatch);
//    });
//};

module.exports = mongoose.model("User", UserSchema);