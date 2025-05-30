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

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _LetterSpace = require('./LetterSpace');

var _LetterSpace2 = _interopRequireDefault(_LetterSpace);

var Checkbox = (function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    _get(Object.getPrototypeOf(Checkbox.prototype), 'constructor', this).call(this, props);
    this.state = {
      value: this.props.checked
    };
  }

  _createClass(Checkbox, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        value: event.target.checked
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-checkbox'];
      if (this.props.cssClass) staticClasses.push(this.props.cssClass);
      if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
      if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
      if (this.props.disabled) staticClasses.push('bc-disabled');

      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { id: this.props.outerId, className: (0, _classnames2['default'])(staticClasses) }),
        _react2['default'].createElement(
          'label',
          null,
          _react2['default'].createElement('input', {
            ref: 'checkbox',
            id: this.props.inputId,
            type: 'checkbox',
            name: this.props.name,
            value: this.props.value,
            disabled: this.props.disabled,
            checked: this.state.value,
            onChange: this.handleChange.bind(this) }),
          _react2['default'].createElement(
            'span',
            {
              className: (0, _classnames2['default'])(["bc-checkbox-icon", this.state.value ? "bc-color-border-active" : "bc-color-border-base", this.state.value ? "bc-color-background-active" : null]) },
            _react2['default'].createElement(
              'span',
              { className: 'bc-checkbox-icon-aligner' },
              this.state.value && _react2['default'].createElement(_Icon2['default'], { iconType: 'check' })
            )
          ),
          _react2['default'].createElement(_LetterSpace2['default'], { size: 'mini' }),
          _react2['default'].createElement(
            _Text2['default'],
            { textColor: 'base' },
            this.props.label
          )
        )
      );
    }
  }]);

  return Checkbox;
})(_react2['default'].Component);

Checkbox.propTypes = {
  inputId: _react.PropTypes.string,
  outerId: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  spacing: _react.PropTypes.string,
  spacingTop: _react.PropTypes.string,
  value: _react.PropTypes.string,
  name: _react.PropTypes.string,
  checked: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool
};

exports['default'] = Checkbox;
module.exports = exports['default'];