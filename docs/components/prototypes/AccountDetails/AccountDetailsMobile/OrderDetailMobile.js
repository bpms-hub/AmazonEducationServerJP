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

var _ubiquityCc = require('../../ubiquity/cc');

var _ubiquityCc2 = _interopRequireDefault(_ubiquityCc);

var _ubiquityHeaderProdHeaderMobile = require('../../ubiquity/Header/ProdHeaderMobile');

var _ubiquityHeaderProdHeaderMobile2 = _interopRequireDefault(_ubiquityHeaderProdHeaderMobile);

var _ubiquityFooterProdFooterMobile = require('../../ubiquity/Footer/ProdFooterMobile');

var _ubiquityFooterProdFooterMobile2 = _interopRequireDefault(_ubiquityFooterProdFooterMobile);

var _dataPrototypesOrdersJson = require('../../../../data/prototypes/orders.json');

var _dataPrototypesOrdersJson2 = _interopRequireDefault(_dataPrototypesOrdersJson);

var OrderDetailMobile = (function (_React$Component) {
  _inherits(OrderDetailMobile, _React$Component);

  function OrderDetailMobile(props) {
    _classCallCheck(this, OrderDetailMobile);

    _get(Object.getPrototypeOf(OrderDetailMobile.prototype), 'constructor', this).call(this, props);
    this.state = {
      currentOrder: _dataPrototypesOrdersJson2['default'].orders[0]
    };
  }

  _createClass(OrderDetailMobile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      for (var x = 0; x < _dataPrototypesOrdersJson2['default'].orders.length; x++) {
        if (_dataPrototypesOrdersJson2['default'].orders[x].order_number.indexOf(this.props.params.orderNumber) > -1) {
          this.setState({
            currentOrder: _dataPrototypesOrdersJson2['default'].orders[x]
          });
        }
      };
      for (var x = 0; x < _dataPrototypesOrdersJson2['default'].memberships.length; x++) {
        if (_dataPrototypesOrdersJson2['default'].memberships[x].order_number.indexOf(this.props.params.orderNumber) > -1) {
          this.setState({
            currentOrder: _dataPrototypesOrdersJson2['default'].memberships[x]
          });
        }
      };
      for (var x = 0; x < _dataPrototypesOrdersJson2['default'].gifts.length; x++) {
        if (_dataPrototypesOrdersJson2['default'].gifts[x].order_number.indexOf(this.props.params.orderNumber) > -1) {
          this.setState({
            currentOrder: _dataPrototypesOrdersJson2['default'].gifts[x]
          });
        }
      }
      console.log(this.state.currentOrder);
    }
  }, {
    key: 'render',
    value: function render() {
      var currentOrder = this.state.currentOrder;

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_ubiquityHeaderProdHeaderMobile2['default'], null),
        _react2['default'].createElement(
          _ubiquityCc2['default'].MobilePageTitle,
          { textAlign: 'center', first: true, url: "/prototypes/brickcity-mobile/account-details/purchase-history" },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            { textColor: 'base' },
            'Order Details'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].List,
            { spacingTop: 'base', listType: 'nostyle', spacing: 'base', textColor: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              { spacing: 'micro' },
              'Order #: ',
              currentOrder.order_number
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              { spacing: 'micro' },
              'Order Date: ',
              currentOrder.order_date
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { backgroundColor: 'secondary', paddingSize: 'mini', spacing: 'small' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3 },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: currentOrder.product_image })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 9, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3 },
                  currentOrder.product_title
                ),
                currentOrder.product_author && _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  'by ',
                  currentOrder.product_author
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(_AudibleUITags2['default'].GridColumn, { gridUnits: 3 }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { textAlign: 'right', gridUnits: 9, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'Return'
                )
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { spacing: 'micro', headingLevel: 3 },
            'Credit Card Info'
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'micro' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].List,
            { listType: 'nostyle', spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              { spacing: 'micro' },
              currentOrder.payment_type.card_company,
              ': ****-',
              currentOrder.payment_type.card_number
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              { spacing: 'micro' },
              'Name on Card: ',
              currentOrder.payment_type.name
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { spacing: 'micro', headingLevel: 3 },
            'Billing Address'
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'micro' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].List,
            { listType: 'nostyle', spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              { spacing: 'micro' },
              currentOrder.payment_type.street
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              { spacing: 'micro' },
              currentOrder.payment_type.city
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              null,
              currentOrder.payment_type.zip
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { spacing: 'micro', headingLevel: 3 },
            'Order Summary'
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'micro' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].List,
            { listType: 'nostyle', spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              { spacing: 'micro' },
              'Subtotal: $',
              currentOrder.price.toFixed(2)
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              { spacing: 'micro' },
              'Tax: $',
              (currentOrder.price * 0.07).toFixed(2)
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              null,
              'Total: $',
              (currentOrder.price + currentOrder.price * 0.07).toFixed(2)
            )
          )
        ),
        _react2['default'].createElement(_ubiquityFooterProdFooterMobile2['default'], null)
      );
    }
  }]);

  return OrderDetailMobile;
})(_react2['default'].Component);

exports['default'] = OrderDetailMobile;
module.exports = exports['default'];