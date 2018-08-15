const mongoose = require('mongoose');

const fourVsFourSchema = mongoose.Schema({
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
            }
        ]
    ]
}, { timestamps: true });

const FourVsFour = mongoose.model('FourVsFour', fourVsFourSchema);

module.exports = { FourVsFour };