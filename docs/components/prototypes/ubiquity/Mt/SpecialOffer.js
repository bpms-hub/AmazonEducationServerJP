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

var SpecialOffer = (function (_React$Component) {
  _inherits(SpecialOffer, _React$Component);

  function SpecialOffer() {
    _classCallCheck(this, SpecialOffer);

    _get(Object.getPrototypeOf(SpecialOffer.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SpecialOffer, [{
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
            _AudibleUITags2['default'].GridRow,
            { spacingTop: 'large', spacing: 'large', textAlign: 'left' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'medium' },
                  'Account Information'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listType: 'nostyle', textSize: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacingTop: 'micro', textBold: true },
                  'Name on Card:'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  'Lisa Del Monte'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { textBold: true },
                  'Credit Card Type:'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  null,
                  'Visa'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { textBold: true },
                  'Card Number:'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  'xxxx-5683'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    null,
                    'Edit payment method'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base', textAlign: 'center' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 6, gridPush: 3 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { spacing: 'medium', headingLevel: 1 },
                    'Special Offer'
                  ),
                  _react2['default'].createElement(
                    _cc2['default'].Card,
                    { spacing: 'base',
                      headerColor: '#197397',
                      backgroundColor: '#1999cb',
                      headerName: '3 EXTRA CREDITS',
                      primaryPrice: '$149.50 / year',
                      secondaryPrice: '$14.95 / credit',
                      logoType: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership-inverse._V311720857_.svg',
                      cardName: 'AudibleListener® Gold Annual'
                    },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { spacing: 'base', textBold: true },
                      'You Get:'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro', spacingTop: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { spacing: 'large' },
                        '2 credits per month'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro', spacingTop: 'base', textAlign: 'center' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base', spacingTop: 'mini' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textBold: true },
                        'This Plan Also Includes:'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'medium' },
                        'The ability to rollover up to 12 credits at a time for as long as your membership is active'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'primary', spacing: 'base', inactiveText: 'Primary', activeText: 'Selected' },
                      'Buy Now'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium', textAlign: 'center' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'none', textColor: 'secondary' },
                      'Always running out of credits?'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { spacing: 'none' },
                      'Find a plan that fits you better'
                    )
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

  return SpecialOffer;
})(_react2['default'].Component);

exports['default'] = SpecialOffer;
module.exports = exports['default'];