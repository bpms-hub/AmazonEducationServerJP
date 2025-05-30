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

var Section = (function (_React$Component) {
  _inherits(Section, _React$Component);

  function Section(props) {
    _classCallCheck(this, Section);

    _get(Object.getPrototypeOf(Section.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Section, [{
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-section'];
      if (this.props.cssClass) staticClasses.push(this.props.cssClass);
      if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
      if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
      if (this.props.padding) staticClasses.push('bc-padding-' + this.props.padding);
      if (this.props.paddingTop) staticClasses.push('bc-padding-top-' + this.props.paddingTop);
      if (this.props.textAlign) staticClasses.push('bc-text-' + this.props.textAlign);
      if (this.props.backgroundColor) staticClasses.push('bc-color-background-' + this.props.backgroundColor);
      if (this.props.textSize) staticClasses.push('bc-size-' + this.props.textSize);
      if (this.props.textColor) staticClasses.push('bc-color-' + this.props.textColor);

      var inlineStyles = {
        height: this.props.heightCss,
        background: this.props.background ? this.props.background : null
      };

      return _react2['default'].createElement(
        'div',
        { id: this.props.id, className: (0, _classnames2['default'])(staticClasses), style: inlineStyles, role: this.props.role },
        this.props.children
      );
    }
  }]);

  return Section;
})(_react2['default'].Component);

Section.propTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  spacing: _react.PropTypes.string,
  spacingTop: _react.PropTypes.string,
  padding: _react.PropTypes.string,
  paddingTop: _react.PropTypes.string,
  textSize: _react.PropTypes.string,
  textColor: _react.PropTypes.string,
  backgroundColor: _react.PropTypes.string,
  background: _react.PropTypes.string,
  role: _react.PropTypes.string,
  textAlign: _react.PropTypes.string
};

exports['default'] = Section;
module.exports = exports['default'];