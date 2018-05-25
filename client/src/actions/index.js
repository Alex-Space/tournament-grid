import axios from 'axios';
import {
    CHANGE_GAME_TYPE,
    GET_GAMES_DATE
} from './types';

export function gameType(type) {
    return {
        type: CHANGE_GAME_TYPE,
        payload: type
    }
};

export function getGameDate(type = '1 vs 1') {
    // Do axios request in future
    let testResponse = [];
    if ( type === '1 vs 1' ) {
        testResponse = [
            '01.01.2018',
            '01.02.2018',
            '01.03.2018',
        ];
    } else if ( type === '2 vs 2' ) {
        testResponse = [
            '02.01.2018',
            '02.02.2018',
            '02.03.2018',
        ];
    }
    return {
        type: GET_GAMES_DATE,
        payload: testResponse
    }
};

export function getDuels() {
    const request = axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
        .then(response => {

            if (list) {
                return [...list, ...response.data]
            } else {
                return response.data;
            }

        });
}
