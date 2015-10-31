var mongoose = require('mongoose');
var user = require('./users');
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
        required: true
    },
    password: {
        type: String,
        required: true
    },
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
        notes: String
        }],
    gifts: [{
        name: String,
        imageUrl: {type: String, default: 'assets/images/gifts.jpg'},
        to: [String],
        description: String,
        stores:[],
        purchased: Boolean,
        price: Number,
        notes: String
    }],
    notes: String
});

var User = mongoose.model('user', UserSchema);
module.exports = User;
