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

var _HeaderProdHeader = require('./Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('./Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

var DeviceVideo = (function (_React$Component) {
  _inherits(DeviceVideo, _React$Component);

  function DeviceVideo() {
    _classCallCheck(this, DeviceVideo);

    _get(Object.getPrototypeOf(DeviceVideo.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DeviceVideo, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'base', textAlign: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                null,
                'Audible on your Android Device'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { fixedColumn: 'left', fixedColumnWidth: 0, spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { columnPadding: '0', fixedColumn: 'left', side: 'left' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/devices/video._V288437043_.jpg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'base' },
                  'Scene'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 9 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listType: 'nostyle' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Getting Started'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Player Feature'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Other Player Features'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Purchase & Shop'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Stats, Badges & News'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Settings & Support'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listType: 'nostyle' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      '0s'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      '56s'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      '1m45s'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      '2m16s'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      '2m29s'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      '3m14s'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3, position: 'last', spacingTop: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textSize: 'medium' },
                    'Still Have Questions?'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Call us directly at:'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    '1-888-283-5051 (USA and Canada)'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    '1-973-820-0400 (International)'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    null,
                    'FAQs and Help Center'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { fixedColumn: 'left', fixedColumnWidth: 0 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { columnPadding: '0', fixedColumn: 'left', side: 'left' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { buttonType: 'primary' },
                  'Download App'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { columnPadding: '30', fixedColumn: 'right', side: 'left' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, spacingTop: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                  'or'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4 },
                _react2['default'].createElement(_AudibleUITags2['default'].Search, { placeholder: 'Enter your mobile number or email' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { columnPadding: '0', fixedColumn: 'left', side: 'left' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { buttonType: 'primary' },
                  'Send link'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return DeviceVideo;
})(_react2['default'].Component);

exports['default'] = DeviceVideo;
module.exports = exports['default'];
/*Hero Unit*/ /*Great Listen Guarantee*/