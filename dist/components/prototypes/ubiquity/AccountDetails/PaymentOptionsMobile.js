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

var _HeaderProdHeaderMobile = require('../Header/ProdHeaderMobile');

var _HeaderProdHeaderMobile2 = _interopRequireDefault(_HeaderProdHeaderMobile);

var _FooterProdFooterMobile = require('../Footer/ProdFooterMobile');

var _FooterProdFooterMobile2 = _interopRequireDefault(_FooterProdFooterMobile);

var PaymentOptionsMobile = (function (_React$Component) {
  _inherits(PaymentOptionsMobile, _React$Component);

  function PaymentOptionsMobile() {
    _classCallCheck(this, PaymentOptionsMobile);

    _get(Object.getPrototypeOf(PaymentOptionsMobile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PaymentOptionsMobile, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeaderMobile2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacingTop: 'medium' },
            _react2['default'].createElement(
              _cc2['default'].MobilePageTitle,
              { first: true },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2 },
                'Manage Payment Options'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle', spacing: 'large' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacingTop: 'base' },
                    _react2['default'].createElement(
                      _cc2['default'].MobileLink,
                      { app: true, url: "/prototypes/brickcity-mobile/payment-information", hasTopBorder: this.props.hideCategories ? true : null },
                      ' ',
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textBold: true },
                        'Default Payment:'
                      ),
                      ' Visa ***-9011',
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        null,
                        'Name on Card: John Dough '
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, spacing: 'small' },
                  'PAYMENT METHODS'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle', spacing: 'large' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _cc2['default'].MobileLink,
                      { app: true, url: "/prototypes/brickcity-mobile/payment-information", hasTopBorder: this.props.hideCategories ? true : null },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, textBold: true },
                        'Visa ***-9011 (default payment method)'
                      ),
                      'Name on Card: John Dough',
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        null,
                        'Exp. Date: 09/2020'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacingTop: 'base' },
                    _react2['default'].createElement(
                      _cc2['default'].MobileLink,
                      { app: true, url: "/prototypes/brickcity-mobile/payment-information", hasTopBorder: this.props.hideCategories ? true : null },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { textBold: true },
                        '+ Add a New Credit Card'
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooterMobile2['default'], null)
      );
    }
  }]);

  return PaymentOptionsMobile;
})(_react2['default'].Component);

exports['default'] = PaymentOptionsMobile;
module.exports = exports['default'];