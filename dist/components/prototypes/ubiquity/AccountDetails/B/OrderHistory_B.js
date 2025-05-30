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

var _cc = require('../../cc');

var _cc2 = _interopRequireDefault(_cc);

var _dataPrototypesProductsJson = require('../../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var OrderHistory_B = (function (_React$Component) {
  _inherits(OrderHistory_B, _React$Component);

  function OrderHistory_B(props) {
    _classCallCheck(this, OrderHistory_B);

    _get(Object.getPrototypeOf(OrderHistory_B.prototype), 'constructor', this).call(this, props);
    this.state = {
      activeElement: "step1"
    };
  }

  _createClass(OrderHistory_B, [{
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
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 12, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { background: 'primary', hasBorder: true, paddingSize: 'base', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 2, spacing: 'small', textColor: 'base' },
                      'Pre-Order History'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, textAlign: 'right', position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'See all'
                    )
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Table,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Order #: ',
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        '3R874FCKJ08394JXX1BLK'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Payment Method'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Ordered On'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Scheduled Release'
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].TableColumnHeading, null)
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 2 },
                        _react2['default'].createElement(_cc2['default'].Product, { asinSize: 'mini', hasAsin: false, onAsin: true, productAsin: _dataPrototypesProductsJson2['default'][3].asin })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 10, position: 'last' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].List,
                          { listDirection: 'nostyle', textColor: 'secondary', textSize: 'small' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Text,
                              { textColor: 'base', textSize: 'medium' },
                              'The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia'
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Text,
                              null,
                              'by C.S. Lewis'
                            )
                          )
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textAlign: 'left', textColor: 'base', textSize: 'base' },
                        '1 Credit'
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
                        'Cancel'
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { background: 'primary', hasBorder: true, paddingSize: 'base', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 2, spacing: 'small', textColor: 'base' },
                      'Audio Purchase History'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, textAlign: 'right', position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'See all'
                    )
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'base', textColor: 'tertiary' },
                    'Your books are grouped by order. AudibleListener® plan members are eligible to take advantage of our Great Listen Guarantee and make returns.'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 12, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Table,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumnHeading,
                          null,
                          'Order #: ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            null,
                            '7ZCMMCZ1FCL8DTZDQ0Z0'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumnHeading,
                          null,
                          'Payment Method'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumnHeading,
                          null,
                          'Ordered On'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumnHeading,
                          null,
                          'Released'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].TableColumnHeading, null)
                      ),
                      _react2['default'].createElement(
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
                              { gridUnits: 2 },
                              _react2['default'].createElement(_cc2['default'].Product, { asinSize: 'mini', hasAsin: false, onAsin: true, productAsin: _dataPrototypesProductsJson2['default'][4].asin })
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridColumn,
                              { gridUnits: 10, position: 'last' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].List,
                                { listDirection: 'nostyle', textColor: 'secondary', textSize: 'small' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].ListItem,
                                  null,
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    { textColor: 'base', textSize: 'medium' },
                                    'The Lion, the Witch, and the Wardrobe: The Chronicles of Narnia'
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].ListItem,
                                  null,
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    null,
                                    'by C.S. Lewis'
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
                            _AudibleUITags2['default'].Text,
                            null,
                            '1 Credit'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumn,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textAlign: 'center', textColor: 'base', textSize: 'base' },
                            '10-14-2015'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumn,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            '11-10-2016'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].TableColumn,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { buttonType: 'secondary' },
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
                            _AudibleUITags2['default'].GridRow,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridColumn,
                              { gridUnits: 2 },
                              _react2['default'].createElement(_cc2['default'].Product, { asinSize: 'mini', hasAsin: false, onAsin: true, productAsin: _dataPrototypesProductsJson2['default'][2].asin })
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridColumn,
                              { gridUnits: 10, position: 'last' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].List,
                                { listDirection: 'nostyle', textColor: 'secondary', textSize: 'small' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].ListItem,
                                  null,
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    { textColor: 'base', textSize: 'medium' },
                                    'The Martian'
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].ListItem,
                                  null,
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    null,
                                    'by Andy Weir'
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
                            _AudibleUITags2['default'].Text,
                            { textAlign: 'center', textColor: 'base', textSize: 'base' },
                            '1 Credit'
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
                            { buttonType: 'secondary' },
                            'Return'
                          )
                        )
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { background: 'primary', hasBorder: true, paddingSize: 'base', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 2, spacing: 'small', textColor: 'base' },
                      'Refund History'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, textAlign: 'right', position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'See all'
                    )
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Table,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Refund Date'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Refund #'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Refund Total'
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
                        null,
                        '02-04-15'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'H2RB7ZCMMCZ1FTZDQ0Z0'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '3 Months'
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
                        null,
                        '05-24-15'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'NNWKAZZYYZJJ9MVC0910'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '6 Months'
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
                        null,
                        '12-20-14'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        '8HDDF99ZDJKLJRZPTQW1'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '12 Months'
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { background: 'primary', hasBorder: true, paddingSize: 'base', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 2, spacing: 'small', textColor: 'base' },
                      'Gifts Given'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, textAlign: 'right', position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'See all'
                    )
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Table,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Order Date'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Order #'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Sent to'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Item'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Delivered on'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Status'
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
                        _AudibleUITags2['default'].Text,
                        null,
                        '03-24-2015'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'H2RB7ZCMMCZ1FTZDQ0Z0'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'herbiehancock@amazon.com'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Herbie Hancock: Possibilities'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '02-04-2015'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Unclaimed'
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
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '02-05-2015'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'H2RB7ZCMMCZ1FTZDQ0Z0'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'thomasedison@amazon.com'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Wizard: The Life and Times of Nikola Tesla: Biography of a Genius'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '06-24-2015'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Unclaimed'
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
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { background: 'primary', hasBorder: true, paddingSize: 'base', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 2, spacing: 'small', textColor: 'base' },
                      'Gifts Received'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, textAlign: 'right', position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'See all'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Table,
                    { textAlign: 'center' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumnHeading,
                        null,
                        'Redeem Date'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumnHeading,
                        null,
                        'Received From'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumnHeading,
                        null,
                        'Item'
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
                          null,
                          '05-19-2015'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          null,
                          'firstlast@amazon.com'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          null,
                          'AudibleListener® 3-Month Platinum Gift Membership'
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
                          null,
                          '05-24-2015'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          null,
                          'firstlast@amazon.com'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          null,
                          'AudibleListener® Annual Platinum Gift Membership'
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
                          null,
                          '12-20-2014'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          null,
                          'firstlast@amazon.com'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          null,
                          'AudibleListener® 3-Month Gold Gift Membership'
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { background: 'primary', hasBorder: true, paddingSize: 'base', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 2, spacing: 'small', textColor: 'base' },
                      'Membership History'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, textAlign: 'right', position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'See all'
                    )
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Table,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].TableRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Order Date'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Order #'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Product Name'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumnHeading,
                      null,
                      'Order Total'
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
                        null,
                        '09-14-2015'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'H2RB7ZCMMCZ1FTZDQ0Z0'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'AudibleListener® Annual Platinum Gift Membership'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '$14.95'
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
                        null,
                        '08-14-2015'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'NNWKAZZYYZJJ9MVC0910'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'AudibleListener® Annual Platinum Gift Membership'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '$14.95'
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
                        null,
                        '09-14-2015'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'RK8HDDF99ZDRVQZPTQW1'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'AudibleListener® Annual Platinum Gift Membership'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableColumn,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '$0.00'
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

  return OrderHistory_B;
})(_react2['default'].Component);

exports['default'] = OrderHistory_B;
module.exports = exports['default'];