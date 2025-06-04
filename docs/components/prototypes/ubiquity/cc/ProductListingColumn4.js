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

// eslint-disable-line no-unused-vars

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _cc = require('../cc');

var _cc2 = _interopRequireDefault(_cc);

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var ProductListingColumn4 = (function (_React$Component) {
  _inherits(ProductListingColumn4, _React$Component);

  function ProductListingColumn4() {
    _classCallCheck(this, ProductListingColumn4);

    _get(Object.getPrototypeOf(ProductListingColumn4.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ProductListingColumn4, [{
    key: 'renderProduct',
    value: function renderProduct() {

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base', spacingTop: 'base' }),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          null,
          this.props.seriesList ? _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2 },
              this.props.seriesNum
            )
          ) : null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: this.props.seriesList ? 2 : 3 },
            this.props.hasAsin ? _react2['default'].createElement(_cc2['default'].Asin, { product: _dataPrototypesProductsJson2['default'][0] }) : _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-product-asin', source: this.props.trialImage ? "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover-trial._V288437077_.jpg" : _dataPrototypesProductsJson2['default'][0].product_images[500] })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 4 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].List,
              { listDirection: 'nostyle' },
              this.props.bookTitle ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'base', textSize: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  this.props.bookTitle
                )
              ) : null,
              this.props.bookTitleLink ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textSize: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  this.props.bookTitleLink
                )
              ) : null,
              this.props.bookAuthor ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary', spacing: 'micro' },
                'Author: ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  this.props.bookAuthor
                )
              ) : null,
              this.props.bookAuthorLink ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'micro' },
                'By: ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  this.props.bookAuthorLink
                )
              ) : null,
              this.props.bookNarrator ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary', spacing: 'micro' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  'Narrator: '
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  this.props.bookNarrator
                )
              ) : null,
              this.props.bookSeries ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary', spacing: 'micro' },
                'Series: ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  this.props.bookSeries
                )
              ) : null,
              this.props.bookRating ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary', spacing: 'micro' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  _react2['default'].createElement(_AudibleUITags2['default'].ReviewStars, { numRatings: '245 ratings', iconColor: 'state', showAverageRating: true })
                )
              ) : null,
              this.props.bookLength ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  'Duration: '
                ),
                this.props.bookLength
              ) : null,
              this.props.bookHasWhispersync ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'Whispersync for Voice-ready'
                )
              ) : null,
              this.props.remove ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary', spacing: 'micro', spacingTop: 'base' },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'trash' }),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  'Remove Item'
                )
              ) : null,
              this.props.wishList ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary' },
                _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'add-circle' }),
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  'Move to Wish List'
                )
              ) : null,
              this.props.trialImage ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'base', textSize: 'medium' },
                    '30-day Free Membership'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { spacing: 'micro', listType: 'bullet' },
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
                      'Membership Continues until you cancel (by visiting your account or contacting customer service)'
                    )
                  )
                )
              ) : null
            )
          ),
          this.props.seriesList ? _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridPush: 1, gridUnits: 2 },
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
          ) : null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 2, gridPush: 1 },
            this.props.hasRadioBtn ? [_react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { spacing: 'mini' }),
              this.props.bookCredit ? _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                null,
                '1 Credit'
              ) : null
            ), _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { spacing: 'mini' }),
              '$',
              this.props.bookPrice
            )] : _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { spacing: 'mini', textStrike: this.props.trialPrice ? true : false },
              this.props.trialPrice ? _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                null,
                '$14.99'
              ) : null,
              this.props.bookCredit ? _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                null,
                '1 Credit'
              ) : null
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 2, position: 'last' },
            this.props.userCost ? _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textBold: true },
              '$',
              this.props.userCost
            ) : null,
            this.props.hasBuyBox ? _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { backgroundColor: 'inverse', heightCss: '60px' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'inverse' },
                'BuyBox'
              )
            ) : null
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'span',
        null,
        this.renderProduct()
      );
    }
  }]);

  return ProductListingColumn4;
})(_react2['default'].Component);

ProductListingColumn4.propTypes = {
  bookAuthor: _react.PropTypes.string,
  bookCredit: _react.PropTypes.bool,
  bookHasWhispersync: _react.PropTypes.bool,
  bookLength: _react.PropTypes.string,
  bookNarrator: _react.PropTypes.string,
  bookPrice: _react.PropTypes.string,
  bookRating: _react.PropTypes.bool,
  bookSeries: _react.PropTypes.string,
  bookTitle: _react.PropTypes.string,
  bookTitleLink: _react.PropTypes.string,
  hasAsin: _react.PropTypes.bool,
  hasBuyBox: _react.PropTypes.bool,
  hasRadioBtn: _react.PropTypes.bool,
  remove: _react.PropTypes.bool,
  seriesList: _react.PropTypes.bool,
  seriesNum: _react.PropTypes.number,
  trialImage: _react.PropTypes.bool,
  trialPrice: _react.PropTypes.string,
  userCost: _react.PropTypes.string,
  wishList: _react.PropTypes.bool
};

exports['default'] = ProductListingColumn4;
module.exports = exports['default'];
/* <BC.Icon iconType="microphone"/>*/ /* <BC.Icon iconType="clock" />*/ /* <BC.Icon iconType="whispersync"/>*/ /* Column 4 */