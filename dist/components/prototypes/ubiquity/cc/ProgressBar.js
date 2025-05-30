'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

// eslint-disable-line no-unused-vars

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var ProgressBar = (function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    _get(Object.getPrototypeOf(ProgressBar.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ProgressBar, [{
    key: 'renderText',
    value: function renderText() {

      return _react2['default'].createElement('span', _extends({}, this.props, {
        className: (0, _classnames2['default'])('bc-progressBar-text') }));
    }
  }, {
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-progressBar'];
      var widthPercentage = {
        width: this.props.widthPercentage + '%'
      };
      if (this.props.cssClass) {
        staticClasses.push(this.props.cssClass);
      }
      if (this.props.spacing) staticClasses.push('bc-spacing-' + this.props.spacing);
      if (this.props.spacingTop) staticClasses.push('bc-spacing-top-' + this.props.spacingTop);
      if (this.props.activeState) staticClasses.push('bc-progressBar-active');
      if (this.props.textSize) {
        staticClasses.push('bc-size-' + this.props.textSize);
      }
      if (this.props.textBold) {
        staticClasses.push('bc-text-bold');
      }

      return _react2['default'].createElement(
        'span',
        { id: this.props.id, className: (0, _classnames2['default'])(staticClasses), style: widthPercentage },
        this.props.number && _react2['default'].createElement(
          'span',
          { className: (0, _classnames2['default'])('bc-progressBar-num-icon') },
          this.props.number,
          '.'
        ),
        this.props.checkMark && _react2['default'].createElement(
          'span',
          { className: (0, _classnames2['default'])('bc-progressBar-num-icon') },
          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'check' })
        ),
        this.renderText()
      );
    }
  }]);

  return ProgressBar;
})(_react2['default'].Component);

ProgressBar.propTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  spacing: _react.PropTypes.string,
  spacingTop: _react.PropTypes.string,
  activeState: _react.PropTypes.bool,
  widthPercentage: _react.PropTypes.number.isRequired,
  textSize: _react.PropTypes.string,
  textBold: _react.PropTypes.bool,
  number: _react.PropTypes.string,
  checkMark: _react.PropTypes.bool
};

ProgressBar.defaultProps = {
  widthPercentage: 33.3
};

exports['default'] = ProgressBar;
module.exports = exports['default'];