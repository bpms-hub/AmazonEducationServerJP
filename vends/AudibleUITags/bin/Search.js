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

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var Search = (function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    _get(Object.getPrototypeOf(Search.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-search'];
      if (this.props.cssClass) staticClasses.push(this.props.cssClass);
      if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
      if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);

      return _react2['default'].createElement(
        'div',
        { id: this.props.id, className: (0, _classnames2['default'])(staticClasses) },
        _react2['default'].createElement(_TextInput2['default'], {
          id: this.props.nativeId,
          cssClass: this.props.nativeCssClass,
          required: this.props.required,
          placeholder: this.props.placeholder,
          name: this.props.name,
          value: this.props.value,
          maxLength: this.props.maxLength,
          disabled: this.props.status === 'disabled' }),
        _react2['default'].createElement(_Icon2['default'], { iconType: 'search', textColor: 'base' })
      );
    }
  }]);

  return Search;
})(_react2['default'].Component);

Search.propTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  nativeId: _react.PropTypes.string,
  nativeCssClass: _react.PropTypes.string,
  spacing: _react.PropTypes.string,
  spacingTop: _react.PropTypes.string,
  name: _react.PropTypes.string,
  value: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  status: _react.PropTypes.string,
  maxLength: _react.PropTypes.number,
  required: _react.PropTypes.bool
};

exports['default'] = Search;
module.exports = exports['default'];