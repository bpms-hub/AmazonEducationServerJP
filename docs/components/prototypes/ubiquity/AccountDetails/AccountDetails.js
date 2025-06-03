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

var AccountDetails = (function (_React$Component) {
  _inherits(AccountDetails, _React$Component);

  function AccountDetails() {
    _classCallCheck(this, AccountDetails);

    _get(Object.getPrototypeOf(AccountDetails.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AccountDetails, [{
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
            _AudibleUITags2['default'].Section,
            { spacingTop: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'large' },
              'Account Details'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'medium' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'base', textBold: false },
                'My Membership'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'secondary', spacing: 'large', paddingSize: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'none' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6, spacing: 'base' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, spacing: 'micro' },
                        'Member Since:'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'micro', textColor: 'base' },
                        '08-02-2011'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { spacing: 'micro', headingLevel: 3 },
                        'Membership Plan:'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'micro', textColor: 'base' },
                        'AudibleListener® Gold'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { spacing: 'micro', headingLevel: 3 },
                        'Next Credit Date:'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'micro', textColor: 'base' },
                        '10-05-2015'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { spacing: 'micro', headingLevel: 3 },
                        'Audiobook Credits:'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'micro', textColor: 'base' },
                        '1'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6, position: 'last', spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, spacing: 'base' },
                      'Membership Plan Description: ',
                      _react2['default'].createElement('br', null),
                      'AudibleListener® Discount Gold Membership - Monthly:'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { listType: 'unordered' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'none' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Paragraph,
                          { spacing: 'micro' },
                          'Special Promotion: $7.49 a month for the first 3 months, $14.95 a month thereafter.'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'none' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Paragraph,
                          { spacing: 'micro' },
                          'Receive 1 ',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            null,
                            'credit'
                          ),
                          ' each month.'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'none' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Paragraph,
                          { spacing: 'micro' },
                          'Save 30% on all audiobooks purchased without credits. Roll over up to 6 credits.'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'none' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Paragraph,
                          { spacing: 'micro' },
                          'Get a free audio subscription to The New York Times or The Wall Street Journal.'
                        )
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base' },
                    'Account Settings'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: '4', spacing: 'none', textColor: 'base' },
                      'Change your account settings'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'base', textColor: 'secondary' },
                      'Update your name, email address, password or mobile number'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', spacingTop: 'base', textAlign: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: '/prototypes/brickcity/account-settings' },
                      'Change'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: '4', spacing: 'none', textColor: 'base' },
                      'Switch your membership'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'secondary' },
                      'Meet your ideal listening needs by picking from one of our scalable membership plans'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', spacingTop: 'base', textAlign: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: '/prototypes/brickcity/switch-membership' },
                      'Switch'
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
                      { headingLevel: '4', spacing: 'none', textColor: 'base' },
                      'Cancel your membership'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'secondary' },
                      'You\'ll never lose the books you purchased, but if you wish, you can temporarily halt monthly payments or stop payments all together.'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', spacingTop: 'base', textAlign: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, url: "/prototypes/brickcity/cancel" },
                      'Cancel'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base', textColor: 'base' },
                    'Billing'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'large' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: '4', spacing: 'none', textColor: 'base' },
                      'Payment Information'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'secondary' },
                      'Update your payment method, billing address or phone number'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', spacingTop: 'base', textAlign: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: "/prototypes/brickcity/payment-information" },
                      'Edit'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'mini', textColor: 'base' },
                    'Gifts'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'Received a gift?'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: '/prototypes/brickcity/gift-center' },
                      'Redeem'
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
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'All gifts I have given'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: '/prototypes/brickcity/gifts-given' },
                      'Edit'
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
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'All gifts I have received'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: '/prototypes/brickcity/gifts-received' },
                      'Edit'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'mini', spacingTop: 'mini', textColor: 'base' },
                    'Transactions and Returns'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'Returns and past orders'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: '/prototypes/brickcity/audio-purchase-history' },
                      'View'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'Membership charges'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: '/prototypes/brickcity/membership-history' },
                      'View'
                    )
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].GridRow, { spacingTop: 'extra-large' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base', textColor: 'base' },
                    'Preferences'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'Email preferences'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: '/prototypes/brickcity/contact-preferences' },
                      'Edit'
                    )
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'Subscriptions'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: '/prototypes/brickcity/subscription-preferences' },
                      'Edit'
                    )
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'Daily Deal email subscription'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: '/prototypes/brickcity/daily-deal' },
                      'Edit'
                    )
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'Software Verification'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(_AudibleUITags2['default'].ToggleSwitch, { checked: true })
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'large', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'Share my likes and reviews on Audible.com'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(_AudibleUITags2['default'].ToggleSwitch, { checked: false })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base', textColor: 'base' },
                    'Profile & Privacy'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'My Profile'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: '/prototypes/brickcity/update-profile' },
                      'Edit'
                    )
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'Display my location to other Audible members'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(_AudibleUITags2['default'].ToggleSwitch, { checked: true })
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'Share my ratings with other Audible members'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'secondary' },
                      'This will allow other users to see each book that you have rated in your library'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(_AudibleUITags2['default'].ToggleSwitch, { checked: false })
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'Display my listening stats to other Audible members'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'secondary' },
                      'Join date, membership plan, number of books'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(_AudibleUITags2['default'].ToggleSwitch, { checked: true })
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'Let me show up in suggestion to other Audible members'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(_AudibleUITags2['default'].ToggleSwitch, { checked: false })
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'Hide adult content in searches'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(_AudibleUITags2['default'].ToggleSwitch, { checked: false })
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'Share my likes on Audible.com'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(_AudibleUITags2['default'].ToggleSwitch, { checked: false })
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'base' },
                      'Get notified of reviews posted by people you follow'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(_AudibleUITags2['default'].ToggleSwitch, { checked: false })
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

  return AccountDetails;
})(_react2['default'].Component);

exports['default'] = AccountDetails;
module.exports = exports['default'];
/*Account Infomrmation*/ /* <BC.GridRow spacing="large">
                            <BC.Box backgroundColor="secondary" paddingSize="small">
                              <BC.Paragraph spacing="none" textColor="secondary">Want to save 30% on all audiobook purchases, plus get audiobooks for as little as $9.56 each?
                                <BC.LetterSpace size="small" /><BC.Link>Learn More</BC.Link>
                              </BC.Paragraph>
                            </BC.Box>
                          </BC.GridRow> */ /*Account Settings*/ /*Billing*/ /*Gifts*/ /*Transactions & Returns*/ /* Right Column Account Information/Profile&Privacy */ /*Account Information*/ /*Profile & Privacy */