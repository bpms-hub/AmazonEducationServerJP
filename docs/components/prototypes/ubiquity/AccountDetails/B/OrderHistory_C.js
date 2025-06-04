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
                  'Account Activity'
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
                    'Pre-Order History'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Audio Purchase History'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Refund History'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Gifts Given'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Gifts Reeived'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'Membership History'
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
                      _react2['default'].createElement(_AudibleUITags2['default'].Product, { asinSize: 'mini', hasAsin: false, onAsin: true, productAsin: _dataPrototypesProductsJson2['default'][3].asin })
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
                            _AudibleUITags2['default'].Heading,
                            { headingLevel: 3, textColor: 'base' },
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
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 12 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textAlign: 'left', textColor: 'base', textSize: 'base' },
                        'D01-7339708-6780702'
                      )
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
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 11 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { buttonColor: 'secondary', buttonType: '' },
                  'Load More'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 1, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { buttonColor: 'secondary' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-up', iconSize: 'medium' })
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