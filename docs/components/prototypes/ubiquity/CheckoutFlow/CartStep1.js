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

var CartStep1 = (function (_React$Component) {
  _inherits(CartStep1, _React$Component);

  function CartStep1(props) {
    _classCallCheck(this, CartStep1);

    _get(Object.getPrototypeOf(CartStep1.prototype), 'constructor', this).call(this, props);
  }

  _createClass(CartStep1, [{
    key: 'renderItems',
    value: function renderItems() {
      var rows = [];

      for (var x = 0; x < 3; x++) {
        rows.push(x);
      }

      var rowMap = rows.map(function () {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_cc2['default'].ProductListingColumn4, {
            bookSeries: 'Ender\'s Games',
            bookTitleLink: 'First Meetings: In the Enderverse',
            bookAuthorLink: 'Orson Scott Card',
            bookPrice: '29.99',
            bookCredit: true,
            remove: true,
            wishList: true,
            hasRadioBtn: true,
            userCost: '0.00'
          })
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
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 9 },
              _react2['default'].createElement(
                _cc2['default'].ProgressBarRow,
                { textBold: true, textSize: 'medium' },
                _react2['default'].createElement(
                  _cc2['default'].ProgressBar,
                  { activeState: true, spacing: 'base', widthPercentage: 33.3, number: '1' },
                  'Cart'
                ),
                _react2['default'].createElement(
                  _cc2['default'].ProgressBar,
                  { spacing: 'base', widthPercentage: 33.3, number: '2' },
                  'Place Order'
                ),
                _react2['default'].createElement(
                  _cc2['default'].ProgressBar,
                  { spacing: 'base', widthPercentage: 33.3, number: '3' },
                  'Ready to Download'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 9, spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: '1', spacingTop: 'micro' },
                    'Cart'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3, position: 'last', textAlign: 'right' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { app: true, url: '/prototypes/brickcity/cart-step2', buttonType: 'primary' },
                    'Next Step'
                  )
                )
              ),
              _react2['default'].createElement(_cc2['default'].ProductListingColumn4, {
                trialImage: 'true',
                trialPrice: 'true',
                userCost: '0.00'
              }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { spacing: 'small' },
                this.renderItems()
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'mini' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Expander,
                { anchor: true, hideText: 'Do you have a promotional code?', showText: 'Do you have a promotional code?' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6 },
                    _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Enter promo code', spacing: 'small' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridPull: 3, gridUnits: 3, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'primary' },
                      'Submit'
                    )
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { dividerType: 'dotted', spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { textAlign: 'right' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: true, textSize: 'base' },
                      'Available Credits:'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      ' 5'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: true, textSize: 'medium' },
                      'Subtotal: $0.00'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'extra-large' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6, spacingTop: 'micro', textAlign: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Continue shopping'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'secondary' },
                      'Update'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { app: true, url: '/prototypes/brickcity/cart-step2', buttonType: 'primary' },
                      'Next Step'
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3, position: 'last' },
              _react2['default'].createElement(_cc2['default'].ProductDetail, {
                hasAsin: true,
                productTitle: 'You might also like...',
                verticalProduct: true,
                bookTitle: 'Both Flesh and Not',
                bookAuthor: 'David Foster Wallace',
                bookRating: true,
                addCartButton: true
              })
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return CartStep1;
})(_react2['default'].Component);

exports['default'] = CartStep1;
module.exports = exports['default'];
/* Progress Bar */ /* Free Membership */ /* Promo Code */ /* Cart Buttons */