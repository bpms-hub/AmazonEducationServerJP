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

var _ubiquityCc = require('../../ubiquity/cc');

var _ubiquityCc2 = _interopRequireDefault(_ubiquityCc);

var _ubiquityHeaderProdHeaderMobile = require('../../ubiquity/Header/ProdHeaderMobile');

var _ubiquityHeaderProdHeaderMobile2 = _interopRequireDefault(_ubiquityHeaderProdHeaderMobile);

var _ubiquityFooterProdFooterMobile = require('../../ubiquity/Footer/ProdFooterMobile');

var _ubiquityFooterProdFooterMobile2 = _interopRequireDefault(_ubiquityFooterProdFooterMobile);

var EditCardMobile = (function (_React$Component) {
  _inherits(EditCardMobile, _React$Component);

  function EditCardMobile() {
    _classCallCheck(this, EditCardMobile);

    _get(Object.getPrototypeOf(EditCardMobile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(EditCardMobile, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_ubiquityHeaderProdHeaderMobile2['default'], null),
        _react2['default'].createElement(
          _ubiquityCc2['default'].MobilePageTitle,
          { textAlign: 'center', first: true, url: "/prototypes/brickcity-mobile/account-details/billing" },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            { textColor: 'base' },
            'Edit Card'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacingTop: 'base', textAlign: 'left' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, hasBold: true, spacing: 'micro' },
                  'Card Number'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '1234567891012345' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, hasBold: true, spacing: 'micro' },
                'Expires'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { textColor: 'secondary' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    '02'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { textColor: 'tertiary' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    '2017'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, hasBold: true, spacing: 'micro' },
                  'Name on Card'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'John Dough' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12, last: false, textAlign: 'left' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, hasBold: true, spacing: 'micro' },
                  'Address 1'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '123 Sesame Street' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, hasBold: true, spacing: 'micro' },
                  'Address 2'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '2C' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, hasBold: true, spacing: 'micro' },
                  'City'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'New York' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, hasBold: true, spacing: 'micro' },
                  'State / Province'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { textColor: 'tertiary' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'NY'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, hasBold: true, spacing: 'micro' },
                  'Country'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Dropdown,
                  { textColor: 'tertiary' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].DropdownOption,
                    null,
                    'United States of America'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, hasBold: true, spacing: 'micro' },
                  'Zip / Postal Code'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '101010' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridunits: 5, gridPush: 1, spacingTop: 'extra-large' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'tertiary', textBold: false },
                  'Autofill copy'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, hasBold: true, spacing: 'micro' },
                  'Phone'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '123-456-7890' })
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'micro' },
              _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'mini', checked: false }),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'secondary' },
                'Use this card for my membership'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12, inline: false },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { buttonType: 'primary' },
                  'Submit'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12, inline: false },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { buttonType: 'base' },
                  'Remove Card'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_ubiquityFooterProdFooterMobile2['default'], null)
      );
    }
  }]);

  return EditCardMobile;
})(_react2['default'].Component);

exports['default'] = EditCardMobile;
module.exports = exports['default'];
/* RIGHT Section*/