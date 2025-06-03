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

var _dataPrototypesOrdersJson = require('../../../data/prototypes/orders.json');

var _dataPrototypesOrdersJson2 = _interopRequireDefault(_dataPrototypesOrdersJson);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _AccountDetailsLayout = require('./AccountDetailsLayout');

var _AccountDetailsLayout2 = _interopRequireDefault(_AccountDetailsLayout);

var PurchaseHistory = (function (_React$Component) {
  _inherits(PurchaseHistory, _React$Component);

  function PurchaseHistory(props) {
    _classCallCheck(this, PurchaseHistory);

    _get(Object.getPrototypeOf(PurchaseHistory.prototype), 'constructor', this).call(this, props);
  }

  _createClass(PurchaseHistory, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!this.props.location.query.orderType) {
        this.props.history.push({
          pathname: '/prototypes/brickcity/account-details/purchase-history',
          search: '?orderType=orders'
        });
      }
    }
  }, {
    key: 'filterOrderType',
    value: function filterOrderType(event) {
      this.props.history.push({
        pathname: '/prototypes/brickcity/account-details/purchase-history',
        search: '?orderType=' + event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _AudibleUITags2['default'].Box,
        { background: 'primary', hasBorder: true, paddingSize: 'medium', spacing: 'large', spacingTop: 'micro' },
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 4 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2 },
              'Orders'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 8, position: 'last', textAlign: 'right' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textColor: 'base', textBold: true },
              'Order Type'
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Dropdown,
              { ref: 'orderType', inline: true, onChange: this.filterOrderType.bind(this) },
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                { value: 'orders' },
                'Orders'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                { value: 'memberships' },
                'Memberships'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                { value: 'gifts' },
                'Gifts'
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textColor: 'base', textBold: true },
              'Sort by'
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Dropdown,
              { inline: true },
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Last 90 Days'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Last 180 Days'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Year 2016'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Year 2015'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Year 2014'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Year 2013'
              )
            )
          )
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { spacing: 'base' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Table,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].TableRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].TableColumnHeading,
                null,
                'Item'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].TableColumnHeading,
                null,
                'Order #'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].TableColumnHeading,
                null,
                'Date'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].TableColumnHeading,
                null,
                'Total'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].TableColumnHeading,
                null,
                'Options'
              )
            ),
            _dataPrototypesOrdersJson2['default'][this.props.location.query.orderType ? this.props.location.query.orderType : 'orders'].map(function (order, index) {
              return _react2['default'].createElement(
                _AudibleUITags2['default'].TableRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableColumn,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 3 },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: order.product_image })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 9, position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3 },
                        order.product_title
                      ),
                      order.product_author && _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'by ',
                        order.product_author
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableColumn,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    {
                      app: true,
                      url: "/prototypes/brickcity/account-details/purchase-history/" + order.order_number,
                      textAlign: 'left',
                      textSize: 'base' },
                    order.order_number
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableColumn,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    order.order_date
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableColumn,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    null,
                    order.credits ? order.credits + " Credits" : "$" + (order.price + order.price * 0.07).toFixed(2)
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableColumn,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listType: 'nostyle' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      order.returned ? _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'tertiary' },
                        'Returned'
                      ) : _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Return'
                      )
                    ),
                    order.gift && _react2['default'].createElement(
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
              );
            })
          )
        )
      );
    }
  }]);

  return PurchaseHistory;
})(_react2['default'].Component);

exports['default'] = PurchaseHistory;
module.exports = exports['default'];