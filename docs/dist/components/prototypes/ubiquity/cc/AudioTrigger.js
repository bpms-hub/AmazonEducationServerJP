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

var AudioTrigger = (function (_React$Component) {
  _inherits(AudioTrigger, _React$Component);

  function AudioTrigger(props) {
    _classCallCheck(this, AudioTrigger);

    _get(Object.getPrototypeOf(AudioTrigger.prototype), 'constructor', this).call(this, props);
  }

  _createClass(AudioTrigger, [{
    key: 'onClickDisabled',
    value: function onClickDisabled(e) {
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-audio-trigger'];
      if (this.props.cssClass) staticClasses.push(this.props.cssClass);
      if (this.props.hasCountdown && this.props.isPlaying) staticClasses.push('bc-audio-trigger-countdown');
      if (this.props.disabled) staticClasses.push('bc-disabled');

      return _react2['default'].createElement(
        'span',
        _extends({}, this.props, { className: (0, _classnames2['default'])(staticClasses), onClick: this.props.disabled ? this.onClickDisabled.bind(this) : this.props.onClick }),
        _react2['default'].createElement(
          'span',
          { className: 'bc-audio-trigger-cta' },
          this.props.isLoading ? _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-audio-trigger-spinner', block: true, imageHeight: 33, imageWidth: 33, source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/spinner._V289264237_.svg' }) : _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: !this.props.isPlaying ? 'play' : 'pause', textColor: 'inverse', verticalAlign: 'middle' })
        ),
        this.props.isPlaying && this.props.hasCountdown && _react2['default'].createElement(
          'span',
          { className: 'bc-audio-trigger-text' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            null,
            '22:22'
          )
        )
      );
    }
  }]);

  return AudioTrigger;
})(_react2['default'].Component);

AudioTrigger.propTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  isPlaying: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  hasCountdown: _react.PropTypes.bool
};

exports['default'] = AudioTrigger;
module.exports = exports['default'];