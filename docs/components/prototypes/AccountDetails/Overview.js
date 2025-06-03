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

var Overview = (function (_React$Component) {
  _inherits(Overview, _React$Component);

  function Overview() {
    _classCallCheck(this, Overview);

    _get(Object.getPrototypeOf(Overview.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Overview, [{
    key: 'render',
    value: function render() {

      return _react2['default'].createElement(
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
              'Membership'
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { background: '#1999cb', hasBorder: false, paddingSize: 'small', spacing: 'none' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { textAlign: 'center' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 12 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textSize: 'large', textColor: 'inverse', spacing: 'base', textBold: true },
                          'GOLD MONTHLY'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textSize: 'base', textColor: 'inverse' },
                          'Member since January 12, 2015'
                        )
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { hasBorder: false, background: '#F9F9F9', paddingSize: 'base', spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'base', textAlign: 'center' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textSize: 'medium', textBold: true },
                        'Credits:'
                      ),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textSize: 'medium' },
                        '0'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { spacing: 'mini', textSize: 'base', textBold: true },
                        'Next Credit:'
                      ),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        '2-15-2016'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'none', textAlign: 'center' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base', spacingTop: 'base' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: false, textSize: 'base' },
                      '$14.95 per month'
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'tertiary' },
                      '|'
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: false, textSize: 'base' },
                      '1 credit per month'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { textBold: true, spacing: 'micro', textSize: 'base' },
                  'Your Plan Includes:'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'unordered', spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'secondary', spacing: 'micro' },
                      'Special Promotion: $7.49 a month for the first 3 months, $14.95 a month thereafter.'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'secondary', spacing: 'micro' },
                      'Save 30% on all audiobooks purchased without credits. Roll over up to 6 credits.'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'secondary', spacing: 'micro' },
                      'Get a free audio subscription to The New York Times or The Wall Street Journal.'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'secondary', spacing: 'micro' },
                      'The ability to rollover up to 6 credits at a time for as long as your membership is active.'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { textAlign: 'left' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'secondary', inline: false, app: true, url: "/prototypes/brickcity/cancel/success-cancel" },
                      'Cancel Membership'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'primary', inline: false, app: true, url: "/prototypes/brickcity/account-details/switch-membership" },
                      'Switch Membership'
                    )
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { backgroundColor: 'primary', hasBorder: true, paddingSize: 'medium', spacing: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'none' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'base', textColor: 'base' },
                'Profile'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
              _react2['default'].createElement(_AudibleUITags2['default'].Paragraph, { spacing: 'medium', textColor: 'secondary' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, spacing: 'small', textColor: 'base' },
                      'Display Name'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'John Dough'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, spacing: 'small', textColor: 'base' },
                      'Email Address'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'johndough@audible.com'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, spacing: 'small', textColor: 'base' },
                      'Password'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      '••••••••'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2, spacingTop: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'Edit'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Overview;
})(_react2['default'].Component);

exports['default'] = Overview;
module.exports = exports['default'];
/*
<BC.Text textBold={true} textColor="inverse" textSize="medium">$14.95 / month</BC.Text>
<br/>      
<BC.Text textBold={false} textColor="inverse" textSize="base">$14.95 each credit</BC.Text>
*/ /*
   <BC.GridRow>
    <BC.Text spacing="mini" textSize="base" textBold={true}>Coupon Balance:</BC.Text>
    <BC.LetterSpace />      
    <BC.Text>4</BC.Text>
   </BC.GridRow>
   */