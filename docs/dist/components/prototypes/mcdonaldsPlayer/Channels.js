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

var _RibbonPlayer = require('./RibbonPlayer');

var _RibbonPlayer2 = _interopRequireDefault(_RibbonPlayer);

var Channels = (function (_React$Component) {
  _inherits(Channels, _React$Component);

  function Channels(props) {
    _classCallCheck(this, Channels);

    _get(Object.getPrototypeOf(Channels.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Channels, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'span',
        null,
        _dataPrototypesMcdonaldsLibraryJson2['default'].map(function (product, index) {
          return _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            { app: true, url: "/prototypes/mcdonalds-library/player", key: index },
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { paddingSize: 'small' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 5 },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '100%', imageHeight: '50%', cssClass: 'bc-product-asin', source: product.product_images[500] })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 7, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { textColor: 'base', headingLevel: 3, textNormal: true },
                    product.title
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { textSize: 'small', listType: 'nostyle', textColor: 'secondary' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      'By Author'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      'Narrated by Narrator'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      '22h 38m left'
                    )
                  )
                )
              )
            )
          );
        })
      );
    }
  }]);

  return Channels;
})(_react2['default'].Component);

exports['default'] = Channels;
module.exports = exports['default'];