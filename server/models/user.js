var mongoose = require('mongoose');
var user = require('./users');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    gender: String,
    email: String,
    birthDate: Date,
    imageUrl: {type: String, default: 'assets/images/user.jpg'},
    userName: String,
    password: String,
    occasions:[{
        name: String,
        date: Date,
        notes: String
    }],
    people: [{
        firstName: String,
        lastName: String,
        gender: String,
        email: String,
        birthDate: Date,
        imageUrl: {type: String, default: 'assets/images/user.jpg'},
        gifts: [{
            name: String,
            imageUrl: {type: String, default: 'assets/images/gifts.jpg'},
            to: [String],
            stores:[],
            purchased: Boolean,
            price: Number,
            notes: String
        }]
    }],
    notes: String

    //firstName: String,
    //lastName: String,
    //email: String,
    //birthdate: Date,
    //username: String,
    //password: String,
    //occasions:[],
    //people: [],
    //gifts: [{
    //    name: String,
    //    occasion:[],
    //    stores:[],
    //    people: [],
    //    imageUrl: {
    //        type: String,
    //        default: 'assets/images/gifts.jpg'
    //    },
    //    purchased: Boolean,
    //    notes: String
    //}]
});

var User = mongoose.model('user', UserSchema);
module.exports = User;
