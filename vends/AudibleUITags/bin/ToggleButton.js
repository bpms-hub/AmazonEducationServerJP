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

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var ToggleButton = (function (_React$Component) {
  _inherits(ToggleButton, _React$Component);

  function ToggleButton(props) {
    _classCallCheck(this, ToggleButton);

    _get(Object.getPrototypeOf(ToggleButton.prototype), 'constructor', this).call(this, props);
    this.state = {
      active: this.props.active
    };
  }

  _createClass(ToggleButton, [{
    key: 'handleSwitch',
    value: function handleSwitch() {
      this.setState({
        active: !this.state.active });
    }
  }, {
    key: 'render',
    /* toggle processing */
    value: function render() {
      return _react2['default'].createElement(
        _Button2['default'],
        _extends({}, this.props, {
          buttonType: this.state.active ? 'primary' : 'toggle',
          size: 'small',
          checked: this.props.checked,
          disabled: this.props.disabled,
          id: this.props.id,
          cssClass: this.props.cssClass,
          spacing: this.props.spacing,
          spacingTop: this.props.spacingTop,
          onClick: this.handleSwitch.bind(this) }),
        this.state.active ? this.props.activeText : this.props.inactiveText
      );
    }
  }]);

  return ToggleButton;
})(_react2['default'].Component);

ToggleButton.propTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  spacing: _react.PropTypes.string,
  spacingTop: _react.PropTypes.string,
  checked: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  activeText: _react.PropTypes.string,
  inactiveText: _react.PropTypes.string
};

exports['default'] = ToggleButton;
module.exports = exports['default'];