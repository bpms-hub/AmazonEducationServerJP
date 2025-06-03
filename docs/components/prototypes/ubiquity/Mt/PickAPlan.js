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

var PickAPlan = (function (_React$Component) {
  _inherits(PickAPlan, _React$Component);

  function PickAPlan() {
    _classCallCheck(this, PickAPlan);

    _get(Object.getPrototypeOf(PickAPlan.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PickAPlan, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Box,
          { spacing: 'medium', heightCss: '200px', backgroundColor: 'inverse', hasBorder: false },
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4, gridPush: 1 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'extra-large', textColor: 'inverse', spacing: 'medium' },
                  'Join Us'
                ),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'large', textColor: 'inverse', spacing: 'medium' },
                  'All of the good things',
                  _react2['default'].createElement('br', null),
                  'with none of the worries'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'large', textAlign: 'center' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 1 },
            'Select your monthly plan'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'medium', textAlign: 'center' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3, gridPush: 3 },
            _react2['default'].createElement(
              _cc2['default'].Card,
              { spacing: 'base',
                headerColor: '#197397',
                backgroundColor: '#1999cb',
                headerName: '',
                primaryPrice: '$14.95 per month',
                secondaryPrice: '$14.95 per credit',
                logoType: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership-inverse._V311720857_.svg',
                cardName: 'GOLD MONTHLY',
                hasBorder: false
              },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacingTop: 'small' },
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro', spacingTop: 'small', textSize: 'small', textAlign: 'center' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { spacing: 'large' },
                  '1 credits per month'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacingTop: 'small', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'small', textColor: 'tertiary' },
                  'Choose one great book a month.\u2028An ideal introduction to Audible.'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { buttonType: 'primary', spacing: 'base', inactiveText: 'Primary', activeText: 'Selected' },
                'Let\'s Go'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 3, gridPush: 3 },
            _react2['default'].createElement(
              _cc2['default'].Card,
              { spacing: 'base',
                headerColor: '#574089',
                backgroundColor: '#714fb7',
                headerName: '',
                primaryPrice: '$22.95 per year',
                secondaryPrice: '$11.48 per credit',
                logoType: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership-inverse._V311720857_.svg',
                cardName: 'PLATINUM MONTHLY',
                hasBorder: false
              },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacingTop: 'small' },
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro', spacingTop: 'small', textSize: 'small', textAlign: 'center' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { spacing: 'large' },
                  '1 credits per month'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacingTop: 'small', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'small', textColor: 'tertiary' },
                  'Double your listening while paying 20% less per title'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { buttonType: 'primary', spacing: 'base', inactiveText: 'Primary', activeText: 'Selected' },
                'Let\'s Go'
              )
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'medium', textAlign: 'center' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { spacing: 'mini', textBold: true, textSize: 'base' },
            'All Gold and Platinum Plans Include:'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].List,
            { listType: 'nostyle' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { spacing: 'micro', textColor: 'secondary' },
                '30% off on all audiobooks and programs not purchased with audio credits'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { spacing: 'micro', textColor: 'secondary' },
                'Enjoy free Upgrade audio programs and samples'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                { spacing: 'micro', textColor: 'secondary' },
                'A complimentary subscription to the digital audio version of The New York Times or The Wall Street Journal'
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return PickAPlan;
})(_react2['default'].Component);

exports['default'] = PickAPlan;
module.exports = exports['default'];