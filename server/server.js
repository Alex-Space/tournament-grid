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
const { TwoVsTwo } = require('./models/TwoVsTwo');
const { ThreeVsThree } = require('./models/ThreeVsThree');

app.use(bodyParser.json());
app.use(cookieParser());

// GET
app.get('/api/duel-date', (req, res) => {
    Duel.find({}, (err, duels) => {
        if (err) return res.status(400).send(err);
        const duelsDateArr = duels.map((tournament, index) => {
            return tournament.gameDate;
        });
        res.status(200).send(duelsDateArr);
    });
});

app.get('/api/get-two-vs-two', (req, res) => {
    TwoVsTwo.find({}, (err, games) => {
        if (err) return res.status(400).send(err);
        const twoVsTwoDates = games.map((tournament, index) => {
            return tournament.gameDate;
        });
        res.status(200).send(twoVsTwoDates);
    });
});

app.get('/api/three-vs-three', (req, res) => {
    ThreeVsThree.find({}, (err, games) => {
        if (err) return res.status(400).send(err);
        const threeVsThree = games.map((tournament, index) => {
            return tournament.gameDate;
        });
        res.status(200).send(threeVsThree);
    });
});

app.get('/api/get-game-players', (req, res) => {
    const gameType = req.query.gametype;
    const gameDate = req.query.date;

    if (gameType === '1vs1') {
        Duel.findOne({gameDate}, (err, game) => {
            if (err) return res.status(400).send(err);
            const players = game.players;
            res.status(200).send(players);
        });

    } else if (gameType === '2vs2') {
        
        TwoVsTwo.findOne({gameDate}, (err, game) => {
            if (err) return res.status(400).send(err);
            const teams = game.players;
            res.status(200).send(teams);
        });

    } else if (gameType === '3vs3') {
        
        ThreeVsThree.findOne({gameDate}, (err, game) => {
            if (err) return res.status(400).send(err);
            const teams = game.players;
            res.status(200).send(teams);
        });

    }
    
});

// POST
app.post('/api/add-duel', (req, res) => {
    const duel = new Duel(req.body);

    duel.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            doc: doc,
            duelId: doc._id
        });
    });
});

app.post('/api/add-two-vs-two', (req, res) => {
    const twoVsTwogameMatch = new TwoVsTwo(req.body);

    twoVsTwogameMatch.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            doc: doc,
            teamGameId: doc._id
        });
    });
});

app.post('/api/three-vs-three', (req, res) => {
    const threeVsThreegameMatch = new ThreeVsThree(req.body);

    threeVsThreegameMatch.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            doc: doc,
            teamGameId: doc._id
        });
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('SERVER RUNNING!');
});