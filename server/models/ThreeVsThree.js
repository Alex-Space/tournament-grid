const mongoose = require('mongoose');

const threeVsThreeSchema = mongoose.Schema({
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
            },
            {
                nickname: String,
                flag: String,
            }
        ]
    ]
}, { timestamps: true });

const ThreeVsThree = mongoose.model('ThreeVsThree', threeVsThreeSchema);

module.exports = { ThreeVsThree };