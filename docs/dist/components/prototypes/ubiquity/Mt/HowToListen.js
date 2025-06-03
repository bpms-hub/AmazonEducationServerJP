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

var _cc = require('../cc');

var _cc2 = _interopRequireDefault(_cc);

var _HeaderProdHeader = require('../Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('../Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

{
  /*
         TO DO:
  
        •Set height with GridRow, equal spacing
        •Line break copy
        •Questions section – linebreak/link
  
  
  
        */}

var HowToListen = (function (_React$Component) {
  _inherits(HowToListen, _React$Component);

  function HowToListen() {
    _classCallCheck(this, HowToListen);

    _get(Object.getPrototypeOf(HowToListen.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(HowToListen, [{
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
            { spacing: 'medium', textAlign: 'center' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              null,
              'How to Listen'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              null,
              'Get started listening on any of the devices supported here'
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'large' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large', textAlign: 'center' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'large', textSize: 'medium' },
              'Smartphones & Tablets'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textAlign: 'center' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridPull: 1, gridUnits: 4 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 6, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { heightCss: '140px', spacingTop: 'none' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/ios._V288437165_.png' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'Apple iOS'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { buttonType: 'primary', spacing: 'mini' },
                    'Get the App'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textSize: 'small' },
                    'Visit the support page'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridPull: 1, gridUnits: 4 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 6, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { heightCss: '140px' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/android._V288437165_.png' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'Android'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { buttonType: 'primary', spacing: 'mini' },
                    'Get the App'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textSize: 'small' },
                    'Visit the support page'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridPull: 1, gridUnits: 4, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 6, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { heightCss: '140px' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/windows._V288437165_.png' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'Windows'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { buttonType: 'primary', spacing: 'mini' },
                    'Get the App'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textSize: 'small' },
                    'Visit the support page'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'large' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large', textAlign: 'center' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'large', textSize: 'medium' },
              'Kindle Devices'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textAlign: 'center' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridPull: 1, gridUnits: 4 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 6, position: 'last', spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { heightCss: '140px', spacingTop: 'none' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/kindle_touch._V288437165_.png' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'none' },
                    'Kindle Touch & Keyboard'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textSize: 'small' },
                    'Visit the support page'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridPull: 1, gridUnits: 4 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 6, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { heightCss: '140px', spacingTop: 'none' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/kindle_1st._V288437165_.png' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'none' },
                    'Kindle Fire 1st Generation'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textSize: 'small' },
                    'Visit the support page'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridPull: 1, gridUnits: 4, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 6, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { heightCss: '140px', spacingTop: 'none' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/kindle_2nd._V288437165_.png' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'none', textSize: 'small' },
                    'Kindle Fire 2nd Generation, Kindle Fire HD, Kindle Fire HDX'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textSize: 'small' },
                    'Visit the support page'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'large' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large', textAlign: 'center' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'large', textSize: 'medium' },
              'Computers & MP3 Players'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textAlign: 'center' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridPull: 1, gridUnits: 4 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 6, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { heightCss: '136px', spacingTop: 'medium' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/itunes._V288437165_.png', verticalAlign: 'top' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'mini' },
                    'Mac & PC Users'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { buttonType: 'primary', spacing: 'mini' },
                    'Get the App'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textSize: 'small' },
                    'Visit the support page'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridPull: 1, gridUnits: 4 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 6, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { heightCss: '150px' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/audible_cloud._V288437165_.png', verticalAlign: 'top' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacingTop: 'mini' },
                    'Audible Cloud Player'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { buttonType: 'primary', spacing: 'mini' },
                    'Get the App'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textSize: 'small' },
                    'Visit the support page'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridPull: 1, gridUnits: 4, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 6, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { heightCss: '90px', spacingTop: 'large' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/howtolisten/impaired._V288437165_.png', verticalAlign: 'top' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'MP3 & Devices for the Visually Imparied'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { buttonType: 'primary', spacing: 'mini' },
                    'Get the App'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textSize: 'small' },
                    'Visit the support page'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'medium', textAlign: 'center' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'small' },
              'Still have questions?'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { textSize: 'small' },
              'Call us directly at: 1-888-283-5051 (USA and Canada) | 1-973-820-0400 (International)',
              _react2['default'].createElement('br', null),
              'Don\'t see your device listed? We have more,',
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                null,
                'learn more here'
              ),
              '.'
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return HowToListen;
})(_react2['default'].Component);

exports['default'] = HowToListen;
module.exports = exports['default'];
/*Title/Headline*/ /*Smartphones*/ /*Kindle*/ /*Computers & MP3 Players*/ /*Questions*/