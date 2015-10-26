var mongoose = require('mongoose'),
    Profile = require('./profile'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    googleID: String,
    profileID: String,
    managingCalendar: String,
    emailsToIgnore: [String],
    auth: {
        accessToken: String,
        refreshToken: String
    }
});