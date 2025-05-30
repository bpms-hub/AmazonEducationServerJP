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

var TextInput = (function (_React$Component) {
  _inherits(TextInput, _React$Component);

  function TextInput(props) {
    _classCallCheck(this, TextInput);

    _get(Object.getPrototypeOf(TextInput.prototype), 'constructor', this).call(this, props);
  }

  _createClass(TextInput, [{
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-input', 'bc-color-border-base', 'bc-color-base', 'bc-color-background-base'];
      if (this.props.cssClass) staticClasses.push(this.props.cssClass);
      if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
      if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
      if (this.props.status) staticClasses.push('bc-form-' + this.props.status);
      if (this.props.inline) staticClasses.push('bc-input-inline');

      return _react2['default'].createElement('input', _extends({}, this.props, {
        id: this.props.id,
        className: (0, _classnames2['default'])(staticClasses),
        type: this.props.type,
        required: this.props.required,
        placeholder: this.props.placeholder,
        name: this.props.name,
        value: this.props.value,
        maxLength: this.props.maxLength,
        disabled: this.props.status === 'disabled' }));
    }
  }]);

  return TextInput;
})(_react2['default'].Component);

TextInput.propTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  spacing: _react.PropTypes.string,
  spacingTop: _react.PropTypes.string,
  name: _react.PropTypes.string,
  type: _react.PropTypes.string,
  value: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  status: _react.PropTypes.string,
  maxLength: _react.PropTypes.number,
  required: _react.PropTypes.bool,
  inline: _react.PropTypes.bool
};

TextInput.defaultProps = {
  type: 'text'
};

exports['default'] = TextInput;
module.exports = exports['default'];