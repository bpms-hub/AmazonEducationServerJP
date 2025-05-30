'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _redux = require('redux');

var _reducersPlayer = require('../reducers/player');

var _reducersPlayer2 = _interopRequireDefault(_reducersPlayer);

var rootReducer = (0, _redux.combineReducers)({
    player: _reducersPlayer2['default']
});

exports['default'] = rootReducer;
module.exports = exports['default'];