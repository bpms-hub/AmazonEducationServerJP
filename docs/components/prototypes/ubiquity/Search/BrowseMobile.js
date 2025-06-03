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

var _HeaderProdHeaderMobile = require('../Header/ProdHeaderMobile');

var _HeaderProdHeaderMobile2 = _interopRequireDefault(_HeaderProdHeaderMobile);

var _FooterProdFooterMobile = require('../Footer/ProdFooterMobile');

var _FooterProdFooterMobile2 = _interopRequireDefault(_FooterProdFooterMobile);

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var SearchMobile = (function (_React$Component) {
  _inherits(SearchMobile, _React$Component);

  function SearchMobile(props) {
    _classCallCheck(this, SearchMobile);

    _get(Object.getPrototypeOf(SearchMobile.prototype), 'constructor', this).call(this, props);
  }

  _createClass(SearchMobile, [{
    key: 'renderSearchResults',
    value: function renderSearchResults() {
      var rows = [];

      for (var x = 0; x < 3; x++) {
        rows.push(x);
      }

      var rowMap = rows.map(function () {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2, spacing: 'small' },
            'Browse Category Title'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { cssClass: 'bc-mobile-carousel' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].List,
              { pacing: 'small', listType: 'horizontal', cssClass: 'bc-mobile-panes' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                null,
                _react2['default'].createElement(_cc2['default'].Product, { asinSize: '114', bookTitle: 'Title of Book',
                  bookAuthor: 'by First Last', hasStars: true, asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] }),
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                null,
                _react2['default'].createElement(_cc2['default'].Product, { asinSize: '114', bookTitle: 'Title of Book',
                  bookAuthor: 'by First Last', asinImageUrl: _dataPrototypesProductsJson2['default'][1].product_images[500] }),
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                null,
                _react2['default'].createElement(_cc2['default'].Product, { asinSize: '114', bookTitle: 'Title of Book',
                  bookAuthor: 'by First Last', asinImageUrl: _dataPrototypesProductsJson2['default'][2].product_images[500] }),
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                null,
                _react2['default'].createElement(_cc2['default'].Product, { asinSize: '114', bookTitle: 'Title of Book',
                  bookAuthor: 'by First Last', asinImageUrl: _dataPrototypesProductsJson2['default'][3].product_images[500] }),
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                null,
                _react2['default'].createElement(_cc2['default'].Product, { asinSize: '114', bookTitle: 'Title of Book',
                  bookAuthor: 'by First Last', asinImageUrl: _dataPrototypesProductsJson2['default'][4].product_images[500] }),
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                null,
                _react2['default'].createElement(_cc2['default'].Product, { asinSize: '114', bookTitle: 'Title of Book',
                  bookAuthor: 'by First Last', asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] }),
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                null,
                _react2['default'].createElement(_cc2['default'].Product, { asinSize: '114', bookTitle: 'Title of Book',
                  bookAuthor: 'by First Last', asinImageUrl: _dataPrototypesProductsJson2['default'][1].product_images[500] }),
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                null,
                _react2['default'].createElement(_cc2['default'].Product, { asinSize: '114', bookTitle: 'Title of Book',
                  bookAuthor: 'by First Last', hasStars: true, asinImageUrl: _dataPrototypesProductsJson2['default'][2].product_images[500] }),
                _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null)
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
        _react2['default'].createElement(_HeaderProdHeaderMobile2['default'], { member: true }),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Box,
          { paddingSize: 'small' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            null,
            '315 results'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Table,
          { spacing: "small" },
          _react2['default'].createElement(
            _AudibleUITags2['default'].TableRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              'Sorted by "Relevance"'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableColumn,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                null,
                'Filter'
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'small' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2, spacing: 'small' },
              'Editor\'s Pick'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 5 },
              _react2['default'].createElement(_cc2['default'].Product, { hasStars: false,
                asinImageUrl: _dataPrototypesProductsJson2['default'][2].product_images[500] })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'none' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'base', textSize: 'base' },
                  'Title of Book here'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'secondary', textSize: 'small' },
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus arcu, varius eget erat a, pellentesque aliquet odio. Phasellus in dolor augue. Aliquam dictum turpis nisi'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, null),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textSize: 'small' },
                '(210)'
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { size: 'medium', spacing: 'small' }),
          this.renderSearchResults(),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'medium' },
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { size: 'medium', spacing: 'small' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2, spacing: 'small' },
              'Popular in Fiction'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'inverse', paddingSize: 'extra-large', heightCss: '186px', spacing: 'micro' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro', textAlign: 'center', textSize: 'large', textColor: 'inverse' },
                  'FPO Feature Image'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'inverse', paddingSize: 'extra-large', heightCss: '186px' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro', textAlign: 'center', textSize: 'large', textColor: 'inverse' },
                  'FPO Feature Image'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'inverse', paddingSize: 'extra-large', heightCss: '186px', spacing: 'micro' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro', textAlign: 'center', textSize: 'large', textColor: 'inverse' },
                  'FPO Feature Image'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'inverse', paddingSize: 'extra-large', heightCss: '186px' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro', textAlign: 'center', textSize: 'large', textColor: 'inverse' },
                  'FPO Feature Image'
                )
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2, spacing: 'small' },
              'Explore more in Fiction'
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooterMobile2['default'], null)
      );
    }
  }]);

  return SearchMobile;
})(_react2['default'].Component);

exports['default'] = SearchMobile;
module.exports = exports['default'];