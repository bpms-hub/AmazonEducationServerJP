'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// eslint-disable-line no-unused-vars

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _DropdownOption = require('./DropdownOption');

var _DropdownOption2 = _interopRequireDefault(_DropdownOption);

var Dropdown = (function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    _get(Object.getPrototypeOf(Dropdown.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Dropdown, [{
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-dropdown'];
      if (this.props.cssClass) staticClasses.push(this.props.cssClass);
      if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
      if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
      if (this.props.inline) staticClasses.push('bc-dropdown-inline');

      var nativeClasses = ['bc-input', 'bc-color-base', 'bc-color-border-base', 'bc-color-background-base'];
      if (this.props.nativeCssClass) nativeClasses.push(this.props.nativeCssClass);
      if (this.props.inline) nativeClasses.push('bc-input-inline');

      return _react2['default'].createElement(
        'span',
        { id: this.props.id, className: (0, _classnames2['default'])(staticClasses) },
        _react2['default'].createElement(
          'select',
          _extends({}, this.props, {
            id: this.props.nativeId,
            className: (0, _classnames2['default'])(nativeClasses),
            disabled: this.props.disabled,
            name: this.props.name }),
          this.props.children
        ),
        _react2['default'].createElement(_Icon2['default'], { iconType: 'chevron-down', textColor: 'base' })
      );
    }
  }]);

  return Dropdown;
})(_react2['default'].Component);

Dropdown.propTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  nativeId: _react.PropTypes.string,
  nativeCssClass: _react.PropTypes.string,
  spacing: _react.PropTypes.string,
  spacingTop: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  name: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  inline: _react.PropTypes.bool
};

exports['default'] = Dropdown;
module.exports = exports['default'];