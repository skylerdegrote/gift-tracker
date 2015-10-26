var mongoose = require('mongoose'),
    occasions = require('./occasions'),
    Schema = mongoose.Schema;

var OccasionsSchema = new Schema({
    name: String,
    date: Date,
    gifts: [{
        name: String,
        stores:[],
        imageUrl: {type: String, default: 'assets/images/gifts.jpg'},
        purchased: Boolean,
        notes: String
    }]
});

var occasion = mongoose.model('occasions', OccasionsSchema);
module.exports = occasion;


