'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

// eslint-disable-line no-unused-vars

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var SearchFilter = (function (_React$Component) {
  _inherits(SearchFilter, _React$Component);

  function SearchFilter(props) {
    _classCallCheck(this, SearchFilter);

    _get(Object.getPrototypeOf(SearchFilter.prototype), 'constructor', this).call(this, props);
    this.state = {
      showSearch: false,
      value: null
    };
  }

  // clearSearch() {

  // }

  _createClass(SearchFilter, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.refs.input) {
        _react2['default'].findDOMNode(this.refs.input).focus();
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      console.log('changed');
      this.props.onChange(event);
    }
  }, {
    key: 'showSearch',
    value: function showSearch() {
      this.setState({
        showSearch: true
      });
    }
  }, {
    key: 'hideSearch',
    value: function hideSearch(e) {
      this.setState({
        showSearch: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var staticClasses = [];

      return _react2['default'].createElement(
        'span',
        { className: 'bc-relative' },
        _react2['default'].createElement(
          'span',
          { style: {
              position: 'absolute',
              left: 0
            } },
          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'search', onClick: this.showSearch.bind(this) })
        ),
        this.state.showSearch && _react2['default'].createElement(
          'span',
          null,
          _react2['default'].createElement('input', _extends({}, this.props, {
            onChange: this.onChange.bind(this),
            ref: 'input',
            value: this.state.val,
            style: {
              backgroundColor: 'none',
              border: 'none',
              borderBottom: '1px solid #ccc',
              outline: 'none',
              padding: '0 20px'
            } })),
          _react2['default'].createElement(
            'span',
            { style: {
                position: 'absolute',
                right: 0
              } },
            _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'close', onClick: this.hideSearch.bind(this) })
          )
        )
      );
    }
  }]);

  return SearchFilter;
})(_react2['default'].Component);

SearchFilter.propTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  onChange: _react.PropTypes['function']
};

exports['default'] = SearchFilter;
module.exports = exports['default'];