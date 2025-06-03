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

var SwitchMembership = (function (_React$Component) {
  _inherits(SwitchMembership, _React$Component);

  function SwitchMembership(props) {
    _classCallCheck(this, SwitchMembership);

    _get(Object.getPrototypeOf(SwitchMembership.prototype), 'constructor', this).call(this, props);
    this.state = {
      activePlan: this.props.active
    };
  }

  _createClass(SwitchMembership, [{
    key: 'choosePlan',
    value: function choosePlan(element) {

      this.setState({
        activePlan: element
      });
    }
  }, {
    key: 'render',
    value: function render() {

      if (this.state.activeElement === "step2") fadeStep2.push('bc-contact-step2-active');

      return _react2['default'].createElement(
        _AudibleUITags2['default'].GridRow,
        { spacing: 'base' },
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'small' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            null,
            _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left' }),
            ' Back'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridColumn,
          { gridUnits: 12, position: 'last' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { backgroundColor: 'primary', hasBorder: true, paddingSize: 'small', spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { headingLevel: 2, spacing: 'small', textColor: 'base' },
              'Switch Membership'
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'mini', textAlign: 'center' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(
                      _ubiquityCc2['default'].Card,
                      { spacing: 'base',
                        headerColor: '#999',
                        backgroundColor: '#aaa',
                        headerName: '',
                        primaryPrice: '$149.50 per year',
                        secondaryPrice: '$14.95 per credit',
                        cardName: 'GOLD ANNUAL',
                        hasBorder: false
                      },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'micro', spacingTop: 'small', textAlign: 'left' },
                        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small', spacingTop: 'none' }),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'mini', textAlign: 'center' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textSize: 'small', spacing: 'large' },
                            '12 credits at the start'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ModalTrigger,
                        {
                          modalTitle: 'Switch Membership',
                          modalContent: _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridRow,
                              { textAlign: 'left' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridColumn,
                                { gridUnits: 12 },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Paragraph,
                                  null,
                                  'You are about to switch your membership plan from AudibleListener® Gold Monthly to ',
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    { textBold: true },
                                    'AudibleListener® Gold Annual'
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Paragraph,
                                  null,
                                  'Your new annual charge will be ',
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    { spacing: 'base', textBold: true },
                                    '$149.50'
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridRow,
                                  { textAlign: 'left' },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridColumn,
                                    { gridUnits: 3, gridPush: 5 },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Button,
                                      { url: '/prototypes/brickcity/account-details/switch-membership', buttonType: 'secondary' },
                                      'Cancel'
                                    )
                                  ),
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridColumn,
                                    { gridUnits: 4, position: 'last' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Button,
                                      { url: '/prototypes/brickcity/account-details/switch-membership', buttonType: 'primary' },
                                      'Confirm Switch'
                                    )
                                  )
                                )
                              )
                            )
                          ),
                          width: '740px' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Button,
                          { buttonType: 'primary', spacing: 'micro' },
                          'Switch Plan'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(
                      _ubiquityCc2['default'].Card,
                      { spacing: 'base',
                        headerColor: '#197397',
                        backgroundColor: '#1999cb',
                        headerName: '',
                        primaryPrice: '$14.95 per month',
                        secondaryPrice: '$14.95 per credit',
                        cardName: 'GOLD MONTHLY',
                        hasBorder: false
                      },
                      _react2['default'].createElement(_AudibleUITags2['default'].Text, { spacing: 'base', textBold: true }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'micro', spacingTop: 'small', textAlign: 'left' },
                        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small', spacingTop: 'none' }),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'mini', textAlign: 'center' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textSize: 'small', spacing: 'large' },
                            '1 credit per month'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { buttonType: 'primary', spacing: 'micro', disabled: true },
                        'Current Plan'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3 },
                    _react2['default'].createElement(
                      _ubiquityCc2['default'].Card,
                      { spacing: 'base',
                        headerColor: '#574089',
                        backgroundColor: '#714fb7',
                        headerName: '',
                        primaryPrice: '$229.50 per year',
                        secondaryPrice: '$9.56 per credit',
                        hasBorder: false,
                        cardName: 'PLATINUM ANNUAL'
                      },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'micro', spacingTop: 'small', textAlign: 'left' },
                        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small', spacingTop: 'none' }),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'mini', textAlign: 'center' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textSize: 'small', spacing: 'large' },
                            '24 credits at the start'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ModalTrigger,
                        {
                          modalTitle: 'Switch Membership',
                          modalContent: _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridRow,
                              { textAlign: 'left' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridColumn,
                                { gridUnits: 12 },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Paragraph,
                                  null,
                                  'You are about to switch your membership plan from AudibleListener® Gold Monthly to ',
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    { textBold: true },
                                    'AudibleListener® Platinum Annual'
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Paragraph,
                                  null,
                                  'Your new annual charge will be ',
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    { spacing: 'base', textBold: true },
                                    '$229.50'
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridRow,
                                  { textAlign: 'left' },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridColumn,
                                    { gridUnits: 3, gridPush: 5 },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Button,
                                      { url: '/prototypes/brickcity/account-details/switch-membership', buttonType: 'secondary' },
                                      'Cancel'
                                    )
                                  ),
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridColumn,
                                    { gridUnits: 4, position: 'last' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Button,
                                      { url: '/prototypes/brickcity/account-details/switch-membership', buttonType: 'primary' },
                                      'Confirm Switch'
                                    )
                                  )
                                )
                              )
                            )
                          ),
                          width: '740px' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Button,
                          { buttonType: 'primary', spacing: 'micro' },
                          'Switch Plan'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 3, position: 'last' },
                    _react2['default'].createElement(
                      _ubiquityCc2['default'].Card,
                      { spacing: 'base',
                        headerColor: '#574089',
                        backgroundColor: '#714fb7',
                        headerName: '',
                        primaryPrice: '$22.95 per month',
                        secondaryPrice: '$11.48 per credit',
                        cardName: 'PLATINUM MONTHLY',
                        hasBorder: false
                      },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'micro', spacingTop: 'small', textAlign: 'left' },
                        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small', spacingTop: 'none' }),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridRow,
                          { spacing: 'mini', textAlign: 'center' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            { textSize: 'small', spacing: 'large' },
                            '2 credits per month'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ModalTrigger,
                        {
                          modalTitle: 'Switch Membership',
                          modalContent: _react2['default'].createElement(
                            'div',
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].GridRow,
                              { textAlign: 'left' },
                              _react2['default'].createElement(
                                _AudibleUITags2['default'].GridColumn,
                                { gridUnits: 12 },
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Paragraph,
                                  null,
                                  'You are about to switch your membership plan from AudibleListener® Gold Monthly to ',
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    { textBold: true },
                                    'AudibleListener® Platinum Monthly'
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].Paragraph,
                                  null,
                                  'Your new monthly charge will be ',
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].Text,
                                    { spacing: 'base', textBold: true },
                                    '$22.95'
                                  )
                                ),
                                _react2['default'].createElement(
                                  _AudibleUITags2['default'].GridRow,
                                  { textAlign: 'left' },
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridColumn,
                                    { gridUnits: 3, gridPush: 5 },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Button,
                                      { url: '/prototypes/brickcity/account-details/switch-membership', buttonType: 'secondary' },
                                      'Cancel'
                                    )
                                  ),
                                  _react2['default'].createElement(
                                    _AudibleUITags2['default'].GridColumn,
                                    { gridUnits: 4, position: 'last' },
                                    _react2['default'].createElement(
                                      _AudibleUITags2['default'].Button,
                                      { url: '/prototypes/brickcity/account-details/switch-membership', buttonType: 'primary' },
                                      'Confirm Switch'
                                    )
                                  )
                                )
                              )
                            )
                          ),
                          width: '740px' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Button,
                          { buttonType: 'primary', spacing: 'micro' },
                          'Switch Plan'
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { spacing: 'micro', textBold: true, textSize: 'base' },
              'All Gold and Platinum Plans Include:'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].List,
              { listType: 'unordered' },
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
          )
        )
      );
    }
  }]);

  return SwitchMembership;
})(_react2['default'].Component);

exports['default'] = SwitchMembership;
module.exports = exports['default'];
/*
<BC.Text  textBold={true}>This Plan Also Includes:</BC.Text>
<BC.Paragraph  spacing="small">
 The ability to rollover up to 12 credits at a time for as long as your membership is active
</BC.Paragraph>
*/ /*
   <BC.Text  textBold={true}>This Plan Also Includes:</BC.Text>
   <BC.Paragraph  spacing="small">
    The ability to rollover up to 12 credits at a time for as long as your membership is active
   </BC.Paragraph>
   */ /*
      <BC.Text  textBold={true}>This Plan Also Includes:</BC.Text>
      <BC.Paragraph  spacing="small">
       The ability to rollover up to 12 credits at a time for as long as your membership is active
      </BC.Paragraph>
      */ /*
         <BC.Text  textBold={true}>This Plan Also Includes:</BC.Text>
         <BC.Paragraph  spacing="small">
          The ability to rollover up to 12 credits at a time for as long as your membership is active
         </BC.Paragraph>
         */