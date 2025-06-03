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

var bulkSelect = (function (_React$Component) {
  _inherits(bulkSelect, _React$Component);

  function bulkSelect(props) {
    _classCallCheck(this, bulkSelect);

    _get(Object.getPrototypeOf(bulkSelect.prototype), 'constructor', this).call(this, props);

    this.state = {
      isHovered: false
    };
  }

  _createClass(bulkSelect, [{
    key: 'toggleHover',
    value: function toggleHover(state) {
      this.setState({
        isHovered: state
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, {
          className: (0, _classnames2['default'])(["bc-relative"]),
          onMouseEnter: this.toggleHover.bind(this, true),
          onMouseLeave: this.toggleHover.bind(this, false) }),
        _react2['default'].createElement(
          'div',
          { style: {
              position: 'absolute',
              top: 16,
              left: 16,
              zIndex: 3
            } },
          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { onChange: this.props.onChangeBulkSelector, checked: this.props.isSelected ? true : false })
        ),
        this.props.children,
        this.props.isSelected && _react2['default'].createElement('div', { style: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2
          } })
      );
    }
  }]);

  return bulkSelect;
})(_react2['default'].Component);

bulkSelect.propTypes = {
  isSelected: _react.PropTypes.bool,
  activeBook: _react.PropTypes.bool,
  viewType: _react.PropTypes.string
};

exports['default'] = bulkSelect;
module.exports = exports['default'];