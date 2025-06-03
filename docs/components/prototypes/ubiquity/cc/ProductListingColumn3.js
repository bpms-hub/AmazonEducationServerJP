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

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var _cc = require('../cc');

var _cc2 = _interopRequireDefault(_cc);

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var ProductListingColumn3 = (function (_React$Component) {
  _inherits(ProductListingColumn3, _React$Component);

  function ProductListingColumn3() {
    _classCallCheck(this, ProductListingColumn3);

    _get(Object.getPrototypeOf(ProductListingColumn3.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ProductListingColumn3, [{
    key: 'renderProduct',
    value: function renderProduct() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: this.props.recommendations ? 2 : 3 },
            this.props.hasAsin ? _react2['default'].createElement(_cc2['default'].Asin, { product: _dataPrototypesProductsJson2['default'][0] }) : _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-product-asin', source: this.props.trialImage ? "https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover-trial._V288437077_.jpg" : _dataPrototypesProductsJson2['default'][0].product_images[500] })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: this.props.hasBuyBox ? 6 : [this.props.hasRadioBtn ? 7 : 8] },
            _react2['default'].createElement(
              _AudibleUITags2['default'].List,
              { listDirection: 'nostyle' },
              this.props.bookHasAudiobook ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary' },
                'Audiobook'
              ) : null,
              this.props.bookTitle ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary', textSize: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  this.props.bookTitle
                )
              ) : null,
              this.props.bookAuthor ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary', spacing: 'micro' },
                'Author: ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  this.props.bookAuthor
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
                { textColor: 'secondary', spacing: 'micro' },
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
              this.props.bookRelease ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary', spacing: 'micro' },
                'Release: ',
                this.props.bookRelease
              ) : null,
              this.props.trialImage ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { spacing: 'micro', textColor: 'base', textSize: 'base' },
                  '30-day Free Membership'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridPull: 5, gridUnits: 7, position: 'last' },
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
                  )
                )
              ) : null,
              this.props.recommendations ? _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { textColor: 'secondary', spacingTop: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  'Recommended based on 2 of your past purchases. ',
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    null,
                    'Fix This'
                  )
                )
              ) : null
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: this.props.hasBuyBox ? 3 : [this.props.hasRadioBtn || this.props.recommendationsBtn ? 2 : 1], position: 'last' },
            this.props.hasBuyBox ? _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { backgroundColor: 'inverse', heightCss: '60px' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'inverse' },
                'BuyBox'
              )
            ) : null,
            this.props.hasRadioBtn ? [_react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { spacing: 'mini' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                null,
                'I own it'
              )
            ), _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { spacing: 'mini' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                null,
                'Not Interested'
              )
            )] : [this.props.recommendationsBtn ? _react2['default'].createElement(
              _AudibleUITags2['default'].Button,
              { buttonType: 'primary', size: 'small' },
              'Restore'
            ) : null],
            this.props.userCost ? _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textBold: true },
              '$0.00'
            ) : null
          )
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' })
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

  return ProductListingColumn3;
})(_react2['default'].Component);

ProductListingColumn3.propTypes = {
  bookAuthor: _react.PropTypes.string,
  bookHasAudiobook: _react.PropTypes.bool,
  bookHasWhispersync: _react.PropTypes.bool,
  bookLength: _react.PropTypes.string,
  bookNarrator: _react.PropTypes.string,
  bookPrice: _react.PropTypes.string,
  bookRating: _react.PropTypes.bool,
  bookRelease: _react.PropTypes.string,
  bookSeries: _react.PropTypes.string,
  bookTitle: _react.PropTypes.string,
  hasAsin: _react.PropTypes.bool,
  hasBuyBox: _react.PropTypes.bool,
  hasRadioBtn: _react.PropTypes.bool,
  recommendations: _react.PropTypes.bool,
  recommendationsBtn: _react.PropTypes.bool,
  trialImage: _react.PropTypes.bool,
  userCost: _react.PropTypes.string
};

exports['default'] = ProductListingColumn3;
module.exports = exports['default'];
/* <BC.Icon iconType="microphone"/>*/ /* <BC.Icon iconType="clock" />*/ /* <BC.Icon iconType="whispersync"/>*/