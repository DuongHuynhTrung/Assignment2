const mongoose = require("mongoose")

const nationSchema = new mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('Nation', nationSchema);
