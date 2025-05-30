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

var _LetterSpace = require('./LetterSpace');

var _LetterSpace2 = _interopRequireDefault(_LetterSpace);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var ToggleSwitch = (function (_React$Component) {
  _inherits(ToggleSwitch, _React$Component);

  function ToggleSwitch(props) {
    _classCallCheck(this, ToggleSwitch);

    _get(Object.getPrototypeOf(ToggleSwitch.prototype), 'constructor', this).call(this, props);
    this.state = {
      checked: this.props.checked
    };
  }

  _createClass(ToggleSwitch, [{
    key: 'handleChecked',
    value: function handleChecked(event) {
      this.setState({
        checked: !this.state.checked
      });
      this.props.onChange(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-switch-row'];
      if (this.props.cssClass) staticClasses.push(this.props.cssClass);

      return _react2['default'].createElement(
        'div',
        { id: this.props.outerId, className: (0, _classnames2['default'])(staticClasses) },
        _react2['default'].createElement(
          'label',
          { className: 'bc-switch-label' },
          this.props.children,
          _react2['default'].createElement('input', _extends({}, this.props, {
            onChange: this.handleChecked.bind(this),
            id: this.props.inputId,
            className: 'bc-switch-input',
            type: 'checkbox',
            name: this.props.name,
            disabled: this.props.disabled,
            checked: this.state.checked })),
          _react2['default'].createElement(
            'div',
            { className: 'bc-switch' },
            _react2['default'].createElement('a', { className: 'bc-switch-control' })
          ),
          _react2['default'].createElement(_LetterSpace2['default'], { size: 'mini' }),
          _react2['default'].createElement(
            _Text2['default'],
            { textColor: 'base' },
            this.state.checked ? this.props.labelOn : this.props.labelOff
          )
        )
      );
    }
  }]);

  return ToggleSwitch;
})(_react2['default'].Component);

ToggleSwitch.propTypes = {
  inputId: _react.PropTypes.string,
  outerId: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  label: _react.PropTypes.string,
  name: _react.PropTypes.string,
  checked: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool
};

exports['default'] = ToggleSwitch;
module.exports = exports['default'];