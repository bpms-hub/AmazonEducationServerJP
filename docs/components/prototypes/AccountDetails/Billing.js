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

var _ubiquityCc = require('../ubiquity/cc');

var _ubiquityCc2 = _interopRequireDefault(_ubiquityCc);

var _AccountDetailsLayout = require('./AccountDetailsLayout');

var _AccountDetailsLayout2 = _interopRequireDefault(_AccountDetailsLayout);

var Billing = (function (_React$Component) {
  _inherits(Billing, _React$Component);

  function Billing(props) {
    _classCallCheck(this, Billing);

    _get(Object.getPrototypeOf(Billing.prototype), 'constructor', this).call(this, props);
    this.state = {
      defaultCard: '1'
    };
  }

  _createClass(Billing, [{
    key: 'updateCard',
    value: function updateCard(event) {
      this.setState({
        defaultCard: event.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'span',
        null,
        _react2['default'].createElement(
          'form',
          null,
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
                    { gridUnits: 1 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3 },
                      'Default'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 5 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3 },
                      'Credit Card Type'
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
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3 },
                      'Full Name'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 1 },
                    _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { onChange: this.updateCard.bind(this), checked: this.state.defaultCard === '1', value: '1', type: 'radio', name: 'default-payment' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 5 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'American Express ending in 2843'
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
                    { gridUnits: 2 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'secondary' },
                      'John Dough'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ModalTrigger,
                      { modalTitle: 'Edit Payment Method', modalContent: _react2['default'].createElement(
                          'div',
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridRow,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridColumn,
                              { gridUnits: 6 },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'medium' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Text,
                                  { textColor: 'base', textBold: true },
                                  'American Express '
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Text,
                                  { textColor: 'base' },
                                  'ending in 2843'
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridRow,
                                    { spacing: 'mini' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Text,
                                      { textColor: 'base', textBold: true },
                                      'Cardholder Name'
                                    )
                                  ),
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridRow,
                                    null,
                                    _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'John Dough' })
                                  )
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridRow,
                                  { spacing: 'mini' },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    { textColor: 'base', textBold: true },
                                    'Credit Card Type'
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 5 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Dropdown,
                                    { textColor: 'tertiary' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].DropdownOption,
                                      null,
                                      '02'
                                    )
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 5 },
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
                              )
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridColumn,
                              { gridUnits: 6, position: 'last', spacingTop: 'large' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10, textAlign: 'left' },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridRow,
                                    { spacing: 'mini' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Text,
                                      { textColor: 'base', textBold: true },
                                      'Address Line 1'
                                    )
                                  ),
                                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '123 Sesame Street' })
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridRow,
                                    { spacing: 'mini' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Text,
                                      { textColor: 'base', textBold: true },
                                      'Address Line 2'
                                    )
                                  ),
                                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '2C' })
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridRow,
                                    { spacing: 'mini' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Text,
                                      { textColor: 'base', textBold: true },
                                      'Country'
                                    )
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
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    { textColor: 'base', textBold: true },
                                    'Zip/Postal Code'
                                  ),
                                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '101010' })
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridRow,
                                    { spacing: 'mini' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Text,
                                      { textColor: 'base', textBold: true },
                                      'City'
                                    )
                                  ),
                                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'New York' })
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridRow,
                                    { spacing: 'mini' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Text,
                                      { textColor: 'base', textBold: true },
                                      'State'
                                    )
                                  ),
                                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'New York' })
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'medium' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    { textColor: 'base', textBold: true },
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
                                  { gridUnits: 4 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Button,
                                    { url: '/prototypes/brickcity/account-details/billing' },
                                    'Cancel'
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 6 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Button,
                                    { url: '/prototypes/brickcity/account-details/billing', buttonType: 'primary' },
                                    'Save Changes'
                                  )
                                )
                              )
                            )
                          )
                        ), width: '640px' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Edit'
                      )
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].Divider, { type: 'vertical' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ModalTrigger,
                      { modalTitle: 'Delete Payment Method', modalContent: _react2['default'].createElement(
                          'div',
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridRow,
                            { textAlign: 'left' },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridColumn,
                              { gridUnits: 12 },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Paragraph,
                                null,
                                'Are you sure you want to delete: ',
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Text,
                                  { textBold: true },
                                  'American Express'
                                ),
                                ' ending in ',
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Text,
                                  { textBold: true },
                                  ' 2843'
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { textAlign: 'left' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 2, gridPush: 6 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Button,
                                    { buttonType: 'secondary', url: '/prototypes/brickcity/account-details/billing' },
                                    'Cancel'
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 4, position: 'last' },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Button,
                                    { buttonType: 'primary', url: '/prototypes/brickcity/account-details/billing' },
                                    'Confirm Delete'
                                  )
                                )
                              )
                            )
                          )
                        ), width: '740px' },
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Delete'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 1 },
                    _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { onChange: this.updateCard.bind(this), value: '2', checked: this.state.defaultCard === '2', type: 'radio', name: 'default-payment' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 5 },
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
                      '10-19'
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
                    { gridUnits: 2, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ModalTrigger,
                      { modalTitle: 'Edit Payment Method', modalContent: _react2['default'].createElement(
                          'div',
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridRow,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridColumn,
                              { gridUnits: 6 },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'medium' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Text,
                                  { textColor: 'base', textBold: true },
                                  'American Express '
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Text,
                                  { textColor: 'base' },
                                  'ending in 2843'
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridRow,
                                    { spacing: 'mini' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Text,
                                      { textColor: 'base', textBold: true },
                                      'Cardholder Name'
                                    )
                                  ),
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridRow,
                                    null,
                                    _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'John Dough' })
                                  )
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridRow,
                                  { spacing: 'mini' },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    { textColor: 'base', textBold: true },
                                    'Credit Card Type'
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 5 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Dropdown,
                                    { textColor: 'tertiary' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].DropdownOption,
                                      null,
                                      '02'
                                    )
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 5 },
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
                              )
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridColumn,
                              { gridUnits: 6, position: 'last', spacingTop: 'large' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10, textAlign: 'left' },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridRow,
                                    { spacing: 'mini' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Text,
                                      { textColor: 'base', textBold: true },
                                      'Address Line 1'
                                    )
                                  ),
                                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '123 Sesame Street' })
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridRow,
                                    { spacing: 'mini' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Text,
                                      { textColor: 'base', textBold: true },
                                      'Address Line 2'
                                    )
                                  ),
                                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '2C' })
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridRow,
                                    { spacing: 'mini' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Text,
                                      { textColor: 'base', textBold: true },
                                      'Country'
                                    )
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
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    { textColor: 'base', textBold: true },
                                    'Zip/Postal Code'
                                  ),
                                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '101010' })
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridRow,
                                    { spacing: 'mini' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Text,
                                      { textColor: 'base', textBold: true },
                                      'City'
                                    )
                                  ),
                                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'New York' })
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'base' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridRow,
                                    { spacing: 'mini' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Text,
                                      { textColor: 'base', textBold: true },
                                      'State'
                                    )
                                  ),
                                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'New York' })
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { spacing: 'medium' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 10 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    { textColor: 'base', textBold: true },
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
                                  { gridUnits: 4 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Button,
                                    { url: '/prototypes/brickcity/account-details/billing' },
                                    'Cancel'
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 6 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Button,
                                    { url: '/prototypes/brickcity/account-details/billing', buttonType: 'primary' },
                                    'Save Changes'
                                  )
                                )
                              )
                            )
                          )
                        ), width: '640px' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Edit'
                      )
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].Divider, { type: 'vertical' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ModalTrigger,
                      { modalTitle: 'Delete Payment Method', modalContent: _react2['default'].createElement(
                          'div',
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridRow,
                            { textAlign: 'left' },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridColumn,
                              { gridUnits: 12 },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Paragraph,
                                null,
                                'Are you sure you want to delete: ',
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Text,
                                  { textBold: true },
                                  'American Express'
                                ),
                                ' ending in ',
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Text,
                                  { textBold: true },
                                  ' 2843'
                                )
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridRow,
                                { textAlign: 'left' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 2, gridPush: 6 },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Button,
                                    { buttonType: 'secondary', url: '/prototypes/brickcity/account-details/billing' },
                                    'Cancel'
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridColumn,
                                  { gridUnits: 4, position: 'last' },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Button,
                                    { buttonType: 'primary', url: '/prototypes/brickcity/account-details/billing' },
                                    'Confirm Delete'
                                  )
                                )
                              )
                            )
                          )
                        ), width: '740px' },
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Delete'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Expander,
                    { hideText: 'Add a New Card', showText: 'Add a New Card', anchor: true },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { hasBorder: false, paddingSize: 'none', spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 6 },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridRow,
                            { spacing: 'mini', spacingTop: 'base' },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridColumn,
                              { gridUnits: 10 },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Heading,
                                { headingLevel: 3, hasBold: true, spacing: 'mini' },
                                'Card Number'
                              ),
                              _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '4111 1111 1111 1111' })
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
                              _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'John Dough' })
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
                              'Use this card for my membership'
                            )
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 6, position: 'last', spacingTop: 'none' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].GridRow,
                            { spacing: 'mini', spacingTop: 'base' },
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridColumn,
                              { gridUnits: 10, last: false, textAlign: 'left' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].Heading,
                                { headingLevel: 3, hasBold: true, spacing: 'mini' },
                                'Address Line 1'
                              ),
                              _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '1 Washington Pl' })
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
                                { headingLevel: 3, hasBold: true, spacing: 'mini' },
                                'Zip / Postal Code'
                              )
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridRow,
                              null,
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridColumn,
                                { gridUnits: 6 },
                                _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '12345' })
                              ),
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridColumn,
                                { gridunits: 5, gridPush: 1, spacingTop: 'mini' },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Text,
                                  { textColor: 'tertiary', textBold: false },
                                  'Autofill copy'
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
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].GridRow, null)
        )
      );
    }
  }]);

  return Billing;
})(_react2['default'].Component);

exports['default'] = Billing;
module.exports = exports['default'];
/*
<BC.GridColumn gridUnits={2}>
 <BC.Heading headingLevel={3}>Card Number</BC.Heading>
</BC.GridColumn>
*/ /*
   <BC.GridColumn gridUnits={2}>
    <BC.Paragraph  textColor="secondary">****-****-****-1041</BC.Paragraph>
   </BC.GridColumn>
   */ /* RIGHT Section*/ /*
                         <BC.GridColumn gridUnits={2}>
                          <BC.Paragraph  textColor="secondary">****-****-****-2121</BC.Paragraph>
                         </BC.GridColumn>
                         */ /* RIGHT Section*/ /* RIGHT Section*/ /*
                                                                  <BC.Box backgroundColor="primary" hasBorder={true} paddingSize="base" spacing="large">
                                                                  <BC.GridRow spacing="none">
                                                                  <BC.Heading headingLevel={2} spacing="base" textColor="base">Redeem Promotional Code</BC.Heading>
                                                                  <BC.Divider spacing="small"/>          
                                                                  <BC.Paragraph spacing="medium" textColor="secondary">
                                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non augue placerat, suscipit ligula nec, volutpat nunc. Aenean bibendum ornare
                                                                  velit,  non ornare nulla fermentum pellentesque.
                                                                  </BC.Paragraph>
                                                                  <BC.GridColumn gridUnits={7}>
                                                                  <BC.TextInput placeholder="Enter the code you received..."></BC.TextInput>
                                                                  </BC.GridColumn>
                                                                  <BC.GridColumn gridUnits={2}>
                                                                  <BC.Button inline={false} buttonType="primary">Redeem</BC.Button>
                                                                  </BC.GridColumn>
                                                                  </BC.GridRow>
                                                                  </BC.Box>
                                                                  */