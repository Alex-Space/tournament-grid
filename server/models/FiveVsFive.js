const mongoose = require('mongoose');

const fiveVsFiveSchema = mongoose.Schema({
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

const FiveVsFive = mongoose.model('FiveVsFive', fiveVsFiveSchema);

module.exports = { FiveVsFive };