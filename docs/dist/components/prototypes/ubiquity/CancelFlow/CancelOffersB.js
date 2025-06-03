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

var _CancelLayout = require('./CancelLayout');

var _CancelLayout2 = _interopRequireDefault(_CancelLayout);

var _reactRouter = require('react-router');

var CancelOffersB = (function (_React$Component) {
  _inherits(CancelOffersB, _React$Component);

  function CancelOffersB(props, context) {
    _classCallCheck(this, CancelOffersB);

    _get(Object.getPrototypeOf(CancelOffersB.prototype), 'constructor', this).call(this, props, context);
    this.state = {
      offerSet: this.context.router.getCurrentParams().offerNumber
    };
  }

  _createClass(CancelOffersB, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log(this.state.offerSet);
    }
  }, {
    key: 'renderThankYouText',
    value: function renderThankYouText() {
      switch (this.state.offerSet) {
        case "2":
          return "We understand that it can be difficult to fit audiobooks into a busy schedule. Please take a quick look at the offers below to see if any of them would help.";
          break;
        case "3":
          return "We understand how frustrating technical issues can be. Did you know that customer care is here to help 24/7?";
          break;
        case "4":
          return "We understand that audiobooks can take some getting used to. Before leaving, would you like to exchange any of your audiobooks?";
          break;
        default:
          return "We understand that price can be an issue. Please take a quick look at the offers below to see if any of them would help.";
      }
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2['default'].createElement(
        _CancelLayout2['default'],
        null,
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { spacing: 'micro' },
          'We hear you'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Paragraph,
          { spacing: 'medium' },
          this.renderThankYouText()
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { textAlign: 'center', spacing: 'medium' },
          this.state.offerSet == 1 ? _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 4 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { backgroundColor: 'highlight', paddingSize: 'base', hasBorder: true },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '60px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-switch-inverse._V311720857_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, spacing: 'mini', textColor: 'inverse' },
                'Spend Less, Savor More'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, paddingSize: 'medium' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { heightCss: '125px' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'medium' },
                  'Get a credit every other month (6 credits/6 bills per year) and save 50%.'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'large' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textBold: true },
                    '$14.95'
                  ),
                  ' billed every other month'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { buttonType: 'primary', inline: true, size: 'small' },
                'Switch Membership'
              )
            )
          ) : null,
          this.state.offerSet == 1 || this.state.offerSet == 2 ? _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: this.state.offerSet == 2 ? 6 : 4 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { backgroundColor: 'highlight', paddingSize: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '60px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-pause-membership-inverse._V311705986_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, textColor: 'inverse', spacing: 'mini' },
                'Pause Membership'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, paddingSize: 'medium' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { heightCss: '125px' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'medium' },
                  'Keep your current credits and don\'t make a payment for the next:'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Form,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4 },
                      _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { name: 'pause-option', label: '30 Days' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4 },
                      _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { checked: true, name: 'pause-option', label: '60 Days' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last' },
                      _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { name: 'pause-option', label: '90 Days' })
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { buttonType: 'primary', inline: true, size: 'small', app: true, url: "/prototypes/brickcity/cancel/success-pause" },
                'Pause Membership'
              )
            )
          ) : null,
          this.state.offerSet == 1 || this.state.offerSet == 2 ? _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: this.state.offerSet == 2 ? 6 : 4, position: 'last' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { backgroundColor: 'highlight', paddingSize: 'base', hasBorder: true },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '60px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit-inverse._V311720857_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, textColor: 'inverse', spacing: 'mini' },
                'Get a Free Listen'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, paddingSize: 'medium' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { heightCss: '125px' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'medium' },
                  'Keep your current membership and get an additional free credit.'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { buttonType: 'primary', inline: true, size: 'small' },
                'Free Credit'
              )
            )
          ) : null,
          this.state.offerSet == 3 ? _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 6, spacingTop: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { backgroundColor: 'highlight', paddingSize: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '60px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-customer-care-inverse._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, textColor: 'inverse', spacing: 'mini' },
                '24/7 Customer Care'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, paddingSize: 'medium' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { heightCss: '125px' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'medium' },
                  'Call or email us anytime—we\'re here to help.'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { inline: true, buttonType: 'primary', size: 'small' },
                'Contact Customer Care'
              )
            )
          ) : null,
          this.state.offerSet == 4 ? _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 6, spacingTop: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { backgroundColor: 'highlight', paddingSize: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'micro' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '60px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-glg-inverse._V311706744_.svg' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2, textColor: 'inverse', spacing: 'mini' },
                'Exchange any audiobook'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { hasBorder: true, paddingSize: 'medium' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { heightCss: '125px' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'medium' },
                  'Do you know about our Great Listen Guarantee, which',
                  _react2['default'].createElement('br', null),
                  ' lets you return any purchase you\'re unhappy with?'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { inline: true, buttonType: 'primary', size: 'small' },
                'Exchange Audiobook'
              )
            )
          ) : null
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { textAlign: 'right' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Button,
            { buttonType: 'primary', inline: true, app: true, url: "/prototypes/brickcity/cancel/success-cancel" },
            'Cancel Membership'
          )
        )
      );
    }
  }]);

  return CancelOffersB;
})(_react2['default'].Component);

CancelOffersB.contextTypes = {
  router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = CancelOffersB;
module.exports = exports['default'];