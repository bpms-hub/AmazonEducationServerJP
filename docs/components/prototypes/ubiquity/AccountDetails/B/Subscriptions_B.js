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

var Subscriptions_B = (function (_React$Component) {
  _inherits(Subscriptions_B, _React$Component);

  function Subscriptions_B() {
    _classCallCheck(this, Subscriptions_B);

    _get(Object.getPrototypeOf(Subscriptions_B.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Subscriptions_B, [{
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
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'base', textColor: 'base' },
                    'Notifications'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { textColor: 'secondary' },
                    'Update your name, email address, and password'
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
                    { spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 10 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, hasBold: true, spacing: 'mini' },
                        _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { checked: 'true' }),
                        ' Send me emails from the following categories'
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
                        { headingLevel: 3, hasBold: true },
                        '   ',
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
                        ' ',
                        _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { checked: 'true' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                        ' Credit Alert'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'none', textColor: 'secondary' },
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                        'Get a note saying your monthly credit(s) are available (and what better news than that, right?)'
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
                        { headingLevel: 3, hasBold: true },
                        '   ',
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
                        ' ',
                        _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { checked: 'true' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                        ' Editors\' Picks & Customer Favorites'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'none', textColor: 'secondary' },
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                        'Stay in touch with editor updates on new and upcoming releases and member reviews in your favorite category.'
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
                        { headingLevel: 3, hasBold: true },
                        '   ',
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
                        ' ',
                        _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { checked: 'true' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                        ' Sales & Offers'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'none', textColor: 'secondary' },
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                        'Be the first to know about sales and special offers.'
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
                        { headingLevel: 3, hasBold: true },
                        '   ',
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
                        ' ',
                        _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { checked: 'true' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                        ' User Research Study Announcements'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'none', textColor: 'secondary' },
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                        'We will send occasional emails letting you know about Audible user research studies you can participate in and earn money.'
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
                        { headingLevel: 3, hasBold: true },
                        '   ',
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
                        ' ',
                        _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { checked: 'true' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                        ' Audible News & Announcements'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'none', textColor: 'secondary' },
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                        'We\'ll send occasional emails letting you know about site improvements or changes.'
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
                        { headingLevel: 3, hasBold: true },
                        '   ',
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
                        ' ',
                        _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { checked: 'true' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                        ' Rate & Review'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'none', textColor: 'secondary' },
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                        'What you thought of your most recent purchase? Most members find reviews really helpful in deciding what to listen to next.'
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
                        { headingLevel: 3, hasBold: true },
                        '   ',
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
                        ' ',
                        _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { checked: 'true' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                        ' Hear & Now: New Releases Newsletter'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'none', textColor: 'secondary' },
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                        'We\'ll keep you updated with the best new books each week.'
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
                        { headingLevel: 3, hasBold: true },
                        '   ',
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
                        ' ',
                        _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { checked: 'true' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                        ' OneBook'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'none', textColor: 'secondary' },
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                        'Receive audiobook recommendations from your friends.'
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
                        { headingLevel: 3, hasBold: true },
                        '   ',
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
                        ' ',
                        _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { checked: 'true' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                        ' Author, Narrator, & Series Alerts'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'none', textColor: 'secondary' },
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                        'Personalized emails with recommendations based on your past purchases.'
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
                        { headingLevel: 3, hasBold: true },
                        '   ',
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' }),
                        ' ',
                        _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { checked: 'true' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                        ' Daily Deal'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'none', textColor: 'secondary' },
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' }),
                        _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' }),
                        'One great book on sale every day at a super-low price.'
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
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, hasBold: true, spacing: 'base' },
                        _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { checked: 'true' }),
                        ' Do not send me marketing email'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'large' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'base', textColor: 'secondary' },
                      'Other Contact Options'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 9 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 10 },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Heading,
                            { headingLevel: 3, hasBold: true, spacing: 'micro' },
                            _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { checked: 'true' }),
                            _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                            ' Send me marketing offers through mail.'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { headingLevel: 3, hasBold: true, spacing: 'none' },
                          _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { checked: 'true' }),
                          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' }),
                          ' Send me marketing offers through phone.'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'primary', spacing: 'none' },
                      'Update'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'primary', hasBorder: true, paddingSize: 'medium', spacing: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'small', textColor: 'base' },
                    'Privacy Preferences'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini', spacingTop: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, textColor: 'base' },
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
                  { spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 7 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, textColor: 'base' },
                      'Share my ratings with other Audible members'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'secondary' },
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
                  { spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, textColor: 'base' },
                      'Display my listening stats to other Audible members'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'secondary' },
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
                  { spacing: 'micro', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, textColor: 'base' },
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
                  { spacing: 'micro', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, textColor: 'base' },
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
                  { spacing: 'micro', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, textColor: 'base' },
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
                  { spacing: 'mini', spacingTop: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 10 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, textColor: 'base' },
                      'Get notified of reviews posted by people you follow'
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
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, textColor: 'base' },
                      'Software verification'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 2, position: 'last', textAlign: 'right' },
                    _react2['default'].createElement(_AudibleUITags2['default'].ToggleSwitch, { checked: true })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Subscriptions_B;
})(_react2['default'].Component);

exports['default'] = Subscriptions_B;
module.exports = exports['default'];
/* Change Password */ /*Profile & Privacy */