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

var ContactPreferences = (function (_React$Component) {
  _inherits(ContactPreferences, _React$Component);

  function ContactPreferences() {
    _classCallCheck(this, ContactPreferences);

    _get(Object.getPrototypeOf(ContactPreferences.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ContactPreferences, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(_AudibleUITags2['default'].Breadcrumbs, { breadcrumbTrail: [{ name: "Account Details", url: "/prototypes/brickcity/account-details" }, { name: "Contact Preferences" }], spacing: 'small' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacingTop: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 1, spacing: 'small' },
              'Your Contact Preferences'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 12 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { spacing: 'large' },
                'We want to stay in touch, but only in ways that you find helpful. Select from the options below and click Save when you are finished. Your changes will take effect at Audible.com only.'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'medium' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, spacing: 'base', textBold: false },
                  'Email Preferences'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 4, spacing: 'mini' },
                    'Your email address:'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 4, spacing: 'mini' },
                    'Receive these emails at a different address:'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4, gridPull: 3, position: 'last', spacingTop: 'base', spacing: 'large' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { textColor: 'tertiary' },
                    'jondough@amazon.com'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { textColor: 'tertiary' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'Change'
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'medium' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, spacing: 'base', textBold: false },
                'Audible Marketing Emails and Newsletters'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'secondary', paddingSize: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'none', textColor: 'secondary' },
                  'Note: Even if you choose not to receive some marketing emails from us, you will still receive our transactional emails, such as messages related to your orders, updates about products or services you have purchased from us, or information about your account.',
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    null,
                    'Learn More'
                  )
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
                  { headingLevel: 4, spacing: 'none', textColor: 'secondary' },
                  _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, null),
                  'Send me emails from the following categories'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 10, gridPush: 1 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 4, spacing: 'mini', textColor: 'secondary' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  '  Credit Alert'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'none', textColor: 'tertiary' },
                  'Get a note saying your monthly credit(s) are available (and what better news than that, right?)'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 10, gridPush: 1 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 4, spacing: 'mini', textColor: 'secondary' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  '  Editors\' Picks & Customer Favorites'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'none', textColor: 'tertiary' },
                  'Stay in touch with editor updates on new and upcoming releases and member reviews in your favorite category.'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 10, gridPush: 1 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 4, spacing: 'mini', textColor: 'secondary' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  '  Sales & Offers'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'none', textColor: 'tertiary' },
                  'Be the first to know about sales and special offers.'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 10, gridPush: 1 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 4, spacing: 'mini', textColor: 'secondary' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  '  User Research Study Announcements'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'none', textColor: 'tertiary' },
                  'We will send occasional emails letting you know about Audible user research studies you can participate in and earn money.'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 10, gridPush: 1 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 4, spacing: 'mini', textColor: 'secondary' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  ' Audible News & Announcements'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'none', textColor: 'tertiary' },
                  'We\'ll send occasional emails letting you know about site improvements or changes.'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 10, gridPush: 1 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 4, spacing: 'mini', textColor: 'secondary' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  ' Rate & Review'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'none', textColor: 'tertiary' },
                  'We\'ll drop you a note asking what you thought of your most recent purchase. Most members find reviews really helpful in deciding what to listen to next, let them know what you thought!'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 10, gridPush: 1 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 4, spacing: 'mini', textColor: 'secondary' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  ' Hear & Now: New Releases Newsletter'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'none', textColor: 'tertiary' },
                  'We\'ll keep you updated with the best new books each week.'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 10, gridPush: 1 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 4, spacing: 'mini', textColor: 'secondary' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  ' OneBook'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'none', textColor: 'tertiary' },
                  'Receive audiobook recommendations from your friends.'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 10, gridPush: 1 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 4, spacing: 'mini', textColor: 'secondary' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  ' Author, Narrator, & Series Alerts'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'none', textColor: 'tertiary' },
                  'Personalized emails with recommendations based on your past purchases.'
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
                  { headingLevel: 4, spacing: 'none', textColor: 'secondary' },
                  _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, null),
                  'Do not send me marketing email'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'medium' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, spacing: 'base', textBold: false },
                'Other Contact Options'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 9 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 4, spacing: 'mini' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  '  Send me marketing offers through mail.'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 4, spacing: 'mini' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, null),
                  '  Send me marketing offers through phone.'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return ContactPreferences;
})(_react2['default'].Component);

exports['default'] = ContactPreferences;
module.exports = exports['default'];
/*Account Infomrmation*/ /*Audible marketing emails*/