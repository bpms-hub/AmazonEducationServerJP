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

var MemberBenefits_B = (function (_React$Component) {
  _inherits(MemberBenefits_B, _React$Component);

  function MemberBenefits_B() {
    _classCallCheck(this, MemberBenefits_B);

    _get(Object.getPrototypeOf(MemberBenefits_B.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MemberBenefits_B, [{
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
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 12, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'primary', spacing: 'base', paddingSize: 'base', hasBorder: true },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, textColor: 'secondary', spacing: 'small' },
                  'Redeem Promotional Code'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'Enter your code here' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'primary', inline: true },
                      'Redeem'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'primary', spacing: 'base', paddingSize: 'base', hasBorder: true },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'base', textColor: 'secondary', headingLevel: 2 },
                  'Give a Gift'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base', textAlign: 'center' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { block: true, imageWidth: '100%', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/prototypes/membership-3-months.svg' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { hasBorder: true, spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          null,
                          '3 Months:'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textSize: 'large' },
                          '$45'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'secondary', textSize: 'small' },
                          '$15 per month'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { buttonType: 'primary', spacing: 'micro' },
                        'Give as a Gift'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { block: true, imageWidth: '100%', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/prototypes/membership-6-months.svg' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { hasBorder: true, spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          null,
                          '6 Months:'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textSize: 'large' },
                          '$90'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'secondary', textSize: 'small' },
                          '$15 per month'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { buttonType: 'primary', spacing: 'micro' },
                        'Give as a Gift'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { block: true, imageWidth: '100%', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/prototypes/membership-12-months.svg' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { hasBorder: true, spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          null,
                          '12 Months:'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textSize: 'large' },
                          '$150'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'secondary', textSize: 'small' },
                          '$15 per month'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { buttonType: 'primary', spacing: 'micro' },
                        'Give as a Gift'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, spacing: 'mini' },
                  'Membership Includes:'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { textColor: 'secondary', listType: 'nostyle' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    'Concierge Setup',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textSize: 'mini' },
                      'Our staff is ready 24/7 to help gift members start listening in minutes'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    '1 Credit Per Month',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textSize: 'mini' },
                      'Good to use on over 180,000 titles'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    'Exclusive Discounts',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textSize: 'mini' },
                      '30% off every title every day'
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

  return MemberBenefits_B;
})(_react2['default'].Component);

exports['default'] = MemberBenefits_B;
module.exports = exports['default'];
/*
<BC.GridColumn gridUnits={2}>
 <BC.Box backgroundColor="primary" spacing="base" paddingSize="small" hasBorder={false}>
 <BC.List listType="nostyle">
   <BC.ListItem spacing="mini"><BC.Link textColor="primary">Redeem Promotional Code </BC.Link></BC.ListItem>
       <BC.ListItem spacing="mini" ><BC.Link textColor="secondary">Redeem Gift Membership</BC.Link></BC.ListItem>
   <BC.ListItem spacing="mini"><BC.Link textColor="secondary">Give a Gift</BC.Link></BC.ListItem>
 </BC.List>
</BC.Box>
</BC.GridColumn>
*/