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

var CartStep2 = (function (_React$Component) {
  _inherits(CartStep2, _React$Component);

  function CartStep2(props) {
    _classCallCheck(this, CartStep2);

    _get(Object.getPrototypeOf(CartStep2.prototype), 'constructor', this).call(this, props);
  }

  _createClass(CartStep2, [{
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
            bookTitle: 'First Meetings: In the Enderverse',
            bookAuthor: 'Orson Scott Card',
            bookPrice: '29.99',
            bookCredit: true,
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
                  { spacing: 'base', widthPercentage: 33.3, number: '1' },
                  'Cart'
                ),
                _react2['default'].createElement(
                  _cc2['default'].ProgressBar,
                  { activeState: true, spacing: 'base', widthPercentage: 33.3, number: '2' },
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
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: '1', spacingTop: 'micro' },
                  'Place Order'
                )
              ),
              _react2['default'].createElement(_cc2['default'].ProductListingColumn4, {
                trialImage: 'true',
                userCost: '0.00'
              }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { spacing: 'small' },
                this.renderItems()
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'mini' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textSize: 'base' },
                'Summary'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Table,
                { spacingTop: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    'Purchase'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    '$0.00'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    'Subtotal'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    '$0.00'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableRow,
                  { textBold: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: true },
                      'Total'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: true },
                      '$0.00'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { spacing: 'extra-large', spacingTop: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { app: true, url: '/prototypes/brickcity/cart-step1', buttonType: 'secondary' },
                      'Back'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { app: true, url: '/prototypes/brickcity/cart-step3', buttonType: 'primary' },
                      'Complete'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'secondary', textSize: 'mini' },
                  'By completing your purchase you agree to Audible\'s Conditions of Use and Privacy Notice and authorize us to charge your designated credit card or another available credit card on file for any outstanding balances on your aBCount as they become due.'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'medium' },
                  'Account Information'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle', textSize: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacingTop: 'micro', textBold: true },
                  'Name on Card:'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  'Lisa Del Monte'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { textBold: true },
                  'Credit Card Type:'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  'Visa'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { textBold: true },
                  'Card Number:'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  'xxxx-5683'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    null,
                    'Edit payment method'
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

  return CartStep2;
})(_react2['default'].Component);

exports['default'] = CartStep2;
module.exports = exports['default'];
/* Progress Bar */ /* Free Membership */ /* Order Summary */