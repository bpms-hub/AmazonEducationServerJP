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

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var CartStep3Member = (function (_React$Component) {
  _inherits(CartStep3Member, _React$Component);

  function CartStep3Member(props) {
    _classCallCheck(this, CartStep3Member);

    _get(Object.getPrototypeOf(CartStep3Member.prototype), 'constructor', this).call(this, props);
  }

  _createClass(CartStep3Member, [{
    key: 'renderSummary',
    value: function renderSummary() {
      var rows = [];

      for (var x = 0; x < 3; x++) {
        rows.push(x);
      }

      var rowMap = rows.map(function () {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 150, spacing: 'small' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 150, side: 'left' },
              _react2['default'].createElement(_cc2['default'].Product, { asinImageUrl: _dataPrototypesProductsJson2['default'][0].product_images[500] })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { columnPadding: '20px', fixedColumn: 'left', side: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPull: 5, gridUnits: 7, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listDirection: 'nostyle', textColor: 'secondary', textSize: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base', textSize: 'base' },
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
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Narrated by Kenneth Branagh'
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' })
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
            _AudibleUITags2['default'].Heading,
            { headingLevel: '2', spacing: 'base', textAlign: 'center' },
            'Your book is now available in your Library.'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { textAlign: 'center', backgroundImage: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cart-step3-banner._V288437077_.jpg', heightCss: '421px', spacing: 'base', width: '998px' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Section,
              { paddingTop: 'large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 1, textAlign: 'center', textColor: 'inverse' },
                'Start listening with your favorite devices'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { textAlign: 'center', textColor: 'inverse' },
                'Select one to get started or, for more info on all of the ways you can listen, ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'click here'
                ),
                '.'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'small', spacingTop: 'medium' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { spacingTop: 'mini', gridUnits: 2, gridPush: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { heightCss: '50px' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconSize: 'large', iconType: 'apple', textColor: 'inverse' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, textColor: 'inverse' },
                  'Apple'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2, gridPush: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacingTop: 'small', spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Section,
                    { heightCss: '30px' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconSize: 'large', iconType: 'android', textColor: 'inverse' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, textColor: 'inverse' },
                  'Android'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2, gridPush: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacingTop: 'small', spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Section,
                    { heightCss: '30px' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconSize: 'large', iconType: 'amazon', textColor: 'inverse' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, textColor: 'inverse' },
                  'Kindle'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2, gridPull: 2, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { heightCss: '45px', spacingTop: 'small' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconSize: 'large', iconType: 'windows', textColor: 'inverse' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, textColor: 'inverse' },
                  'Windows'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridPush: 2, gridUnits: 8 },
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'large' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { textAlign: 'center', textColor: 'inverse' },
                'If you prefer, have a link sent to you'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4, gridPush: 3 },
                _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Enter your phone number or email', spacing: 'small' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2, gridPull: 3, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { buttonType: 'primary' },
                    'Send me the link'
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
              { gridUnits: 7, spacing: 'micro', spacingTop: 'small' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: '1' },
                'Purchase Summary'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 5, position: 'last', spacing: 'small', spacingTop: 'base', textAlign: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textBold: true, textColor: 'secondary', textSize: 'base' },
                'Order ID# D01-2611356-589029'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                null,
                _react2['default'].createElement(_AudibleUITags2['default'].Pipe, null),
                'View order details'
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 150, spacing: 'small' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 150, side: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { url: '/prototypes/brickcity/pdp' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/cart/cover-trial._V288437077_.jpg' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { columnPadding: '20px', fixedColumn: 'left', side: 'right' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridPull: 5, gridUnits: 7, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'base', textSize: 'base' },
                    '30-day Free Membership'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro', spacingTop: 'micro' },
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
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Membership Continues until you cancel (by visiting your aBCount or contacting customer service)'
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
          this.renderSummary(),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: '2', textAlign: 'center', spacing: 'micro' },
            'Questions? Give us a call'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { textAlign: 'center', spacing: 'extra-large' },
            'We’re here for you 24/7. Give us a call at',
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textColor: 'link' },
              ' 1-888-283-5051 '
            ),
            '(US & Canada),',
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textColor: 'link' },
              ' 1-973-820-0400 '
            ),
            '(International)'
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return CartStep3Member;
})(_react2['default'].Component);

exports['default'] = CartStep3Member;
module.exports = exports['default'];
/* Cart Items */ /* Banner */ /* Purchase Summary */ /* 30-day Membership */ /* Bottom Text */