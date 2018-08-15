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
} from '../actions/types';

// gameTypes: [ '1 vs 1', '2 vs 2', '3 vs 3', '5 vs 5'],
const initialState = {
    gameTypes: [ '1 vs 1', '2 vs 2', '3 vs 3'],
    gameTypeSelected: '1 vs 1' 
};

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TOURNAMENT_1vs1:
            return {
                ...state,
                gameTypeSelected: action.payload
            }
        case CHANGE_GAME_TYPE:
            return {
                ...state,
                gameTypeSelected: action.payload
            }
        case GET_GAMES_DATE:
            return {
                ...state,
                gameDate: action.payload
            }
        case CLEAR_GAMES_DATE:
            return {
                ...state,
                gameDate: action.payload
            }
        case GET_PLAYERS:
            return {
                ...state,
                players: action.payload
            }
        case CLEAR_GAME_PLAYERS:
            return {
                ...state,
                players: action.payload
            }
        case SET_CURRENT_GAME_DATE:
            return {
                ...state,
                currentSelectedGameDate: action.payload
            }
        default:
            return state;
    }
};