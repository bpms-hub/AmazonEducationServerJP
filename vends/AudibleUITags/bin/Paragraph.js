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

var Paragraph = (function (_React$Component) {
  _inherits(Paragraph, _React$Component);

  function Paragraph(props) {
    _classCallCheck(this, Paragraph);

    _get(Object.getPrototypeOf(Paragraph.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Paragraph, [{
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-paragraph'];
      if (this.props.cssClass) {
        staticClasses.push(this.props.cssClass);
      }
      if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
      if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
      if (this.props.textAlign) {
        staticClasses.push('bc-text-' + this.props.textAlign);
      }
      if (this.props.textSize) {
        staticClasses.push('bc-size-' + this.props.textSize);
      }
      if (this.props.textColor) {
        staticClasses.push('bc-color-' + this.props.textColor);
      }
      if (this.props.textBold) {
        staticClasses.push('bc-text-bold');
      }
      if (this.props.textCapitalize) {
        staticClasses.push('bc-text-capitalize');
      }
      if (this.props.textEmphasis) {
        staticClasses.push('bc-text-emphasis');
      }
      if (this.props.textQuote) {
        staticClasses.push('bc-text-quote');
      }
      if (this.props.textStrike) {
        staticClasses.push('bc-text-strike');
      }
      if (this.props.textNormal) {
        staticClasses.push('bc-text-normal');
      }

      return _react2['default'].createElement(
        'p',
        { id: this.props.id, className: (0, _classnames2['default'])(staticClasses) },
        this.props.children
      );
    }
  }]);

  return Paragraph;
})(_react2['default'].Component);

Paragraph.propTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  spacing: _react.PropTypes.string,
  spacingTop: _react.PropTypes.string,
  textAlign: _react.PropTypes.string,
  textSize: _react.PropTypes.string,
  textColor: _react.PropTypes.string,
  textBold: _react.PropTypes.bool,
  textCapitalize: _react.PropTypes.bool,
  textEmphasis: _react.PropTypes.bool,
  textQuote: _react.PropTypes.bool,
  textStrike: _react.PropTypes.bool,
  textNormal: _react.PropTypes.bool
};

Paragraph.defaultProps = {
  spacing: 'small',
  spacingTop: 'none'
};

exports['default'] = Paragraph;
module.exports = exports['default'];