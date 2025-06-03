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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var BestSellers = (function (_React$Component) {
  _inherits(BestSellers, _React$Component);

  function BestSellers() {
    _classCallCheck(this, BestSellers);

    _get(Object.getPrototypeOf(BestSellers.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(BestSellers, [{
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
          _react2['default'].createElement(_cc2['default'].ProductListingColumn3, {
            hasBuyBox: true,
            bookTitle: 'First Meetings: In the Enderverse',
            bookAuthor: 'Orson Scott Card',
            bookNarrator: 'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki',
            bookSeries: 'Ender\'s Game',
            bookRating: true
          })
        );
      });
      return rowMap;
    }
  }, {
    key: 'renderUserHistory',
    value: function renderUserHistory() {
      var rows = [];
      for (var x = 0; x < 2; x++) {
        rows.push(x);
      }
      var rowMap = rows.map(function () {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { backgroundColor: 'secondary', spacing: 'small', paddingSize: 'small' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { fixedColumn: 'left', fixedColumnWidth: 150, spacing: 'micro' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { fixedColumn: 'left', fixedColumnWidth: 150, side: 'left' },
                _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
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
                      { textBold: 'true', textSize: 'base', app: true, url: "/prototypes/brickcity/pdp" },
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
                _AudibleUITags2['default'].Text,
                { textColor: 'secondary' },
                'Remove'
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
      for (var x = 0; x < 2; x++) {
        rows.push(x);
      }
      var rowMap = rows.map(function () {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { backgroundColor: 'secondary', spacing: 'small', paddingSize: 'small' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { fixedColumn: 'left', fixedColumnWidth: 150, spacing: 'micro' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { fixedColumn: 'left', fixedColumnWidth: 150, side: 'left' },
                _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
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
                      { textBold: 'true', textSize: 'base', app: true, url: "/prototypes/brickcity/pdp" },
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
            _AudibleUITags2['default'].GridRow,
            { spacingTop: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3 },
              _react2['default'].createElement(_cc2['default'].BrowseSearch, { filters: true })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 9, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { spacing: 'micro' },
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
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
              this.renderBestSellers(),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { spacing: 'extra-large' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { backgroundColor: 'inverse', heightCss: '60px' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'inverse' },
                    'Progressive Load'
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return BestSellers;
})(_react2['default'].Component);

exports['default'] = BestSellers;
module.exports = exports['default'];
/* Left Side - Nav */ /* Right Side - Search Result */ /* Audible History  */ /*<BC.Section spacing="extra-large">
                                                                              <BC.Box hasBorder={true}>
                                                                               <BC.GridRow>
                                                                                 <BC.GridColumn gridUnits={6}>
                                                                                   <BC.Heading spacing="mini">Your Audible History</BC.Heading>
                                                                                 </BC.GridColumn>
                                                                                 <BC.GridColumn gridUnits={6} textAlign="right" position="last" spacingTop="mini">
                                                                                     <BC.Link>Clear All</BC.Link>
                                                                                     <BC.Pipe/>
                                                                                     <BC.Link>Turn History Off</BC.Link>
                                                                                     <BC.Pipe/>
                                                                                     <BC.Text textColor="inactive">Show More</BC.Text>
                                                                                 </BC.GridColumn>
                                                                               </BC.GridRow>
                                                                               <BC.Divider spacing="medium"/>
                                                                                <BC.FixedGridRow fixedColumn="left" fixedColumnWidth={300}>
                                                                                 <BC.FixedGridColumn fixedColumnWidth={300} fixedColumn="left" side="left">
                                                                                   <BC.GridRow spacing="medium">
                                                                                     <BC.Heading headingLevel={3}>Recently Viewed Titles</BC.Heading>
                                                                                   </BC.GridRow>
                                                                                   {this.renderUserHistory()}
                                                                                 </BC.FixedGridColumn>
                                                                                 <BC.FixedGridColumn fixedColumn="left" side="right" columnPadding="50px">
                                                                                   <BC.GridRow spacing="medium">
                                                                                     <BC.Heading headingLevel={3}>Listeners with similar histories also bought</BC.Heading>
                                                                                   </BC.GridRow>
                                                                                   <BC.GridRow>
                                                                                     <BC.GridColumn gridUnits={6}>
                                                                                       {this.renderListenerHistory()}
                                                                                     </BC.GridColumn>
                                                                                     <BC.GridColumn gridUnits={6} position="last">
                                                                                       {this.renderListenerHistory()}
                                                                                     </BC.GridColumn>
                                                                                   </BC.GridRow>
                                                                                 </BC.FixedGridColumn>
                                                                               </BC.FixedGridRow>
                                                                                <BC.Divider spacing="medium"/>
                                                                               <BC.Heading headingLevel={2} spacing="mini">Recent Searches</BC.Heading>
                                                                               <BC.Paragraph spacing="small">You don&#39;t have any searches tracked in your history yet.</BC.Paragraph>
                                                                              </BC.Box>
                                                                              </BC.Section>*/