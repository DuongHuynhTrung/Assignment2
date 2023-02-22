const mongoose = require("mongoose")

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    club: {
        type: String,
        require: true
    },
    position: {
        type: String,
        require: true
    },
    goals: {
        type: Number,
        require: true
    },
    nation_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Nation',
        require: true
    },
    isCaptain: {
        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model('Player', playerSchema);
