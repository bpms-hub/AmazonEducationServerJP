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

var Membership_B = (function (_React$Component) {
  _inherits(Membership_B, _React$Component);

  function Membership_B() {
    _classCallCheck(this, Membership_B);

    _get(Object.getPrototypeOf(Membership_B.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Membership_B, [{
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
            { spacing: 'mini' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 12, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'primary', hasBorder: true, paddingSize: 'base', spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'small', textColor: 'base' },
                  'My Membership'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Box,
                        { background: '#197397', paddingSize: 'none' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { headingLevel: 3, textColor: 'inverse' },
                          'CURRENT PLAN'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { background: '#1999cb', hasBorder: false, paddingSize: 'small', spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacingTop: 'micro', textAlign: 'center' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 12 },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Heading,
                            { headingLevel: 2, textColor: 'inverse', spacing: 'micro' },
                            'AudibleListener® Gold'
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textBold: true, textColor: 'inverse', textSize: 'medium' },
                            '$14.95 / month'
                          ),
                          _react2['default'].createElement('br', null),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textBold: false, textColor: 'inverse', textSize: 'base' },
                            '$14.95 each credit'
                          )
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { hasBorder: true, paddingSize: 'base', spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'base', textAlign: 'center' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'mini' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { spacing: 'mini', textSize: 'medium', textBold: true },
                            'Credits Available:'
                          ),
                          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textSize: 'medium' },
                            '3'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { spacing: 'mini', textBold: true },
                            'Next Credit Date:'
                          ),
                          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            '10-31-2015'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          null,
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textBold: true },
                            'Member since:'
                          ),
                          _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            ' 8-22-2011'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'base', textAlign: 'center' },
                        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base', spacingTop: 'base' }),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { headingLevel: 2, spacing: 'micro', textBold: true },
                          'You get 1 credit per month'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textBold: false, textSize: 'base' },
                          '$14.95 per additional credit'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6, spacingTop: 'base', position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textBold: true, spacing: 'micro', textSize: 'base' },
                      'This Plan Includes:'
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
                      { textAlign: 'left', spacingTop: 'medium' },
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
                          { buttonType: 'primary', inline: false, app: true, url: "/prototypes/brickcity/upgrade-membership_b" },
                          'Switch Membership'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Membership_B;
})(_react2['default'].Component);

exports['default'] = Membership_B;
module.exports = exports['default'];