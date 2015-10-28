<<<<<<< HEAD
var mongoose = require('mongoose');
var user = require('./users');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    address: {
        streetNumber: number,
        streetName: String,
        city: String,
        state: String,
        zip: number
    },
    email: String,
    username: String,
    password: String,
    occasions:[String],
    gifts: [{
        name: String,
        occasion:[],
        stores:[],
        imageUrl: {
            type: String,
            default: 'assets/images/gifts.jpg'
        },
        purchased: Boolean,
        notes: String
    }]
});

var User = mongoose.model('user', UserSchema);
module.exports = User;
