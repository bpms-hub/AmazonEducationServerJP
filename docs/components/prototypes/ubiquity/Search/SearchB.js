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

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var Search = (function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    _get(Object.getPrototypeOf(Search.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Search, [{
    key: 'renderSearchResults',
    value: function renderSearchResults() {
      var rows = [];

      for (var x = 0; x < 10; x++) {
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
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 200, spacingTop: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 200, side: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, textColor: 'tertiary', spacing: 'small' },
                'Categories'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base' },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconSize: 'mini', iconType: 'chevron-left' }),
                ' ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'mini', textColor: 'secondary' },
                  'See all categories'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, textColor: 'secondary', spacing: 'small' },
                'Sci-Fi & Fantasy'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle', textSize: 'small', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Doctor Who'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Dramatizations'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Fantasy: Contemporary'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Fantasy: Epic'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Fantasy: Paranormal'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Fantasy: Contemporary'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Star Trek'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Star Wars'
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, textColor: 'tertiary', spacing: 'small' },
                'Filters'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'caret-down' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: '3', spacing: 'micro' },
                'Language'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle', spacing: 'base', textSize: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'English'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'German'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Spanish'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Italian'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'French'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'secondary' },
                'More Languages'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: '3', spacing: 'micro' },
                'Program Format'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle', spacing: 'base', textSize: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Unabridged (12)'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Abridged (4)'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Original (3)'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: '3', spacing: 'micro' },
                'Release Date'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle', spacing: 'base', textSize: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Last 30 Days (12)'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: '3', spacing: 'micro' },
                'Program Type'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle', spacing: 'base', textSize: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Audiobook (12)'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Radio & TV Program (4)'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Speech (3)'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: '3', spacing: 'micro' },
                'Language'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle', spacing: 'mini', textSize: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'English (12)'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Danish (4)'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { columnPadding: '40px', fixedColumn: 'left', side: 'right', spacing: 'extra-large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textBold: true, textColor: 'secondary' },
                '20 '
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'secondary' },
                'results for'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { textSize: 'large', spacing: 'micro' },
                'Ender\'s Game'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  'Related: '
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'Orson Scott Card'
                ),
                ',',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  ' Enders Shadow'
                ),
                ',',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  ' Enders Series'
                ),
                ',',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  ' Enders Game Series'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { paddingSize: 'mini', backgroundColor: 'secondary' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'none' },
                  'Some results have been hidden from search. Change your preferences in ',
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { url: './advanced-search' },
                    'Account Details'
                  ),
                  '.'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Pagination, null)
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'mini' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 6 },
                  _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'secondary', textSize: 'small' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Dropdown,
                    { inline: true, spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Sort by'
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
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 6, position: 'last', textAlign: 'right' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary', textSize: 'small' },
                    'Results per page:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Dropdown,
                    { inline: true },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      '20'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      '15'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      '10'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      '5'
                    )
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'base', textSize: 'small' },
                  'Showing:'
                ),
                _react2['default'].createElement(
                  _cc2['default'].Filter,
                  { closeable: true },
                  'Sci-fi & Fantasy'
                ),
                _react2['default'].createElement(
                  _cc2['default'].Filter,
                  { closeable: true },
                  'Sci-Fi Contemporary'
                )
              ),
              this.renderSearchResults(),
              _react2['default'].createElement(_AudibleUITags2['default'].Pagination, null)
            )
          ),
          _react2['default'].createElement(_cc2['default'].ProductCarousel, { carouselTitle: 'You Might Also Like ...' })
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return Search;
})(_react2['default'].Component);

exports['default'] = Search;
module.exports = exports['default'];
/* Search Results - Image Column */ /* Search Results - Text Column */ /* Search Results - Button Column */ /* Left Side - Nav */ /* Right Side - Search Result */