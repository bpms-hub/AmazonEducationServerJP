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

var CartNoCard = (function (_React$Component) {
  _inherits(CartNoCard, _React$Component);

  function CartNoCard() {
    _classCallCheck(this, CartNoCard);

    _get(Object.getPrototypeOf(CartNoCard.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CartNoCard, [{
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
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 9 },
              _react2['default'].createElement(
                _cc2['default'].ProgressBarRow,
                { textSize: 'medium', textBold: true },
                _react2['default'].createElement(
                  _cc2['default'].ProgressBar,
                  { activeState: true, spacing: 'base', widthPercentage: 33.3 },
                  'Cart'
                ),
                _react2['default'].createElement(
                  _cc2['default'].ProgressBar,
                  { spacing: 'base', widthPercentage: 33.3 },
                  'Place Order'
                ),
                _react2['default'].createElement(
                  _cc2['default'].ProgressBar,
                  { spacing: 'base', widthPercentage: 33.3 },
                  'Ready to Download'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: '1', spacing: 'small' },
                  'Add Credit Card'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'large' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 5 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Credit Card Type'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Dropdown,
                    { spacing: 'base' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Select a card type'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 2'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 3'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 4'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Credit Card Number'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Card holder Name'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Expiration Date'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Dropdown,
                    { inline: true, spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Month'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 2'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 3'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 4'
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Dropdown,
                    { inline: true },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Year'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 2'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 3'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 4'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Section,
                    null,
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      'Use this card for my membership'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 5, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Address Line 1'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Address Line 2'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'City'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'State/Province'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Dropdown,
                    { spacing: 'base' },
                    _react2['default'].createElement(_AudibleUITags2['default'].DropdownOption, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 2'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 3'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 4'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Zip/Postal Code'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Country'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Dropdown,
                    { spacing: 'base' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'United States'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 2'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 3'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 4'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Phone Number'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { spacing: 'base' })
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'extra-large' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3, gridPush: 6 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { buttonType: 'secondary' },
                    'Cancel'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 3, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { app: true, url: '/prototypes/brickcity/cart-step2', buttonType: 'primary' },
                    'Add Credit Card'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3, position: 'last' },
              _react2['default'].createElement(_cc2['default'].ProductDetail, {
                productTitle: 'In your Cart',
                verticalProduct: true,
                bookTitle: 'Both Flesh and Not',
                bookAuthor: 'David Foster Wallace'
              })
            )
          ),
          _react2['default'].createElement(_FooterProdFooter2['default'], null)
        )
      );
    }
  }]);

  return CartNoCard;
})(_react2['default'].Component);

exports['default'] = CartNoCard;
module.exports = exports['default'];
/* Progress Bar */