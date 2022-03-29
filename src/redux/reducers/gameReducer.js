import { REQUEST_DETAIL_GAME_SUCCESS, REQUEST_LIST_GAME_SUCCESS} from '../actions/gameAction'

const initialState = {
    listGame: [],
    game:{},
}

export default (state = initialState, action ) => {
    switch (action.type) {
        case REQUEST_LIST_GAME_SUCCESS:
            //console.log(SET_LIST_GAME,payload);
            return { ...state, listGame: action.payload };
        case REQUEST_DETAIL_GAME_SUCCESS:
            return {...state, game: action.payload}    
        default:
            return {...state};
    }
}