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

var Divider = (function (_React$Component) {
  _inherits(Divider, _React$Component);

  function Divider(props) {
    _classCallCheck(this, Divider);

    _get(Object.getPrototypeOf(Divider.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Divider, [{
    key: 'render',
    value: function render() {
      var staticClasses = [this.props.type === 'vertical' ? 'bc-divider-vertical' : 'bc-divider-horizontal', 'bc-color-divider-' + this.props.dividerColor];
      if (this.props.cssClass) {
        staticClasses.push(this.props.cssClass);
      }
      if (this.props.spacing) {
        staticClasses.push('bc-spacing-' + this.props.spacing);
      }
      if (this.props.spacingTop) {
        staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
      }
      if (this.props.type) {
        staticClasses.push('bc-divider-' + this.props.type);
      }

      return _react2['default'].createElement('div', {
        id: this.props.id,
        className: (0, _classnames2['default'])(staticClasses) });
    }
  }]);

  return Divider;
})(_react2['default'].Component);

Divider.PropTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  spacing: _react.PropTypes.string,
  spacingTop: _react.PropTypes.string,
  dividerColor: _react.PropTypes.string,
  type: _react.PropTypes.string
};

Divider.defaultProps = {
  dividerColor: 'secondary'
};

exports['default'] = Divider;
module.exports = exports['default'];