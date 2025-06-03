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

var Billings_B = (function (_React$Component) {
  _inherits(Billings_B, _React$Component);

  function Billings_B() {
    _classCallCheck(this, Billings_B);

    _get(Object.getPrototypeOf(Billings_B.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Billings_B, [{
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
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 12, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'primary', hasBorder: true, paddingSize: 'medium', spacing: 'medium', spacingTop: 'micro' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'base', textColor: 'base' },
                  'Payment Methods'
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
                    { gridUnits: 3 },
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
                      'Card Number'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridPush: 1, gridUnits: 3 },
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
                    { gridUnits: 3 },
                    _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { checked: 'true' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'American Express'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'secondary' },
                      '****-****-****-1041'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridPush: 1, gridUnits: 2 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'secondary' },
                      'John Dough'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridPush: 1, gridUnits: 2 },
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
                      'Edit / Remove'
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].GridColumn, { gridPush: 1, gridUnits: 3, position: 'last' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, null),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'Visa'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'secondary' },
                      '****-****-****-2121'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridPush: 1, gridUnits: 2 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'secondary' },
                      'John Dough'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridPush: 1, gridUnits: 2 },
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
                      'Edit / Remove'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Expander,
                  { hideText: 'Close Form', showText: '+ Add a New Card' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Box,
                    { hasBorder: false, paddingSize: 'none', spacing: 'base' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { spacing: 'base', headingLevel: 2 },
                      'Add a Credit Card'
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
                          'Credit Card Type'
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
                                'American Express'
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
                              'Credit Card Number'
                            ),
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '1234567891012345' })
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
                              'Cardholder Name'
                            ),
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'John Dough' })
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'base' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Heading,
                            { headingLevel: 3, hasBold: true, spacing: 'mini' },
                            'Credit Card Type'
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
                                '02'
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
                                '2017'
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
                            'Use this card for my membership. '
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
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '123 Sesame Street' })
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
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '2C' })
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
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'New York' })
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
                            { gridUnits: 6 },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].Heading,
                              { headingLevel: 3, hasBold: true, spacing: 'mini' },
                              'Zip / Postal Code'
                            ),
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '101010' })
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
                              'Phone Number'
                            ),
                            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '123-456-7890' })
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
                              'Add Credit Card'
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

  return Billings_B;
})(_react2['default'].Component);

exports['default'] = Billings_B;
module.exports = exports['default'];
/*  <BC.GridRow spacing="base">
   <BC.GridColumn gridUnits={4} inline={true}>
     <BC.Button buttonType="primary" >Save Changes</BC.Button>
             </BC.GridColumn>
   <BC.GridColumn gridUnits={4}>
     <BC.Button inline={true}>Cancel</BC.Button>
                         </BC.GridColumn>
                       </BC.GridRow>*/ /* RIGHT Section*/