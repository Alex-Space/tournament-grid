const mongoose = require('mongoose');

const duelSchema = mongoose.Schema({
    gameName: {
        type: String,
        required: true
    },
    gameDate: {
        type: String,
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