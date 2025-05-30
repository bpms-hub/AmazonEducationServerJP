'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var _ubiquityCc = require('../ubiquity/cc');

var _ubiquityCc2 = _interopRequireDefault(_ubiquityCc);

var _dataPrototypesMcdonaldsLibraryJson = require('../../../data/prototypes/mcdonaldsLibrary.json');

var _dataPrototypesMcdonaldsLibraryJson2 = _interopRequireDefault(_dataPrototypesMcdonaldsLibraryJson);

var AudioInterface = (function (_React$Component) {
  _inherits(AudioInterface, _React$Component);

  function AudioInterface(props) {
    _classCallCheck(this, AudioInterface);

    _get(Object.getPrototypeOf(AudioInterface.prototype), 'constructor', this).call(this, props);
  }

  _createClass(AudioInterface, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('mounted', this.refs);
      this.refs.audioPlayer.play();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log('updated', this.props.isPlaying);
      this.props.isPlaying ? this.refs.audioPlayer.play() : this.refs.audioPlayer.pause();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('audio', { ref: 'audioPlayer', src: this.props.source });
    }
  }]);

  return AudioInterface;
})(_react2['default'].Component);

AudioInterface.PropTypes = {
  isPlaying: _react.PropTypes.bool,
  source: _react.PropTypes.string
};

exports['default'] = AudioInterface;
module.exports = exports['default'];