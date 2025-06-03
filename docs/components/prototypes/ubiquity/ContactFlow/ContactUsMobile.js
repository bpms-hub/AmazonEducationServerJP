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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ContactUsMobile = (function (_React$Component) {
  _inherits(ContactUsMobile, _React$Component);

  function ContactUsMobile(props) {
    _classCallCheck(this, ContactUsMobile);

    _get(Object.getPrototypeOf(ContactUsMobile.prototype), 'constructor', this).call(this, props);
    this.state = {
      activeElement: "step1"
    };
  }

  _createClass(ContactUsMobile, [{
    key: 'handleSwitch',
    value: function handleSwitch(element) {
      this.setState({
        activeElement: element
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var fadeStep2 = ['bc-contact-step2'];
      var fadeStep3 = ['bc-contact-step3'];
      var fadeStep4 = ['bc-contact-step4'];
      if (this.state.activeElement === "step2") fadeStep2.push('bc-contact-step2-active');
      if (this.state.activeElement === "step3") fadeStep2.push('bc-contact-step2-active'), fadeStep3.push('bc-contact-step3-active');
      if (this.state.activeElement === "step4") fadeStep2.push('bc-contact-step2-active'), fadeStep3.push('bc-contact-step3-active'), fadeStep4.push('bc-contact-step4-active');

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeaderMobile2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacingTop: 'base', spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 12, spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2 },
                'Customer Services are available 24/7'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Paragraph,
                null,
                'Answer a few questions about the issue you are having and we\'ll get someone to help.'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'base', headingLevel: 3 },
                  ' What can we help you with?'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridRow,
                  { fixedColumn: 'left', fixedColumnWidth: 40 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { fixedColumn: 'left', fixedColumnWidth: 40, side: 'left' },
                    _react2['default'].createElement(
                      _cc2['default'].StepMobile,
                      { active: true },
                      '1'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { fixedColumn: 'left', side: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Dropdown,
                      { spacing: 'small', onChange: this.handleSwitch.bind(this, "step2") },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Please make a selection'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'My Account'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Tech Support'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Something Else'
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep2) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, spacing: 'base' },
                  'Tell us more:'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridRow,
                  { fixedColumn: 'left', fixedColumnWidth: 40 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { fixedColumn: 'left', fixedColumnWidth: 40, side: 'left' },
                    _react2['default'].createElement(
                      _cc2['default'].StepMobile,
                      { active: true },
                      '2'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { fixedColumn: 'left', side: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Dropdown,
                      { spacing: 'small', onChange: this.handleSwitch.bind(this, "step3"), disabled: this.state.activeElement === "step1" ? true : false },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Please make a selection'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Login Assistance'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Return or refund'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Change or cancel my membership'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Update account information'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Pause Membership'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Payment issues'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Order/refund status'
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep3) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridRow,
                  { fixedColumn: 'left', fixedColumnWidth: 40 },
                  _react2['default'].createElement(_AudibleUITags2['default'].FixedGridColumn, { fixedColumn: 'left', fixedColumnWidth: 40, side: 'left' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridColumn,
                    { fixedColumn: 'left', side: 'right' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Dropdown,
                      { spacing: 'small', onChange: this.handleSwitch.bind(this, "step4") },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Please make a selection'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Trouble signing in'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Forgot password'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].DropdownOption,
                        null,
                        'Change your password'
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep4) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { backgroundColor: 'secondary', spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'Did you know?'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'You can change or reset your password online.'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'If you log-in to Audible using an email address or mobile phone number, (e.g. john123@email.com), click here.'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'If you log-in to Audible using a username (e.g. john456) instead of an email   address, click here.'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'Note: If you are not on the most updated app version on your device you may run into issues logging back in after signing out. Visit www.audible.com/getapp using your device\'s web browser to update your app.'
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'primary', app: true, url: "/prototypes/brickcity-mobile/contact-phone" },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'phone' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                      'Phone'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Button,
                      { buttonType: 'primary', app: true, url: "/prototypes/brickcity-mobile/contact-email" },
                      _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'envelope' }),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' }),
                      'E-mail'
                    )
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooterMobile2['default'], null)
      );
    }
  }]);

  return ContactUsMobile;
})(_react2['default'].Component);

exports['default'] = ContactUsMobile;
module.exports = exports['default'];