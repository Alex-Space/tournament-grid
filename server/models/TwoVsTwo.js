const mongoose = require('mongoose');

const twoVsTwoSchema = mongoose.Schema({
    gameDate: {
        type: String,
        required: true
    },
    players: [
        [
            {
                nickname: String,
                flag: String,
            },
            {
                nickname: String,
                flag: String,
            }
        ]
    ]
}, { timestamps: true });

const TwoVsTwo = mongoose.model('TwoVsTwo', twoVsTwoSchema);

module.exports = { TwoVsTwo };