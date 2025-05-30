import {CHANGE_CURRENT_TIME} from '../actions/player'

const initialState = {
    currentSongIndex: null,
    currentTime: 0,
    isPlaying: false,
    selectedPlaylists: []
};

function player(state = initialState, action) {
    switch(action.type) {
    case CHANGE_CURRENT_TIME:
        return Object.assign({}, state, {
            currentTime: action.time
        });

    default:
        return state;
    }
}

export default player;