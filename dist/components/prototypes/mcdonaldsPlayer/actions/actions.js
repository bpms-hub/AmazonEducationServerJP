/*
 * action types
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.addTodo = addTodo;
exports.completeTodo = completeTodo;
exports.setVisibilityFilter = setVisibilityFilter;
var ADD_TODO = 'ADD_TODO';
exports.ADD_TODO = ADD_TODO;
var COMPLETE_TODO = 'COMPLETE_TODO';
exports.COMPLETE_TODO = COMPLETE_TODO;
var SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

exports.SET_VISIBILITY_FILTER = SET_VISIBILITY_FILTER;
var VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

exports.VisibilityFilters = VisibilityFilters;

function addTodo(text) {
  return { type: ADD_TODO, text: text };
}

function completeTodo(index) {
  return { type: COMPLETE_TODO, index: index };
}

function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter: filter };
}