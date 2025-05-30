'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var _ubiquityCc = require('../ubiquity/cc');

var _ubiquityCc2 = _interopRequireDefault(_ubiquityCc);

var PaymentMethod = (function () {
  function PaymentMethod() {
    _classCallCheck(this, PaymentMethod);
  }

  _createClass(PaymentMethod, [{
    key: 'render',
    value: function render() {

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacingTop: 'micro' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 12, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'primary', hasBorder: true, paddingSize: 'medium', spacing: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'base', textColor: 'base' },
                  'Payment'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'medium', textColor: 'secondary' },
                  'Create, modify, and remove your credit card information.'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 5 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3 },
                      'Credit Card'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3 },
                      'Full Name'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3 },
                      'Expires on'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 5 },
                    _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { checked: 'true' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'American Express ending in 2843 (Default Card)'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'secondary' },
                      'John Dough'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'secondary' },
                      '02-18'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: "/prototypes/brickcity/payment-information" },
                      'Edit / Delete'
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].GridColumn, { gridPush: 1, gridUnits: 3, position: 'last' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 5 },
                    _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Visa ending in 2121'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'secondary' },
                      'John Dough'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'secondary' },
                      '10-19'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: "/prototypes/brickcity/payment-information" },
                      'Edit / Delete'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Expander,
                  { hideText: 'Close', showText: '+ Add a New Card' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Box,
                    { hasBorder: false, paddingSize: 'none', spacing: 'base' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { spacing: 'base', headingLevel: 2 },
                      'Add Card'
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 6 },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { headingLevel: 3, hasBold: true, spacing: 'mini' },
                          'Card Type'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'mini' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 10 },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Dropdown,
                              { textColor: 'secondary' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].DropdownOption,
                                null,
                                'Select'
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].DropdownOption,
                                null,
                                'Visa'
                              )
                            )
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'mini' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 10 },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Heading,
                              { headingLevel: 3, hasBold: true, spacing: 'mini' },
                              'Card Number'
                            ),
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Input' })
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'mini' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 10 },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Heading,
                              { headingLevel: 3, hasBold: true, spacing: 'mini' },
                              'Name on Card'
                            ),
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'First Last' })
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'base' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Heading,
                            { headingLevel: 3, hasBold: true, spacing: 'mini' },
                            'Expires'
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 4 },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Dropdown,
                              { textColor: 'secondary' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].DropdownOption,
                                null,
                                'Month'
                              )
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 4 },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Dropdown,
                              { textColor: 'tertiary' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].DropdownOption,
                                null,
                                'Year'
                              )
                            )
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'small' },
                          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'mini', checked: false }),
                          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textColor: 'secondary' },
                            'This is my primary card '
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 6, gridPush: 1, position: 'last', spacingTop: 'none' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'mini' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 10, last: false, textAlign: 'left' },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Heading,
                              { headingLevel: 3, hasBold: true, spacing: 'mini' },
                              'Address Line 1'
                            ),
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Input' })
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'mini' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 10 },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Heading,
                              { headingLevel: 3, hasBold: true, spacing: 'mini' },
                              'Address Line 2'
                            ),
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Input' })
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'mini' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 10 },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Heading,
                              { headingLevel: 3, hasBold: true, spacing: 'mini' },
                              'City'
                            ),
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Input' })
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
                              { headingLevel: 3, hasBold: true, spacing: 'mini' },
                              'State / Province'
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Dropdown,
                              { textColor: 'tertiary' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].DropdownOption,
                                null,
                                'Input'
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
                              { headingLevel: 3, hasBold: true, spacing: 'mini' },
                              'Zip / Postal Code'
                            ),
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Input' })
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'mini' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 10 },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Heading,
                              { headingLevel: 3, hasBold: true, spacing: 'mini' },
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
                          { spacing: 'large' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 10 },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Heading,
                              { headingLevel: 3, hasBold: true, spacing: 'mini' },
                              'Phone'
                            ),
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Input' })
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { inline: false, gridUnits: 4 },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Button,
                              null,
                              'Cancel'
                            )
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridColumn,
                            { gridUnits: 4, inline: false },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Button,
                              { buttonType: 'primary' },
                              'Add'
                            )
                          )
                        )
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
              { backgroundColor: 'primary', hasBorder: true, paddingSize: 'base', spacing: 'large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'none' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'base', textColor: 'base' },
                  'Redeem Promotional Code'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'medium', textColor: 'secondary' },
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non augue placerat, suscipit ligula nec, volutpat nunc. Aenean bibendum ornare velit,  non ornare nulla fermentum pellentesque.'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 7 },
                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Enter the code you received...' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 2 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Button,
                    { inline: false, buttonType: 'primary' },
                    'Redeem'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return PaymentMethod;
})();

exports['default'] = PaymentMethod;
module.exports = exports['default'];
/*   <BC.GridColumn gridUnits={2}>
   <BC.Heading headingLevel={3}>Card Number</BC.Heading>
 </BC.GridColumn> */ /* <BC.GridColumn gridUnits={2}>
                      <BC.Paragraph  textColor="secondary">****-****-****-1041</BC.Paragraph>
                     </BC.GridColumn> */ /*    <BC.GridColumn gridUnits={2}>
                                              <BC.Paragraph  textColor="secondary">****-****-****-2121</BC.Paragraph>
                                            </BC.GridColumn>*/ /* RIGHT Section*/