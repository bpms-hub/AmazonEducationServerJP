'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

// eslint-disable-line no-unused-vars

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = require('react-router');

var Button = (function () {
  function Button() {
    _classCallCheck(this, Button);
  }

  _createClass(Button, [{
    key: 'disableClick',
    value: function disableClick(e) {
      e.preventDefault();
    }
  }, {
    key: 'renderAnchor',
    value: function renderAnchor() {
      if (this.props.app) {
        return _react2['default'].createElement(
          _reactRouter.Link,
          _extends({}, this.props, {
            className: 'edu-button-text',
            to: this.props.url,
            disabled: this.props.disabled,
            onClick: this.props.disabled ? this.disableClick.bind(this) : null,
            role: 'button' }),
          this.props.children
        );
      } else {
        return _react2['default'].createElement(
          'a',
          _extends({}, this.props, {
            className: 'edu-button-text',
            href: this.props.url,
            disabled: this.props.disabled,
            onClick: this.props.disabled ? this.disableClick.bind(this) : null,
            role: 'button' }),
          this.props.children
        );
      }
    }
  }, {
    key: 'renderButton',
    value: function renderButton() {
      return _react2['default'].createElement(
        'button',
        _extends({}, this.props, {
          className: 'edu-button-text',
          disabled: this.props.disabled,
          type: this.props.htmlButtonType,
          'data-sitecatalyst': this.props.siteCatalyst }),
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var staticClasses = ['edu-button'];
      if (this.props.cssClass) {
        staticClasses.push(this.props.cssClass);
      }
      if (this.props.spacing) staticClasses.push('edu-spacing-' + this.props.spacing);
      if (this.props.spacingTop) staticClasses.push('edu-spacing-top-' + this.props.spacingTop);
      if (this.props.size) staticClasses.push('edu-button-' + this.props.size);
      if (this.props.buttonType) staticClasses.push('edu-button-' + this.props.buttonType);
      if (this.props.inverse) staticClasses.push('edu-button-inverse');
      if (this.props.inline) staticClasses.push('edu-button-inline');
      if (this.props.disabled) staticClasses.push('edu-button-disabled');

      var renderButtonType = this.props.url ? 'renderAnchor' : 'renderButton';

      return _react2['default'].createElement(
        'span',
        { id: this.props.id, className: (0, _classnames2['default'])(staticClasses) },
        this[renderButtonType]()
      );
    }
  }]);

  return Button;
})();

Button.propTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  spacing: _react.PropTypes.string,
  spacingTop: _react.PropTypes.string,
  buttonType: _react.PropTypes.string,
  inverse: _react.PropTypes.bool,
  inline: _react.PropTypes.bool,
  htmlButtonType: _react.PropTypes.string,
  value: _react.PropTypes.string,
  size: _react.PropTypes.string,
  url: _react.PropTypes.string,
  disabled: _react.PropTypes.string,
  siteCatalyst: _react.PropTypes.string
};

exports['default'] = Button;
module.exports = exports['default'];