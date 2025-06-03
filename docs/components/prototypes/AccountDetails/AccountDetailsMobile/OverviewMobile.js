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

var OverviewMobile = (function (_React$Component) {
  _inherits(OverviewMobile, _React$Component);

  function OverviewMobile() {
    _classCallCheck(this, OverviewMobile);

    _get(Object.getPrototypeOf(OverviewMobile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(OverviewMobile, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _AudibleUITags2['default'].GridRow,
        { spacingTop: 'none' },
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'base' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 12 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2, spacing: 'micro' },
              'Membership'
            ),
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
                    _AudibleUITags2['default'].Text,
                    { textSize: 'extra-large', textColor: 'inverse', spacing: 'small', textBold: true },
                    'GOLD MONTHLY'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textSize: 'small', textColor: 'inverse' },
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
                  { spacing: 'none' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { spacing: 'none', textSize: 'medium', textBold: true },
                    'Credits:'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
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
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
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
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 2, spacing: 'micro' },
          'Profile'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridColumn,
          { gridUnits: 12, spacing: 'medium' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { backgroundColor: 'secondary', paddingSize: 'small', spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textAlign: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, spacing: 'none' },
                'Name:'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { spacing: 'micro', textColor: 'secondary' },
                'Lisa Del Monte'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textAlign: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3, spacing: 'none' },
                'Email Address:'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { spacing: 'micro', textColor: 'secondary' },
                'lisadelmonte@gmail.com'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 3, spacing: 'none' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, spacing: 'none' },
                  'Password:'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { spacing: 'micro', textColor: 'secondary' },
                    'xxxxxxxxxx'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { textAlign: 'left', spacing: 'none' },
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

  return OverviewMobile;
})(_react2['default'].Component);

exports['default'] = OverviewMobile;
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