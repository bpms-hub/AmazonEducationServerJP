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

var _HeaderProdHeaderMobile = require('../Header/ProdHeaderMobile');

var _HeaderProdHeaderMobile2 = _interopRequireDefault(_HeaderProdHeaderMobile);

var _FooterProdFooterMobile = require('../Footer/ProdFooterMobile');

var _FooterProdFooterMobile2 = _interopRequireDefault(_FooterProdFooterMobile);

var PickAPlanMobile = (function (_React$Component) {
  _inherits(PickAPlanMobile, _React$Component);

  function PickAPlanMobile() {
    _classCallCheck(this, PickAPlanMobile);

    _get(Object.getPrototypeOf(PickAPlanMobile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PickAPlanMobile, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeaderMobile2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Box,
          { spacing: 'medium', heightCss: '140px', backgroundColor: 'inverse', hasBorder: false },
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'large', textColor: 'inverse', spacing: 'medium' },
                  'Join Us'
                ),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'base', textColor: 'inverse', spacing: 'medium' },
                  'All of the good things with none of the worries'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'medium', textAlign: 'center' },
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
            { gridUnits: 6 },
            _react2['default'].createElement(
              _cc2['default'].Card,
              {

                spacing: 'base',
                headerColor: '#197397',
                backgroundColor: '#1999cb',
                headerName: '3 MONTHS',
                primaryPrice: '$14.95 / month',
                secondaryPrice: '$14.95 / credit',
                logoType: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership-inverse._V311720857_.svg',
                cardName: 'AudibleListener® Gold'
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
                { spacing: 'micro', spacingTop: 'base', textAlign: 'left' },
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
                'Upgrade'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 6, position: 'last' },
            _react2['default'].createElement(
              _cc2['default'].Card,
              { spacing: 'base',
                headerColor: '#574089',
                backgroundColor: '#714fb7',
                headerName: '3 MONTHS',
                primaryPrice: '$22.00 / month',
                secondaryPrice: '$22.00 / credit',
                logoType: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership-inverse._V311720857_.svg',
                cardName: 'AudibleListener® Gold'
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
                { spacing: 'micro', spacingTop: 'base', textAlign: 'left' },
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
                'Upgrade'
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
        _react2['default'].createElement(_FooterProdFooterMobile2['default'], null)
      );
    }
  }]);

  return PickAPlanMobile;
})(_react2['default'].Component);

exports['default'] = PickAPlanMobile;
module.exports = exports['default'];