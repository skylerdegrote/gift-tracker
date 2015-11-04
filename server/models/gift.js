//may not use this

var mongoose = require('mongoose');
var gifts = require('./gift');
var Schema = mongoose.Schema;

var GiftSchema = new Schema({
    name: String,
    imageUrl: {type: String, default: 'assets/images/gifts.jpg'},
    to: String,
    stores:[],
    purchased: Boolean,
    occasion:[],
    year: Date,
    price: Number,
    notes: String
});

var gift = mongoose.model('gifts', GiftSchema);
module.exports = gift;
