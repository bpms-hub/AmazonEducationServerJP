'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.changeCurrentTime = changeCurrentTime;
var CHANGE_CURRENT_TIME = 'CHANGE_CURRENT_TIME';

exports.CHANGE_CURRENT_TIME = CHANGE_CURRENT_TIME;

function changeCurrentTime(time) {
    return {
        type: CHANGE_CURRENT_TIME,
        time: time
    };
}