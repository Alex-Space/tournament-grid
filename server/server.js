const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/config').get(process.env.NODE_ENV);

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

// Models
const { Duel } = require('./models/duel');

app.use(bodyParser.json());
app.use(cookieParser());

// POST
app.post('/api/add-duel', (req, res) => {
    const duel = new Duel(req.body);

    duel.save((err, doc) => {
        if (err) return res.status(400).send(err);
        console.log(doc);
        res.status(200).json({
            post: true,
            doc: doc,
            duelId: doc._id
        });
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('SERVER RUNNING!');
});