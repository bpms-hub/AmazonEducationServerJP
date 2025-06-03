'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _actionsPlayer = require('../actions/player');

var initialState = {
    currentSongIndex: null,
    currentTime: 0,
    isPlaying: false,
    selectedPlaylists: []
};

function player(state, action) {
    if (state === undefined) state = initialState;

    switch (action.type) {
        case _actionsPlayer.CHANGE_CURRENT_TIME:
            return Object.assign({}, state, {
                currentTime: action.time
            });

        default:
            return state;
    }
}

exports['default'] = player;
module.exports = exports['default'];