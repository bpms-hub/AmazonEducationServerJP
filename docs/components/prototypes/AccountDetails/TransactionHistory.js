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

var _dataPrototypesProductsJson = require('../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var TransactionHistory = (function (_React$Component) {
  _inherits(TransactionHistory, _React$Component);

  function TransactionHistory(props) {
    _classCallCheck(this, TransactionHistory);

    _get(Object.getPrototypeOf(TransactionHistory.prototype), 'constructor', this).call(this, props);
    this.state = {
      activeElement: "step1"
    };
  }

  _createClass(TransactionHistory, [{
    key: 'handleSwitch',
    value: function handleSwitch(element) {
      this.setState({
        activeElement: element
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var fadeStep1 = ['bc-oh-pre-order'];

      if (this.state.activeElement === "step1") fadeStep1.push('bc-oh-pre-order-active');

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
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
                  'Orders'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { spacing: 'base', onChange: this.handleSwitch.bind(this, "step1") },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'All'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Pre-Orders'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Returns'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Memberships'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Gifts'
                  )
                )
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { spacing: 'medium', textColor: 'secondary' },
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo varius tortor sit amet mollis. Suspendisse ipsum diam, fermentum non ullamcorper eget, eleifend.'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Section,
              { cssClass: (0, _classnames2['default'])(fadeStep1), spacing: 'base' },
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
                _react2['default'].createElement(
                  _AudibleUITags2['default'].TableRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Table,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        { cssClass: 'bc-table-column-hidden' },
                        _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '80', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/pdp/asin_6._V288437133_.png' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        { cssClass: 'bc-table-column-hidden' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textSize: 'base', textBold: true },
                            'Product Title '
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'by First Last Author'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: "/prototypes/brickcity/account-details-b/orderdetail-a", textAlign: 'left', textSize: 'base' },
                      'D0A-7339708-6780702'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '10-14-2015'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '10-10-2016'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'Return'
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
                      _AudibleUITags2['default'].Table,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        { cssClass: 'bc-table-column-hidden' },
                        _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '80', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/pdp/asin_5._V288437133_.png' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        { cssClass: 'bc-table-column-hidden' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 9 },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Text,
                              { textSize: 'base', textBold: true },
                              'Product Title',
                              _react2['default'].createElement('br', null)
                            )
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 9 },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Text,
                              null,
                              'by First Last Author'
                            )
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: "/prototypes/brickcity/account-details-b/orderdetail-b", textAlign: 'left', textSize: 'base' },
                      'D0B-7339708-6780702'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '10-14-2015'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '10-10-2016'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'Cancel Pre-Order'
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
                      _AudibleUITags2['default'].Table,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        { cssClass: 'bc-table-column-hidden' },
                        _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '80', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/giftcenter/06MonthMembership._V289337813_.svg' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        { cssClass: 'bc-table-column-hidden' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 9, gridPush: 2 },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textBold: true },
                            '  6-Month Gold Gift Membeship'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: "/prototypes/brickcity/account-details-b/gift-detail", textAlign: 'left', textSize: 'base' },
                      'G0D-7339708-6780702'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '10-14-2015'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '10-10-2016'
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
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          null,
                          'View'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          null,
                          'Resend'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          null,
                          'Print'
                        )
                      )
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
                      _AudibleUITags2['default'].Table,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        { cssClass: 'bc-table-column-hidden' },
                        _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '80', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/pdp/asin_2._V288437133_.png' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        { cssClass: 'bc-table-column-hidden' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 8 },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridRow,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Text,
                              { textSize: 'base', textBold: true },
                              'Product Title ',
                              _react2['default'].createElement('br', null)
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridRow,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Text,
                              null,
                              'by First Last Author'
                            )
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: "/prototypes/brickcity/account-details-b/refund-detail", textAlign: 'left', textSize: 'base' },
                      'R0D-7339708-6780702'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '10-14-2015'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '10-10-2016'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'inactive' },
                      'Returned'
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
                      _AudibleUITags2['default'].Table,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        { cssClass: 'bc-table-column-hidden' },
                        _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '80', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/crest._V289338205_.svg' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        { cssClass: 'bc-table-column-hidden' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 8, gridPush: 1 },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridRow,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Text,
                              { textSize: 'base', textBold: true },
                              'Gold Annual Membership'
                            )
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: "/prototypes/brickcity/account-details-b/member-detail", textAlign: 'left', textSize: 'base' },
                      'M0D-7339708-6780702'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '10-14-2015'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      '10-10-2016'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableColumn,
                    null,
                    _react2['default'].createElement(_AudibleUITags2['default'].Link, null)
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return TransactionHistory;
})(_react2['default'].Component);

exports['default'] = TransactionHistory;
module.exports = exports['default'];