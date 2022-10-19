const mongoose = require('mongoose');

const CampusSchema = new mongoose.Schema({
    name: {type: String},
    locatie: {type: String},
    address: {type: String},
    image: {type: String}
    }, {
    collection: 'campus'
});

module.exports = mongoose.model('Campus', CampusSchema);