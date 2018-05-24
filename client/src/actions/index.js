import {
    CHANGE_GAME_TYPE
} from './types';

export function gameType(type) {
    return {
        type: CHANGE_GAME_TYPE,
        payload: type
    }
};