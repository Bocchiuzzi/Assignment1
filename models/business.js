// Import
let mongoose = require('mongoose');

// Create a model class
let businessModel = mongoose.Schema(
    {
        name: String,
        number: String,
        email: String,
    },
    {
        collection: "contact"
    }
);

module.exports = mongoose.model("business", businessModel);