var mongoose = require('mongoose'),
    User = require('./users'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    address: {streetNumber: number, streetName: String, city: String, state: String, zip: number},
    email: String,
    holidays:[String],
    gifts: [{
        name: String,
        holiday:[],
        stores:[],
        imageUrl: {type: String, default: 'assets/images/gifts.jpg'},
        purchased: Boolean,
        notes: String
    }]
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
