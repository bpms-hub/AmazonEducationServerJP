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

var RibbonPlayer = (function (_React$Component) {
  _inherits(RibbonPlayer, _React$Component);

  function RibbonPlayer(props) {
    _classCallCheck(this, RibbonPlayer);

    _get(Object.getPrototypeOf(RibbonPlayer.prototype), 'constructor', this).call(this, props);
  }

  _createClass(RibbonPlayer, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'span',
        { style: {
            bottom: 0,
            left: 0,
            right: 0,
            position: 'fixed'
          } },
        _react2['default'].createElement(_AudibleUITags2['default'].Meter, { meterHeight: 2, percentage: 16 }),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Box,
          { backgroundColor: 'secondary', paddingSize: 'none' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 8 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { onClick: this.props.onClickAsin },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { verticalAlign: 'top', imageWidth: '50px', source: _dataPrototypesMcdonaldsLibraryJson2['default'][this.props.activeBook].product_images[500] })
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
              _react2['default'].createElement(
                'div',
                { className: 'bc-pub-inline-block bc-pub-align-middle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacingTop: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textSize: 'small' },
                    _dataPrototypesMcdonaldsLibraryJson2['default'][this.props.activeBook].title
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textSize: 'mini', textColor: 'secondary' },
                    'Audio Sample'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 4, position: 'last', textAlign: 'right', spacingTop: 'small' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                null,
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '14px', verticalAlign: 'middle', source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/refresh_bk._V288162041_.svg' })
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
              this.props.isPlaying ? _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { onClick: this.props.onClickPause, textColor: 'link' },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'pause', iconSize: 'medium' })
              ) : _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { onClick: this.props.onClickPlay },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '20px', verticalAlign: 'middle', source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/play._V288168872_.svg' })
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                null,
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '14px', verticalAlign: 'middle', source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/player/temp/refresh_fwd._V288163336_.svg' })
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' })
            )
          )
        )
      );
    }
  }]);

  return RibbonPlayer;
})(_react2['default'].Component);

RibbonPlayer.PropTypes = {
  activeBook: _react.PropTypes.string,
  onClickPause: _react.PropTypes.func,
  onClickPlay: _react.PropTypes.func,
  onClickAsin: _react.PropTypes.func
};

exports['default'] = RibbonPlayer;
module.exports = exports['default'];