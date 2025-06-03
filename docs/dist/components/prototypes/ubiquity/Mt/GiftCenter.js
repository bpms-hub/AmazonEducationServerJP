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

var GiftCenter = (function (_React$Component) {
  _inherits(GiftCenter, _React$Component);

  function GiftCenter() {
    _classCallCheck(this, GiftCenter);

    _get(Object.getPrototypeOf(GiftCenter.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(GiftCenter, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { spacing: 'extra-large', spacingTop: 'medium' },
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'base' },
              'The Gift Center'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { fixedColumn: 'right', fixedColumnWidth: 300 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { columnPadding: '20px', fixedColumn: 'right', side: 'left' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'mini' },
                  'Give a Gift Membership'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base', textAlign: 'center' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _cc2['default'].Card,
                      { spacing: 'base',
                        headerColor: '#078383',
                        backgroundColor: '#00afb0',
                        headerName: '',
                        primaryPrice: '$45',
                        secondaryPrice: '$15.00 / month',
                        logoType: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/gift-box-inverse._V289510606_.svg',
                        cardName: '3 MONTH MEMBERSHIP',
                        hasBorder: false
                      },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'base' },
                        _react2['default'].createElement(_AudibleUITags2['default'].Text, { textSize: 'base', textColor: 'base', hasBold: true })
                      ),
                      _react2['default'].createElement(_AudibleUITags2['default'].GridRow, { spacing: 'base' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textSize: 'small', textColor: 'base' },
                          'Recipient Gets 3 credits'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { buttonType: 'primary', spacing: 'micro' },
                        'Give as a Gift'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _cc2['default'].Card,
                      { spacing: 'base',
                        headerColor: '#197397',
                        backgroundColor: '#1999cb',
                        headerName: '',
                        primaryPrice: '$90',
                        secondaryPrice: '$15.00 / month',
                        logoType: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/gift-box-inverse._V289510606_.svg',
                        cardName: '6 MONTH MEMBERSHIP',
                        hasBorder: false
                      },
                      _react2['default'].createElement(_AudibleUITags2['default'].GridRow, { spacing: 'base' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].GridRow, { spacing: 'base' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textSize: 'small', textColor: 'base' },
                          'Recipient Gets 6 credits'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { buttonType: 'primary', spacing: 'micro' },
                        'Give as a Gift'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(
                      _cc2['default'].Card,
                      { spacing: 'base',
                        headerColor: '#574089',
                        backgroundColor: '#714fb7',
                        headerName: '',
                        primaryPrice: '$150',
                        secondaryPrice: '$12.50 / month',
                        logoType: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/gift-box-inverse._V289510606_.svg',
                        cardName: '12 MONTH MEMBERSHIP',
                        hasBorder: false
                      },
                      _react2['default'].createElement(_AudibleUITags2['default'].GridRow, { spacing: 'base' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textSize: 'small', textColor: 'base' },
                          'Recipient Gets 12 credits'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { buttonType: 'primary', spacing: 'micro' },
                        'Give as a Gift'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textSize: 'small' },
                  'Terms & Conditions for Audible Gift Audiobooks'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { fixedColumn: 'right', fixedColumnWidth: 300, side: 'right' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'mini' },
                  'Redeem a Gift Membership'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 9 },
                    _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Enter your code here' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      null,
                      'Go'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, textSize: 'mini', url: "/prototypes/brickcity/redeem-promo" },
                    'Redeem a promotional code here.'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'base', textSize: 'medium' },
                    'Membership Includes:'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base' },
                        'Concierge Setup'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary', textSize: 'mini' },
                        'Our staff is ready 24/7 to help gift members start listening in minutes'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      '1 Credit Per Month'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary', textSize: 'mini' },
                        'Good to use on over 180,000 titles'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      'Exclusive Discounts'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary', textSize: 'mini' },
                        '30% off every title every day'
                      )
                    )
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

  return GiftCenter;
})(_react2['default'].Component);

exports['default'] = GiftCenter;
module.exports = exports['default'];