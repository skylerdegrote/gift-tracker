var mongoose = require('mongoose');
var gifts = require('./gift');
var Schema = mongoose.Schema;

var GiftSchema = new Schema({
    name: String,
    occasion:[],
    stores:[],
    to: String,
    imageUrl: {type: String, default: 'assets/images/gifts.jpg'},
    purchased: Boolean,
    notes: String
});

var gift = mongoose.model('gifts', GiftSchema);
module.exports = gift;
