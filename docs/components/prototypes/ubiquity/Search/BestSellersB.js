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

var _HeaderProdHeader = require('../Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('../Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var BestSellersB = (function (_React$Component) {
  _inherits(BestSellersB, _React$Component);

  function BestSellersB() {
    _classCallCheck(this, BestSellersB);

    _get(Object.getPrototypeOf(BestSellersB.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(BestSellersB, [{
    key: 'renderBestSellers',
    value: function renderBestSellers() {
      var rows = [];
      for (var x = 0; x < 5; x++) {
        rows.push(x);
      }
      var rowMap = rows.map(function () {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: "base" }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 150 },
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
              { columnPadding: '20px', fixedColumn: 'left', side: 'right', spacing: 'small' },
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
          )
        );
      });
      return rowMap;
    }
  }, {
    key: 'renderUserHistory',
    value: function renderUserHistory() {
      var rows = [];
      for (var x = 0; x < 1; x++) {
        rows.push(x);
      }
      var rowMap = rows.map(function () {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { paddingSize: 'small', hasBorder: true },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'small', textAlign: 'right' },
              _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'close' })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { fixedColumn: 'left', fixedColumnWidth: 150 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { fixedColumn: 'left', fixedColumnWidth: 150, side: 'left', spacing: "small" },
                _react2['default'].createElement(CC.Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { columnPadding: '10px', fixedColumn: 'left', side: 'right' },
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
                      'Orson Scott Card'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: true },
                      '$17.99'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { iconColor: 'state' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'primary', size: 'small', spacing: 'micro' },
                      'Add to Cart'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { size: 'small' },
                      'Add to Wish List'
                    )
                  )
                )
              )
            )
          )
        );
      });
      return rowMap;
    }
  }, {
    key: 'renderListenerHistory',
    value: function renderListenerHistory() {
      var rows = [];
      for (var x = 0; x < 1; x++) {
        rows.push(x);
      }
      var rowMap = rows.map(function () {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { paddingSize: 'small', hasBorder: true },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { fixedColumn: 'left', fixedColumnWidth: 150, spacing: 'micro' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { fixedColumn: 'left', fixedColumnWidth: 150, side: 'left' },
                _react2['default'].createElement(CC.Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { columnPadding: '10px', fixedColumn: 'left', side: 'right' },
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
                      'Orson Scott Card'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: true },
                      '$17.99'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { iconColor: 'state' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'primary', size: 'small', spacing: 'micro' },
                      'Add to Cart'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { size: 'small' },
                      'Add to Wish List'
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'micro', textAlign: 'center' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                null,
                'Improve recommendations'
              )
            )
          )
        );
      });
      return rowMap;
    }
  }, {
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
            _AudibleUITags2['default'].Heading,
            null,
            'Audible Best Sellers'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            null,
            'The most popular titles available at Audible.com, generating buzz from critics, publishers, and your fellow audio enthusiasts. For a list of the nation\'s best sellers, check out',
            _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              null,
              'New York Times Best Sellers.'
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'mini' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'mini' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { fixedColumn: 'left', fixedColumnWidth: 200 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { fixedColumn: 'left', fixedColumnWidth: 200, side: 'left' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { inline: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Audible - Past 7 Days'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Option 2'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Option 3'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Option 4'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { fixedColumn: 'left', side: 'right' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { inline: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'All Categories'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Option 2'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Option 3'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Option 4'
                  )
                )
              )
            )
          ),
          this.renderBestSellers(),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'extra-large' },
            _react2['default'].createElement(_AudibleUITags2['default'].Pagination, null)
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'mini' },
              'Your Audible History: (RETITLE!!!!)'
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 3, spacing: 'mini' },
              'Recently Viewed Titles:'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4 },
                this.renderUserHistory()
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4 },
                this.renderUserHistory()
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4, position: 'last' },
                this.renderUserHistory()
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 3, spacing: 'mini' },
              'Listeners with similar histories also bought:'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4 },
                this.renderListenerHistory()
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4 },
                this.renderListenerHistory()
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4, position: 'last' },
                this.renderListenerHistory()
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'medium' },
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2, spacing: 'mini' },
              'Recent Searches'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { spacing: 'extra-large' },
              'You don\'t have any searches tracked in your history yet.'
            )
          ),
          _react2['default'].createElement(_FooterProdFooter2['default'], null)
        )
      );
    }
  }]);

  return BestSellersB;
})(_react2['default'].Component);

exports['default'] = BestSellersB;
module.exports = exports['default'];
/* Search Results - Image Column */ /* Search Results - Text Column */ /* Search Results - Button Column */ /*   view & sort by  */ /* Audible History  */ /* Recommendations */ /* Recent Searches  */