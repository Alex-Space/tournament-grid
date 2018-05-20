const initialState = {
    gameTypes: [ '1 vs 1', '2 vs 2', '3 vs 3', '5 vs 5'],
    gameTypeSelected: '1 vs 1'
};

export default function(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_GAME_TYPE':
            return {
                ...state,
                gameTypeSelected: action.payload
            }
        default:
            return state;
    }
};