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

var GridRow = (function (_React$Component) {
  _inherits(GridRow, _React$Component);

  function GridRow(props) {
    _classCallCheck(this, GridRow);

    _get(Object.getPrototypeOf(GridRow.prototype), 'constructor', this).call(this, props);
  }

  _createClass(GridRow, [{
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-row'];
      if (this.props.cssClass) staticClasses.push(this.props.cssClass);
      if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
      if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
      if (this.props.padding) staticClasses.push('bc-padding-' + this.props.padding);
      if (this.props.paddingTop) staticClasses.push('bc-padding-top-' + this.props.paddingTop);
      if (this.props.backgroundColor) staticClasses.push('bc-color-background-' + this.props.backgroundColor);
      if (this.props.textSize) staticClasses.push('bc-size-' + this.props.textSize);
      if (this.props.textColor) staticClasses.push('bc-color-' + this.props.textColor);
      if (this.props.textAlign) staticClasses.push('bc-text-' + this.props.textAlign);
      if (this.props.verticalAlign) staticClasses.push('bc-grid-vertical-align ' + 'bc-grid-vertical-align-' + this.props.verticalAlign);

      var inlineStyles = {
        height: this.props.heightCss
      };

      return _react2['default'].createElement(
        'div',
        { id: this.props.id, className: (0, _classnames2['default'])(staticClasses), style: inlineStyles, role: this.props.role },
        this.props.children
      );
    }
  }]);

  return GridRow;
})(_react2['default'].Component);

GridRow.propTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  spacing: _react.PropTypes.string,
  spacingTop: _react.PropTypes.string,
  padding: _react.PropTypes.string,
  paddingTop: _react.PropTypes.string,
  backgroundColor: _react.PropTypes.string,
  textSize: _react.PropTypes.string,
  textColor: _react.PropTypes.string,
  textAlign: _react.PropTypes.string,
  heightCss: _react.PropTypes.string,
  verticalAlign: _react.PropTypes.string,
  role: _react.PropTypes.string
};

exports['default'] = GridRow;
module.exports = exports['default'];