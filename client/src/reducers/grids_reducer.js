export default function(state = {}, action) {
    switch(action.type) {
        case 'CHANGE_GAME_TYPE':
            return {
                ...state,
                grids: action.payload
            }
        default:
            return state;
    }
};