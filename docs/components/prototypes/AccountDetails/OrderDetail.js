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

var _ubiquityCc = require('../ubiquity/cc');

var _ubiquityCc2 = _interopRequireDefault(_ubiquityCc);

var _AccountDetailsLayout = require('./AccountDetailsLayout');

var _AccountDetailsLayout2 = _interopRequireDefault(_AccountDetailsLayout);

var _dataPrototypesOrdersJson = require('../../../data/prototypes/orders.json');

var _dataPrototypesOrdersJson2 = _interopRequireDefault(_dataPrototypesOrdersJson);

var OrderDetail = (function (_React$Component) {
  _inherits(OrderDetail, _React$Component);

  function OrderDetail(props) {
    _classCallCheck(this, OrderDetail);

    _get(Object.getPrototypeOf(OrderDetail.prototype), 'constructor', this).call(this, props);
    this.state = {
      currentOrder: []
    };
  }

  _createClass(OrderDetail, [{
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
    }
  }, {
    key: 'render',
    value: function render() {
      var currentOrder = this.state.currentOrder;

      return _react2['default'].createElement(
        _AudibleUITags2['default'].GridRow,
        { spacingTop: 'micro' },
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'small' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            { linkType: 'nav', url: "/prototypes/brickcity/account-details/purchase-history" },
            'Back to Orders'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Box,
          { background: 'primary', hasBorder: true, paddingSize: 'medium', spacing: 'large', spacingTop: 'micro' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 4 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'base', textColor: 'base' },
                'Order Details'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 8, textAlign: 'right', position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'base', textBold: true },
                'Order Date:'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textAlign: 'left', textColor: 'base', textSize: 'base' },
                currentOrder.order_date
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'base', textBold: true },
                'Order #:'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textAlign: 'left', textColor: 'base', textSize: 'base' },
                currentOrder.order_number
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'small' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: currentOrder.product_image })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 4 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listDirection: 'nostyle', textColor: 'secondary', textSize: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textBold: false, textSize: 'medium', textColor: 'base' },
                    currentOrder.product_title
                  )
                ),
                currentOrder.product_author && _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'by ',
                    currentOrder.product_author
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 1, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  currentOrder.returned ? _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'secondary' },
                    'Returned'
                  ) : _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    null,
                    'Return'
                  )
                ),
                currentOrder.gift && _react2['default'].createElement(
                  'span',
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'View'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'Resend'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'Print'
                    )
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textAlign: 'left', textColor: 'base', textSize: 'base' },
                  'Credit Card'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textAlign: 'left', textColor: 'secondary' },
                  currentOrder.payment_type && currentOrder.payment_type.card_company,
                  ' ****-****-****-',
                  currentOrder.payment_type && currentOrder.payment_type.card_number
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacingTop: 'small', headingLevel: 3, textAlign: 'left', textColor: 'base', textSize: 'base' },
                  'Billing Address'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textAlign: 'left', textColor: 'secondary' },
                  currentOrder.payment_type && currentOrder.payment_type.street,
                  _react2['default'].createElement('br', null),
                  currentOrder.payment_type && currentOrder.payment_type.city,
                  _react2['default'].createElement('br', null),
                  currentOrder.payment_type && currentOrder.payment_type.zip
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Table,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textAlign: 'left', textColor: 'secondary' },
                        'Subtotal'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textAlign: 'left', textColor: 'secondary' },
                        '$',
                        currentOrder.price ? currentOrder.price.toFixed(2) : null
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textAlign: 'left', textColor: 'tertiary' },
                        'Tax'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textAlign: 'left', textColor: 'tertiary' },
                        '$',
                        (currentOrder.price * 0.07).toFixed(2)
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textAlign: 'left', textColor: 'base', textBold: true },
                        'Total'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textAlign: 'left', textColor: 'base', textBold: true },
                        '$',
                        (currentOrder.price + currentOrder.price * 0.07).toFixed(2)
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return OrderDetail;
})(_react2['default'].Component);

exports['default'] = OrderDetail;
module.exports = exports['default'];