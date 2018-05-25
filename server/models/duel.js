const mongoose = require('mongoose');

const duelSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    players: [
        {
            nickname: String,
            flag: String,
        }
    ]
}, { timestamps: true });

const Duel = mongoose.model('Duel', duelSchema);

module.exports = { Duel };