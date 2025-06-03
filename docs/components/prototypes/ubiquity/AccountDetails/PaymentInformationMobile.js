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

var PaymentInformationMobile = (function (_React$Component) {
  _inherits(PaymentInformationMobile, _React$Component);

  function PaymentInformationMobile() {
    _classCallCheck(this, PaymentInformationMobile);

    _get(Object.getPrototypeOf(PaymentInformationMobile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PaymentInformationMobile, [{
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
            _AudibleUITags2['default'].GridRow,
            { spacingTop: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { textAlign: 'center', headingLevel: 2 },
              'Enter Card Information'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Dropdown,
                { textColor: 'tertiary', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].DropdownOption,
                  null,
                  'Select a card type'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].DropdownOption,
                  null,
                  'Visa'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].DropdownOption,
                  null,
                  'MasterCard'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].DropdownOption,
                  null,
                  'American Express'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].DropdownOption,
                  null,
                  'Discover'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { spacing: 'base', placeholder: 'Credit Card Number (No spaces or dashes)' })
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Cardholder Name (As it appears on card)' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Dropdown,
              { textColor: 'tertiary' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Month'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Dropdown,
              { textColor: 'tertiary' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Year'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Card Holder Name' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Address Line 1' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Address Line 2' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'City' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Dropdown,
              { textColor: 'tertiary' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'State/Province'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Zip/Postal code' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Dropdown,
              { textColor: 'tertiary' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Country'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Phone number' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'mini', disabled: true, label: 'Use this card for my membership.' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 12, inline: true },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { buttonType: 'primary' },
                'Submit'
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooterMobile2['default'], null)
      );
    }
  }]);

  return PaymentInformationMobile;
})(_react2['default'].Component);

exports['default'] = PaymentInformationMobile;
module.exports = exports['default'];
/*  <BC.Button buttonType="primary">Save Changes</BC.Button>*/