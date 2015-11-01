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
        email: String,
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

var User = mongoose.model('user', UserSchema);
module.exports = User;
