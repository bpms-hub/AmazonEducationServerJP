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

var _reactRouter = require('react-router');

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var Button = (function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Button, [{
    key: 'disableClick',
    value: function disableClick(e) {
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-button', this.props.size === 'small' ? 'bc-size-small' : 'bc-size-base', this.props.buttonType ? 'bc-button-' + this.props.buttonType : 'bc-button-default'];
      if (this.props.cssClass) {
        staticClasses.push(this.props.cssClass);
      }
      if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
      if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
      if (this.props.size) staticClasses.push('bc-button-' + this.props.size);
      if (this.props.inline) staticClasses.push('bc-button-inline');
      if (this.props.disabled) staticClasses.push('bc-disabled');
      if (this.props.iconType && this.props.size != 'small') staticClasses.push('bc-button-has-icon');

      var Component = this.props.url ? this.props.app ? _reactRouter.Link : 'a' : 'button';

      return _react2['default'].createElement(
        Component,
        _extends({}, this.props, {
          id: this.props.id,
          className: (0, _classnames2['default'])(staticClasses),
          to: this.props.url && this.props.app ? this.props.url : null,
          href: this.props.url && !this.props.app ? this.props.url : null,
          onClick: this.props.disabled ? this.disableClick.bind(this) : this.props.onClick,
          disabled: this.props.disabled,
          type: this.props.htmlButtonType,
          role: 'button',
          'data-sitecatalyst': this.props.siteCatalyst }),
        this.props.iconType && this.props.size != 'small' && _react2['default'].createElement(
          'span',
          { className: 'bc-button-icon' },
          _react2['default'].createElement(_Icon2['default'], { iconType: this.props.iconType })
        ),
        _react2['default'].createElement(
          'span',
          { className: 'bc-button-text' },
          this.props.children
        )
      );
    }
  }]);

  return Button;
})(_react2['default'].Component);

Button.propTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  spacing: _react.PropTypes.string,
  spacingTop: _react.PropTypes.string,
  buttonType: _react.PropTypes.string,
  iconType: _react.PropTypes.string,
  inline: _react.PropTypes.bool,
  app: _react.PropTypes.bool,
  htmlButtonType: _react.PropTypes.string,
  value: _react.PropTypes.string,
  size: _react.PropTypes.string,
  url: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  siteCatalyst: _react.PropTypes.string
};

exports['default'] = Button;
module.exports = exports['default'];