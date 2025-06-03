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

var ProdFooter = (function (_React$Component) {
  _inherits(ProdFooter, _React$Component);

  function ProdFooter() {
    _classCallCheck(this, ProdFooter);

    _get(Object.getPrototypeOf(ProdFooter.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ProdFooter, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _AudibleUITags2['default'].Section,
        { backgroundColor: 'secondary', padding: 'medium', paddingTop: 'medium' },
        _react2['default'].createElement(
          'footer',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'medium' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, spacing: 'base', textCapitalize: true, textColor: 'secondary' },
                  'Audible'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base' },
                      'About Audible'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base' },
                      'Affiliates'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base' },
                      'Careers'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base', app: true, url: "/prototypes/brickcity/business-inquiries" },
                      'Business Inquiries'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base', app: true, url: "/prototypes/brickcity/contact" },
                      'Contact Us'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base', app: true, url: "/prototypes/brickcity-mobile" },
                      'Mobile Site'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, spacing: 'base', textCapitalize: true, textColor: 'secondary' },
                  'Find an Audiobook'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                      'Mysteries & Thrillers'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                      'Sci-fi & Fantasy'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                      'History'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                      'Classics'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                      'Bios & Memoirs'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                      'Business'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                      'Self Development'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                      'Romance'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                      'Fiction'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, textColor: 'base', url: "/prototypes/brickcity/category" },
                      'Kids'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, spacing: 'base', textCapitalize: true, textColor: 'secondary' },
                  'Discover More'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base' },
                      'Best Sellers'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base' },
                      'New at Audible'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base' },
                      'eBook at Kindle'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base' },
                      'Whispersync for Voice'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base' },
                      'Foreign Language'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, spacing: 'base', textCapitalize: true, textColor: 'secondary' },
                  'Extras'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, textColor: 'base', url: "/prototypes/brickcity/how-to-listen" },
                      'How to Listen'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base', app: true, url: "/prototypes/brickcity/gift-center" },
                      'Gift Center'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base', app: true, url: "/prototypes/brickcity/redeem-promo" },
                      'Redeem a Promo Code'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, textColor: 'base', url: "/prototypes/brickcity/account-details" },
                      'Account Details'
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'mini' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textSize: 'small' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 8 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  '© Copyright 1997-2015 Audible Inc.'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { type: 'vertical' }),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: '' },
                  'Conditions of Use'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { type: 'vertical' }),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: '' },
                  'Privacy Policy'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4, position: 'last', textAlign: 'right' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  'Available on'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textColor: 'base' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Icon, { heightPx: 15, iconType: 'apple', verticalAlign: 'baseline' })
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textColor: 'base' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Icon, { heightPx: 15, iconType: 'android', verticalAlign: 'baseline' })
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textColor: 'base' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Icon, { heightPx: 15, iconType: 'amazon', verticalAlign: 'baseline' })
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textColor: 'base' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Icon, { heightPx: 15, iconType: 'windows', verticalAlign: 'baseline' })
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Pipe, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textColor: 'base' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Icon, { heightPx: 15, iconType: 'facebook', verticalAlign: 'baseline' })
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textColor: 'base' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Icon, { heightPx: 15, iconType: 'twitter', verticalAlign: 'baseline' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ProdFooter;
})(_react2['default'].Component);

exports['default'] = ProdFooter;
module.exports = exports['default'];