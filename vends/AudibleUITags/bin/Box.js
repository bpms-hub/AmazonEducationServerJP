'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

var Box = (function (_React$Component) {
  _inherits(Box, _React$Component);

  function Box(props) {
    _classCallCheck(this, Box);

    _get(Object.getPrototypeOf(Box.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Box, [{
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-box'];

      if (this.props.cssClass) staticClasses.push(this.props.cssClass);
      if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
      if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
      if (this.props.paddingSize) staticClasses.push('bc-box-padding-' + this.props.paddingSize);
      if (this.props.backgroundColor) staticClasses.push('bc-color-background-' + this.props.backgroundColor);
      if (this.props.textSize) staticClasses.push('bc-size-' + this.props.textSize);
      if (this.props.textColor) staticClasses.push('bc-color-' + this.props.textColor);
      if (this.props.textAlign) staticClasses.push('bc-text-' + this.props.textAlign);
      if (this.props.hasBorder) staticClasses.push('bc-box-border bc-color-border-base');
      if (this.props.hasShadow) staticClasses.push('bc-shadow');

      var inlineStyles = {
        height: this.props.heightCss,
        background: this.props.background ? this.props.background : null
      };
      return _react2['default'].createElement(
        'div',
        { className: (0, _classnames2['default'])(staticClasses), id: this.props.id, style: inlineStyles, role: this.props.role },
        this.props.children
      );
    }
  }]);

  return Box;
})(_react2['default'].Component);

Box.propTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  spacing: _react.PropTypes.string,
  spacingTop: _react.PropTypes.string,
  paddingSize: _react.PropTypes.string,
  heightCss: _react.PropTypes.string,
  backgroundColor: _react.PropTypes.string,
  background: _react.PropTypes.string,
  textSize: _react.PropTypes.string,
  textColor: _react.PropTypes.string,
  textAlign: _react.PropTypes.string,
  role: _react.PropTypes.string,
  hasBorder: _react.PropTypes.bool,
  hasShadow: _react.PropTypes.bool
};

Box.defaultProps = {
  paddingSize: "base"
};

exports['default'] = Box;
module.exports = exports['default'];