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

var SwitchMembership = (function (_React$Component) {
  _inherits(SwitchMembership, _React$Component);

  function SwitchMembership() {
    _classCallCheck(this, SwitchMembership);

    _get(Object.getPrototypeOf(SwitchMembership.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SwitchMembership, [{
    key: 'render',
    value: function render() {

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(_AudibleUITags2['default'].Breadcrumbs, { breadcrumbTrail: [{ name: "Home", url: "/prototypes/brickcity" }, { name: "Account Details", url: "/prototypes/brickcity/account-details-b" }, { name: "Switch Membership", url: "/prototypes/brickcity/switch-membership" }], spacing: 'small' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { spacing: 'base' },
            'Switch Membership'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            { spacing: 'medium', textBold: true },
            'All Gold and Platinum Plans Include:'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].List,
            { listType: 'unordered' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              null,
              '30% off on all audiobooks and programs not purchased with audio credits'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              null,
              'Enjoy free select audio programs and samples'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              null,
              'A complimentary subscription to the digital audio version of The New York Times or The Wall Street Journald'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { textAlign: 'center', spacing: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 12, spacingTop: 'medium' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'highlight', paddingSize: 'none' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', spacing: 'mini' },
                  'CURRENT MEMBERSHIP PLAN'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { hasBorder: true, paddingSize: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      null,
                      'You are currently a member of:'
                    ),
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '60px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership._V311720857_.svg' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textBold: true, spacing: 'medium' },
                      'AudibleListener® 3-Month Gold Gift Membership'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textBold: true },
                        '$0.00'
                      ),
                      ' a month'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: true, spacing: 'base' },
                      'You Get:'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro', spacingTop: 'base' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '60px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit._V311706744_.svg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { spacing: 'large' },
                      '1 credits per month'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      null,
                      'This plan expires on ',
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textBold: true },
                        '12/03/2015'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'medium' },
                      'We recommend you switch to one of the plans below before this date to continue receiving AudibleListener® benefits.'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'medium' },
                      'After switching, any unused gift credits and any credits you haven\'t received yet as part of your gift membership, will transfer to your new membership plan.'
                    )
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'none' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { textAlign: 'center', spacing: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 12, spacingTop: 'medium' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'inverse', paddingSize: 'none' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textColor: 'inverse', spacing: 'mini' },
                  'CURRENT MEMBERSHIP PLAN'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { hasBorder: true, paddingSize: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '60px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership._V311720857_.svg' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textBold: true, spacing: 'medium' },
                      'Switch to AudibleListener® Gold'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textBold: true },
                        '$14.95 a month'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, textColor: 'error' },
                        'ONLY $14.95 per CREDIT'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: true, spacing: 'base' },
                      'You Get:'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro', spacingTop: 'base' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '60px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit._V311706744_.svg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { spacing: 'large' },
                      '1 credits per month'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro', spacingTop: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { buttonType: 'primary', spacing: 'base' },
                        'Select'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textBold: true },
                        'This Plan Also Includes:'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'base' },
                        'The ability to rollover up to 6 credits at a time for as long as your membership is active'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '60px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership._V311720857_.svg' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textBold: true, spacing: 'medium' },
                      'Switch to AudibleListener® Premium'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textBold: true },
                        '$14.95 a month'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, textColor: 'error' },
                        'ONLY $14.95 per CREDIT'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: true, spacing: 'base' },
                      'You Get:'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro', spacingTop: 'base' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '60px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit._V311706744_.svg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { spacing: 'large' },
                      '2 credits per month'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro', spacingTop: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { buttonType: 'primary', spacing: 'base' },
                        'Select'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textBold: true },
                        'This Plan Also Includes:'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'base' },
                        'The ability to rollover up to 12 credits at a time for as long as your membership is active'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '60px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-membership._V311720857_.svg' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textBold: true, spacing: 'medium' },
                      'Switch to AudibleListener® Gold Annual'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textBold: true },
                        '$149.50 a year'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, textColor: 'error' },
                        'ONLY $12.48 per CREDIT'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: true, spacing: 'base' },
                      'You Get:'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro', spacingTop: 'base' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageHeight: '60px', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/icons/marketing/icon-marketing-credit._V311706744_.svg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { spacing: 'large' },
                      '12 credits per month'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro', spacingTop: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { buttonType: 'primary', spacing: 'base' },
                        'Select'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textBold: true },
                        'This Plan Also Includes:'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'base' },
                        'The ability to rollover up to 6 credits at a time for as long as your membership is active'
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { textAlign: 'right', spacing: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Button,
              { buttonType: 'primary', inline: true, app: true, url: "/prototypes/brickcity/cancel/success-cancel" },
              'Cancel Membership'
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return SwitchMembership;
})(_react2['default'].Component);

exports['default'] = SwitchMembership;
module.exports = exports['default'];