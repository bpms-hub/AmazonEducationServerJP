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

var _cc = require('./cc');

var _cc2 = _interopRequireDefault(_cc);

var _HeaderProdHeaderMobile = require('./Header/ProdHeaderMobile');

var _HeaderProdHeaderMobile2 = _interopRequireDefault(_HeaderProdHeaderMobile);

var _FooterProdFooterMobile = require('./Footer/ProdFooterMobile');

var _FooterProdFooterMobile2 = _interopRequireDefault(_FooterProdFooterMobile);

var _dataPrototypesProductsJson = require('../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var ProductVersionsMobile = (function (_React$Component) {
  _inherits(ProductVersionsMobile, _React$Component);

  function ProductVersionsMobile(props, context) {
    _classCallCheck(this, ProductVersionsMobile);

    _get(Object.getPrototypeOf(ProductVersionsMobile.prototype), 'constructor', this).call(this, props, context);
  }

  _createClass(ProductVersionsMobile, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeaderMobile2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: "base" }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity-mobile/pdp/" + _dataPrototypesProductsJson2['default'][0].asin },
              'PDP'
            )
          ),
          _react2['default'].createElement('br', null)
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { textAlign: 'center' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacingTop: 'base', spacing: 'mini' },
            _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            null,
            'Book Title Name Will Go Here'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'small' },
            'by ',
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              null,
              'Book Author Name'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'medium' },
            _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 4.8, numRatings: 20535, showAverageRating: true })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].List,
            { listType: 'nostyle', spacing: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              { spacing: 'micro' },
              _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'microphone', verticalAlign: 'middle' }),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                null,
                'Book Narrator Name'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              { spacing: 'micro' },
              _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'clock', verticalAlign: 'middle' }),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                null,
                '23 hrs & 38 mins, Unabridged'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              { spacing: 'micro' },
              _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'series', verticalAlign: 'middle' }),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                null,
                'Series Name Here'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              null,
              _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'whispersync', verticalAlign: 'middle' }),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                null,
                'Whispersync for Voice'
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: "base" }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity-mobile/best-sellers" },
              'Best Sellers'
            )
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 80 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 80, side: 'left', spacing: "small" },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { app: true, url: '/prototypes/brickcity/pdp' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/search/cover._V288436798_.jpg' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', side: 'right', spacing: 'small', columnPadding: '10px' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listDirection: 'nostyle', textSize: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'First Meetings: In the Enderverse'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'by Orson Scott Card'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridRow,
                    { fixedColumn: 'left', fixedColumnWidth: 25 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', fixedColumnWidth: 25, side: 'left' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'microphone' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', side: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridRow,
                    { fixedColumn: 'left', fixedColumnWidth: 25 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', fixedColumnWidth: 25, side: 'left' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'clock' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', side: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '5 hrs & 18 mins, Unabridged'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridRow,
                    { fixedColumn: 'left', fixedColumnWidth: 25 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', fixedColumnWidth: 25, side: 'left' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'whispersync' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', side: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Whispersync for Voice'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Release: 06-23-15'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Publisher: Blackstone Audio'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 4.8, iconColor: 'state', showAverageRating: true })
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: "base" }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity-mobile/series-list" },
              'Series List'
            )
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 80 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 80, side: 'left', spacing: "small" },
              _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', side: 'right', spacing: 'small', columnPadding: '10px' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listDirection: 'nostyle', textSize: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'First Meetings: In the Enderverse'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'by Orson Scott Card'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridRow,
                    { fixedColumn: 'left', fixedColumnWidth: 25 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', fixedColumnWidth: 25, side: 'left' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'microphone' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', side: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridRow,
                    { fixedColumn: 'left', fixedColumnWidth: 25 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', fixedColumnWidth: 25, side: 'left' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'clock' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', side: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '5 hrs & 18 mins, Unabridged'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridRow,
                    { fixedColumn: 'left', fixedColumnWidth: 25 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', fixedColumnWidth: 25, side: 'left' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'whispersync' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', side: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Whispersync for Voice'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Release: 06-23-15'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 4.8, iconColor: 'state', showAverageRating: true })
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: "base" }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity-mobile/search" },
              'Search'
            )
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 80 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 80, side: 'left', spacing: "small" },
              _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', side: 'right', spacing: 'small', columnPadding: '10px' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listDirection: 'nostyle', textSize: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'First Meetings: In the Enderverse'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'by Orson Scott Card'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridRow,
                    { fixedColumn: 'left', fixedColumnWidth: 25 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', fixedColumnWidth: 25, side: 'left' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'microphone' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', side: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridRow,
                    { fixedColumn: 'left', fixedColumnWidth: 25 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', fixedColumnWidth: 25, side: 'left' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'clock' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', side: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '5 hrs & 18 mins, Unabridged'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridRow,
                    { fixedColumn: 'left', fixedColumnWidth: 25 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', fixedColumnWidth: 25, side: 'left' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'whispersync' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { fixedColumn: 'left', side: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Whispersync for Voice'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Release: 06-23-15'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Publisher: Blackstone Audio'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 4.8, iconColor: 'state', showAverageRating: true })
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: "small" }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity/pdp/" + _dataPrototypesProductsJson2['default'][0].asin },
              'PDP'
            )
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'right', fixedColumnWidth: 280, side: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Tabs,
                { spacing: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TabPanel,
                  { title: 'Author' },
                  _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] }),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                  _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][3].product_images[500] }),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                  _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][4].product_images[500] })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TabPanel,
                  { title: 'Narrator' },
                  _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][4].product_images[500] }),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                  _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][2].product_images[500] }),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                  _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][1].product_images[500] })
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooterMobile2['default'], null)
      );
    }
  }]);

  return ProductVersionsMobile;
})(_react2['default'].Component);

exports['default'] = ProductVersionsMobile;
module.exports = exports['default'];
/* Banner Asin */ /* Asin 1 */ /* Asin 2 */ /* Asin 3 */ /* Carousel 1 */