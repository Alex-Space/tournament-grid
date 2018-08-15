import axios from 'axios';
import {
    CHANGE_GAME_TYPE,
    GET_GAMES_DATE,
    CLEAR_GAMES_DATE,
    GET_PLAYERS,
    SET_CURRENT_GAME_DATE,
    CLEAR_GAME_PLAYERS,
    ADD_TOURNAMENT_1vs1,
    ADD_TOURNAMENT_2vs2,
    ADD_TOURNAMENT_3vs3
} from './types';

export function gameType(type) {
    return {
        type: CHANGE_GAME_TYPE,
        payload: type
    }
};

export const getGameDate = (type = '1 vs 1') => dispatch => {
    if (type === '1 vs 1') {
        axios.get('/api/duel-date')
            .then(response => {
                dispatch ({
                    type: GET_GAMES_DATE,
                    payload: response.data
                });
            }).catch(function (error) {
                console.log(error);
            });
    } else if (type === '2 vs 2') {
        axios.get('/api/get-two-vs-two')
            .then(response => {
                dispatch ({
                    type: GET_GAMES_DATE,
                    payload: response.data
                });
            }).catch(function (error) {
                console.log(error);
            });
    } else if (type === '3 vs 3') {
        axios.get('/api/three-vs-three')
            .then(response => {
                dispatch ({
                    type: GET_GAMES_DATE,
                    payload: response.data
                });
            }).catch(function (error) {
                console.log(error);
            });
    }
};

export const clearGameDate = () => {
    return {
        type: CLEAR_GAMES_DATE,
        payload: []
    }
}

export const clearGamePlayers = () => {
    return {
        type: CLEAR_GAME_PLAYERS,
        payload: []
    }
}

export const setCurrentGameDate = (currentSelectedDate) => {
    return {
        type: SET_CURRENT_GAME_DATE,
        payload: currentSelectedDate
    }
}

export const getPlayers = (gameType, gameDate) => dispatch => {
    axios.get(`/api/get-game-players?gametype=${gameType}&date=${gameDate}`)
        .then(response => {
            dispatch ({
                type: GET_PLAYERS,
                payload: response.data
            });
        }).catch(function (error) {
            console.log(error);
        });
}

export const addDuelTournament = (name, type, date) => dispatch => {
    axios.post('/api/add-duel')
        .then(response => {
            console.log(name, type, date);
            // dispatch ({
            //     type: ADD_TOURNAMENT_1vs1,
            //     payload: response.data
            // });
        }).catch(function (error) {
            console.log(error);
        console.log(name, type, date);
        });
}
