/**********************************************/
/*               MONGOSSE MODEL               */
/**********************************************/

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Profil = new Schema({
    userId : String,
    userName : String,
    firstname: String,
    lastname: String,
    job : {
        company: String,
        title: String,
        attachment: String,
        userSummary: String,
        email: String,
        tel: String,
        website: String,
        label: String,
        address: String,
        city: String,
        postalCode: String,
        countryRegion: String,
        assistant: String,
    },

    socialNetwork : {
        twitter: String,
        linkedIn: String,
    },

    profilPic: String,
    bg: String,
    companyLogo: String,

});

module.exports = mongoose.model('Profils', Profil);