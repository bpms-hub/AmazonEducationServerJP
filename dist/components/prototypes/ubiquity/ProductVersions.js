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

var _HeaderProdHeader = require('./Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('./Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

var _dataPrototypesProductsJson = require('../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var ProductVersions = (function (_React$Component) {
  _inherits(ProductVersions, _React$Component);

  function ProductVersions(props, context) {
    _classCallCheck(this, ProductVersions);

    _get(Object.getPrototypeOf(ProductVersions.prototype), 'constructor', this).call(this, props, context);
  }

  _createClass(ProductVersions, [{
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
            _AudibleUITags2['default'].Section,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2 },
              'Search'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2 },
              'Best Sellers'
            ),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement(_cc2['default'].ProductListingColumn3, {
              hasBuyBox: true,
              hasAsin: true,
              bookHasAudiobook: true,
              bookTitle: 'First Meetings: In the Enderverse',
              bookAuthor: 'Orson Scott Card',
              bookNarrator: 'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki',
              bookLength: '5 hrs & 18 mins, Unabridged',
              bookHasWhispersync: true,
              bookSeries: 'Ender\'s Game',
              bookRelease: '06-23-15',
              bookRating: true
            })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2 },
              'Cart 1'
            ),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement(_cc2['default'].ProductListingColumn4, {
              bookTitle: 'First Meetings: In the Enderverse',
              bookAuthor: 'Orson Scott Card',
              bookPrice: '29.99',
              bookCredit: true,
              remove: true,
              wishList: true,
              hasRadioBtn: true,
              userCost: '0.00'
            }),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement(_cc2['default'].ProductListingColumn4, {
              trialImage: 'true',
              trialPrice: 'true',
              userCost: '0.00'

            })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2 },
              'Cart 2'
            ),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement(_cc2['default'].ProductListingColumn4, {
              bookTitle: 'First Meetings: In the Enderverse',
              bookAuthor: 'Orson Scott Card',
              bookCredit: true,
              userCost: '0.00'
            }),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement(_cc2['default'].ProductListingColumn3, {
              trialImage: 'true',
              userCost: '0.00'

            })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2 },
              'Cart 3(Anon)'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2 },
              'Cart 3(Member)'
            ),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement(_cc2['default'].ProductListingColumn2, {
              hasAsin: true,
              bookTitle: 'First Meetings: In the Enderverse',
              bookAuthor: 'Orson Scott Card',
              bookNarrator: 'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki'
            }),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement(_cc2['default'].ProductListingColumn2, {
              trialImage: 'true'
            })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2 },
              'Recomendations'
            ),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement(_cc2['default'].ProductListingColumn3, {
              bookTitle: 'First Meetings: In the Enderverse',
              bookAuthor: 'Orson Scott Card',
              bookNarrator: 'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki',
              bookRating: true,
              hasRadioBtn: true,
              recommendations: true
            })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2 },
              'Write Review'
            ),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement(_cc2['default'].ProductListingColumn2, {
              bookTitle: 'First Meetings: In the Enderverse',
              bookAuthor: 'Orson Scott Card',
              bookNarrator: 'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki'
            })
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base', spacingTop: 'base' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity/pdp/" + _dataPrototypesProductsJson2['default'][0].asin },
              'PDP'
            )
          ),
          _react2['default'].createElement('br', null)
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'large' },
          _react2['default'].createElement(
            'div',
            { className: 'bc-hero' },
            _react2['default'].createElement(
              'div',
              { className: 'bc-container' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { paddingTop: 'small' },
                _react2['default'].createElement(_AudibleUITags2['default'].Breadcrumbs, {
                  breadcrumbTrail: [{ name: "home", url: "/prototypes/brickcity" }, { name: "Pdp" }],
                  spacing: 'base',
                  inverse: true }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridRow,
                  { fixedColumn: 'left', fixedColumnWidth: 320 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { fixedColumn: 'left', fixedColumnWidth: 320, side: 'left' },
                    _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { columnPadding: '20px', fixedColumn: 'left', side: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridRow,
                      { fixedColumn: 'right', fixedColumnWidth: 250 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].FixedGridColumn,
                        { columnPadding: '20px', fixedColumn: 'right', side: 'left', spacingTop: 'none' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { textColor: 'inverse' },
                          'Book Title Name Will Go Here'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'mini', textColor: 'inverse' },
                          'by ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { linkType: 'inverse' },
                            'Book Author Name'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'medium' },
                          _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 4.8, inverse: true, numRatings: 20535, showAverageRating: true })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].List,
                          { listType: 'nostyle', spacing: 'base', textColor: 'inverse' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro' },
                            _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'microphone', verticalAlign: 'middle' }),
                            _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              { linkType: 'inverse' },
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
                              { linkType: 'inverse' },
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
                              { linkType: 'inverse' },
                              'Whispersync for Voice'
                            )
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].FixedGridColumn,
                        { fixedColumn: 'right', fixedColumnWidth: 250, side: 'right' },
                        _react2['default'].createElement(_AudibleUITags2['default'].BuyBox, null)
                      )
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement('div', {
              className: 'bc-hero-blur',
              style: {} }),
            _react2['default'].createElement('div', { className: 'bc-hero-mask' })
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
              { app: true, url: "/prototypes/brickcity/search" },
              'Search'
            )
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 150 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 150, side: 'left' },
              _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { columnPadding: '20px', fixedColumn: 'left', side: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridRow,
                { fixedColumn: 'right', fixedColumnWidth: 180 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridColumn,
                  { columnPadding: '20px', fixedColumn: 'right', spacing: 'small', side: 'left' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listDirection: 'nostyle', textSize: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary' },
                        'Audiobook'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { textBold: true, textSize: 'base', url: '/prototypes/brickcity/pdp' },
                        'First Meetings: In the Enderverse'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'by',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textSize: 'mini' },
                          ' Orson Scott Card'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'microphone' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Gabrielle De Cuir'
                      ),
                      ', ',
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Amanda Karr'
                      ),
                      ', ',
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Stefan Kudnicki'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'clock' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '5 hrs & 18 mins, Unabridged'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'whispersync' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Whispersync for Voice-ready'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'series' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        ' Ender\'s Game'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
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
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridColumn,
                  { fixedColumn: 'right', fixedColumnWidth: 180, side: 'right' },
                  _react2['default'].createElement(_AudibleUITags2['default'].BuyBox, null)
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
              { app: true, url: "/prototypes/brickcity/series-list" },
              'Series List'
            )
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 205 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 205, side: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 2 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2 },
                    '1'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 10, position: 'last' },
                  _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', side: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridRow,
                { fixedColumn: 'right', fixedColumnWidth: 180 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridColumn,
                  { fixedColumn: 'right', fixedColumnWidth: 180, side: 'left' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listDirection: 'nostyle', textSize: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { textBold: 'true', textSize: 'base', url: '/prototypes/brickcity/pdp' },
                            'First Meetings: In the Enderverse'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'small' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'by',
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Link,
                              null,
                              ' Orson Scott Card'
                            )
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'microphone', verticalAlign: 'middle' }),
                          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            null,
                            'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'clock', verticalAlign: 'middle' }),
                          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            '5 hrs & 18 mins, Unabridged'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'whispersync', verticalAlign: 'middle' }),
                          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            null,
                            'Whispersync for Voice'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Release: 06-23-15'
                          )
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listDirection: 'nostyle' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { iconColor: 'state', showAverageRating: true })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textQuote: true },
                            'Couldn\'t turn it off!'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            null,
                            'Amazon Customer'
                          )
                        )
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridColumn,
                  { fixedColumn: 'right', fixedColumnWidth: 180, side: 'right' },
                  _react2['default'].createElement(_AudibleUITags2['default'].BuyBox, null)
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
              { app: true, url: "/prototypes/brickcity/best-sellers" },
              'Best Sellers'
            )
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 150, spacing: 'small' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 150, side: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { app: true, url: '/prototypes/brickcity/pdp' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/search/cover._V288436798_.jpg' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { columnPadding: '20px', fixedColumn: 'left', side: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridRow,
                { fixedColumn: 'right', fixedColumnWidth: 180 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridColumn,
                  { columnPadding: '20px', fixedColumn: 'right', side: 'left' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listDirection: 'nostyle', textSize: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary' },
                        'Audiobook'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { textBold: true, textSize: 'base', url: '/prototypes/brickcity/pdp' },
                        'First Meetings: In the Enderverse'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'by',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textSize: 'mini' },
                          ' Orson Scott Card'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'microphone' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'clock' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '5 hrs & 18 mins, Unabridged'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'whispersync' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Whispersync for Voice-ready'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'series' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        ' Ender\'s Game'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
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
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridColumn,
                  { fixedColumn: 'right', fixedColumnWidth: 180, side: 'right' },
                  _react2['default'].createElement(_AudibleUITags2['default'].BuyBox, null)
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity/cart-step1" },
              'Cart Step 1'
            )
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 150, spacing: 'small' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 150, side: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { url: '/prototypes/brickcity/pdp' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover1._V288437077_.jpg' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { columnPadding: '20px', fixedColumn: 'left', side: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 5 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listDirection: 'nostyle', textColor: 'secondary', textSize: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { textSize: 'base' },
                        'The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'medium' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'by C.S. Lewis'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'trash' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Remove Item'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'add-to-list' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Move to Wish List'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 3, gridUnits: 2, textSize: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { spacing: 'mini' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '$29.99'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { spacing: 'mini' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '1 Credit'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 2, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textBold: true },
                    '$0.00'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 150, spacing: 'small' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 150, side: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { url: '/prototypes/brickcity/pdp' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover-trial._V288437077_.jpg' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { columnPadding: '20px', fixedColumn: 'left', side: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 5 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { spacing: 'micro', textColor: 'base', textSize: 'base' },
                    '30-day Free Membership'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '1 book per month'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Free for the first 30 days and $14.95/month thereafter'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Membership Continues until you cancel (by visiting your aBCount or contacting customer service)'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 3, gridUnits: 2, textSize: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { spacing: 'mini', textStrike: true },
                    '$14.99'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 2, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textBold: true },
                    '$0.00'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity/cart-step2" },
              'Cart Step 2'
            )
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 150, spacing: 'small' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 150, side: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { url: '/prototypes/brickcity/pdp' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover1._V288437077_.jpg' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { columnPadding: '20', fixedColumn: 'left', side: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 5 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listDirection: 'nostyle', textColor: 'base', textSize: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textSize: 'base' },
                        'The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary' },
                        'by C.S. Lewis'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '$29.99'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 3, gridUnits: 2, textSize: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    '1 Credit'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 2, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textBold: true },
                    '$0.00'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 150, spacing: 'small' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 150, side: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { url: '/prototypes/brickcity/pdp' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover-trial._V288437077_.jpg' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { columnPadding: '20', fixedColumn: 'left', side: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'base', textSize: 'base' },
                    '30-day Free Membership'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { spacing: 'small', textColor: 'secondary' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro', spacingTop: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '1 book per month'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Free for the first 30 days and $14.95/month thereafter'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Membership Continues until you cancel (by visiting your aBCount or contacting customer service)'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPush: 1, gridUnits: 2, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textBold: true },
                    '$0.00'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity/cart-step3" },
              'Cart - Step 3 (Anon)'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity/cart-step3-member" },
              'Cart - Step 3 (Member)'
            )
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 150 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 150, side: 'left' },
              _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { columnPadding: '20px', fixedColumn: 'left', side: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPull: 5, gridUnits: 7, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listDirection: 'nostyle', textColor: 'secondary', textSize: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base', textSize: 'base' },
                        'The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'by C.S. Lewis'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Narrated by Kenneth Branagh'
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 150, spacing: 'small' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 150, side: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { url: '/prototypes/brickcity/pdp' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover-trial._V288437077_.jpg' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { columnPadding: '20px', fixedColumn: 'left', side: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPull: 5, gridUnits: 7, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'base', textSize: 'base' },
                    '30-day Free Membership'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro', spacingTop: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '1 book per month'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Free for the first 30 days and $14.95/month thereafter'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Membership Continues until you cancel (by visiting your aBCount or contacting customer service)'
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity/recommendations" },
              'Recommendations'
            )
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 200 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 200, side: 'left', spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { app: true, url: '/prototypes/brickcity/pdp' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/recommendations/cover1._V288436862_.jpg' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', side: 'right', spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listType: 'nostyle', textSize: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro', textSize: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Brave New World'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'by',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          null,
                          ' Alduous Huxley'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'microphone', verticalAlign: 'middle' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Michael York'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Overall'
                      ),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { averageRating: 4.8, iconColor: '#f7991c', numRatings: 20535, showAverageRating: true })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Recommended based on 2 of your past purchases.'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        ' Fix This'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 2, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { spacing: 'mini' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      'I own it'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { spacing: 'mini' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      'Not Interested'
                    )
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity/write-review" },
              'Write Review'
            )
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { spacing: 'base', fixedColumn: 'left', fixedColumnWidth: 184 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 184, side: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { app: true, url: '/prototypes/brickcity/pdp' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover1._V288437077_.jpg' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { columnPadding: '20px', fixedColumn: 'left', side: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listDirection: 'nostyle', textSize: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textBold: 'true', textSize: 'base', url: '/prototypes/brickcity/pdp' },
                    'First Meetings: In the Enderverse'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'by'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    null,
                    ' Orson Scott Card'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    'Narrated by '
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    null,
                    'Alan Cumming, Tim Curry, Simon Vance'
                  )
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
              { app: true, url: "/prototypes/brickcity/cancel" },
              'Cancel Credits'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity/search" },
              'Search'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity/category" },
              'Category'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity/category/sub-category" },
              'Sub Category'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity" },
              'Gateway'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity" },
              'Gateway'
            )
          ),
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
          _react2['default'].createElement(_cc2['default'].ProductCarousel, { carouselTitle: 'Choose from Your Wish List' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity" },
              'Gateway'
            )
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(_cc2['default'].ProductCarousel, { carouselSize: 'large' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity/category" },
              'Category'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity/category/sub-category" },
              'Sub Category'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { app: true, url: "/prototypes/brickcity" },
              'Gateway'
            )
          ),
          _react2['default'].createElement(_cc2['default'].ProductCarousel, { editorsPick: true }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 235 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 235, side: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { app: true, url: "/prototypes/brickcity/cart-step1" },
                  'Cart - Step 1'
                )
              ),
              _react2['default'].createElement(_cc2['default'].ProductDetail, { productTitle: 'You might also like...', verticalSize: 'mini', verticalProduct: true })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { columnPadding: '40px', fixedColumn: 'left', side: 'right', spacing: "medium" },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridRow,
                { fixedColumn: 'left', fixedColumnWidth: 235 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridColumn,
                  { fixedColumn: 'left', fixedColumnWidth: 235, side: 'left' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, url: "/prototypes/brickcity/cart-step2" },
                      'Cart - No Credit Card'
                    )
                  ),
                  _react2['default'].createElement(_cc2['default'].ProductDetail, { productTitle: 'In your Cart', verticalSize: 'mini', cartProduct: true })
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].FixedGridColumn, { columnPadding: '40px', fixedColumn: 'left', side: 'right' })
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: "base" }),
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
                  _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][4].product_images[500] }),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                  _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][3].product_images[500] })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TabPanel,
                  { title: 'Narrator' },
                  _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][2].product_images[500] }),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                  _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][1].product_images[500] }),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                  _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return ProductVersions;
})(_react2['default'].Component);

exports['default'] = ProductVersions;
module.exports = exports['default'];
/* Banner Asin */ /* Asin 1 */ /* Asin 2 */ /* Asin 3 */ /* Search Results - Image Column */ /* Search Results - Text Column */ /* Search Results - Button Column */ /* Asin 4 */ /* Asin 5 */ /* Asin 6 */ /* Asin 7 */ /* Asin 8 */ /* Asin 9 */ /* Asin 10 */ /* Carousel 1 */ /* Carousel 2 */ /* Carousel 3 */ /* Carousel 4 */