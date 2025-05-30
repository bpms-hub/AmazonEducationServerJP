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

var ContactUsMobile2 = (function (_React$Component) {
  _inherits(ContactUsMobile2, _React$Component);

  function ContactUsMobile2(props) {
    _classCallCheck(this, ContactUsMobile2);

    _get(Object.getPrototypeOf(ContactUsMobile2.prototype), 'constructor', this).call(this, props);
    this.state = {
      activeElement: "step1"
    };
  }

  _createClass(ContactUsMobile2, [{
    key: 'handleClick',
    value: function handleClick(element) {
      this.setState({
        activeElement: element
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var fadeStep1 = ['bc-contact2-step1'];
      var fadeStep2a = ['bc-contact2-step2a'];
      var fadeStep2b = ['bc-contact2-step2b'];
      var fadeStep2c = ['bc-contact2-step2c'];
      var fadeStep3a = ['bc-contact2-step3a'];
      var fadeStep3b = ['bc-contact2-step3b'];
      var fadeStep3c = ['bc-contact2-step3c'];
      var fadeStep3d = ['bc-contact2-step3d'];
      var fadeStep3e = ['bc-contact2-step3e'];
      var fadeStep4a = ['bc-contact2-step4a'];
      var fadeStep4b = ['bc-contact2-step4b'];
      var fadeStep4c = ['bc-contact2-step4c'];
      var fadeStep4d = ['bc-contact2-step4d'];
      var fadeStep4e = ['bc-contact2-step4e'];
      var fadeStep4f = ['bc-contact2-step4f'];
      var fadeStep4g = ['bc-contact2-step4g'];
      var fadeStep4h = ['bc-contact2-step4h'];
      if (this.state.activeElement === "step1") fadeStep1.push('bc-contact2-step1-active');
      if (this.state.activeElement === "step2a") fadeStep2a.push('bc-contact2-step2a-active');
      if (this.state.activeElement === "step2b") fadeStep2b.push('bc-contact2-step2b-active');
      if (this.state.activeElement === "step2c") fadeStep2c.push('bc-contact2-step2c-active');
      if (this.state.activeElement === "step3a") fadeStep3a.push('bc-contact2-step3a-active');
      if (this.state.activeElement === "step3b") fadeStep3b.push('bc-contact2-step3b-active');
      if (this.state.activeElement === "step3c") fadeStep3c.push('bc-contact2-step3c-active');
      if (this.state.activeElement === "step3d") fadeStep3d.push('bc-contact2-step3d-active');
      if (this.state.activeElement === "step3e") fadeStep3e.push('bc-contact2-step3e-active');
      if (this.state.activeElement === "step4a") fadeStep4a.push('bc-contact2-step4a-active');
      if (this.state.activeElement === "step4b") fadeStep4b.push('bc-contact2-step4b-active');
      if (this.state.activeElement === "step4c") fadeStep4c.push('bc-contact2-step4c-active');
      if (this.state.activeElement === "step4d") fadeStep4d.push('bc-contact2-step4d-active');
      if (this.state.activeElement === "step4e") fadeStep4e.push('bc-contact2-step4e-active');
      if (this.state.activeElement === "step4f") fadeStep4f.push('bc-contact2-step4f-active');
      if (this.state.activeElement === "step4g") fadeStep4g.push('bc-contact2-step4g-active');
      if (this.state.activeElement === "step4h") fadeStep4h.push('bc-contact2-step4h-active');

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
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep1) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'base', spacingTop: 'base', headingLevel: 3 },
                  ' What can we help you with?'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step2a") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'My Account'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step2b") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Tech Support'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step2c") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Something Else'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep2a) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step1") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'My Account'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'base', headingLevel: 3 },
                  'Tell us more:'
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step3a") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    { hasTopBorder: true },
                    'Login Assistance'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step4c") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Return or refund'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Change or cancel my membership'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step3b") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Update account information'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Pause Membership'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Payment issues'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Order/refund status'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step3c") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Audible Credits'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step4e") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Other Account Questions'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep2b) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step1") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Tech Support'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'base', headingLevel: 3 },
                  'Tell us more:'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    { hasTopBorder: true },
                    'Upgrade to Audible for iOS version 2.6'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Audible Manager Update Error'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Audible Download Manager Error Message'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Getting started'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Locate my titles'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Titles not in My Library'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Downloading'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Trouble playing my Audiobook'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step3d") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Deactivate a device'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Purchasing an Audiobook'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Whispersync & Immersion Reading'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Kindle Reading App'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Trouble logging into my account'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Cannot refresh library'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Other technical questions'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep2c) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step1") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Something Else'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'base', headingLevel: 3 },
                  'Tell us more:'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    { hasTopBorder: true },
                    'Start an Audible Membership'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Membership Benefits'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step3e") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Gifts'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Return or refund'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Promotions and Sales'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Kindle Unlimited'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Website issues'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Purchase without membership'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Great Listen Guarantee'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Whispersync for Voice & Immersion Reading'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Request new content'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Whispersync for Voice & Immersion Reading'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Great Ideas'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Testimonials'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Other'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep3a) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step2a") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Login Assistance'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'base', headingLevel: 3 },
                  'Tell us more:'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    { hasTopBorder: true },
                    'Trouble Signing In'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Forgot password'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step4a") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Change your password'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep3b) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step2a") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Update Account Information'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'base', headingLevel: 3 },
                  'Tell us more:'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    { hasTopBorder: true },
                    'Update name, email address, or phone number'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step4b") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Add, edit, or remove payment information'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Set default credit card'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep3c) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step2a") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Audible Credits'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'base', headingLevel: 3 },
                  'Tell us more:'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    { hasTopBorder: true },
                    'How do credits work?'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'How many credits do I have?'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'I cannot keep up with my credits'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'I did not receive my credits'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step4d") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Can I purchase additional credits?'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Other credit questions'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep3d) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step2b") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Audible Credits'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'base', headingLevel: 3 },
                  'Tell us more:'
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step4f") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    { hasTopBorder: true },
                    'Android devices'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step4f") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Apple iOS devices (iPhone,iPad,iPod Touch)'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Kindle Fire or E-Reader'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Windows Computer'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Mac Computer'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step4f") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Windows Phone or tablet'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step4f") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Amazon Fire Phone'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Apple iPod, MP3 player, or other devices'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep3e) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step2c") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Gifts'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'base', headingLevel: 3 },
                  'Tell us more:'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    { hasTopBorder: true },
                    'How do I purchase a book to gift to a friend?'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step4g") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'How do I purchase a gift membership?'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'How do I redeem a gift membership or a gifted book?'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Can I redeem my Amazon gift card toward an Audible purchase?'
                  )
                ),
                _react2['default'].createElement(
                  'div',
                  { onClick: this.handleClick.bind(this, "step4h") },
                  _react2['default'].createElement(
                    _cc2['default'].MobileLink,
                    null,
                    'Other gift questions'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep4a) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step3a") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Back'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
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
                    'You can change or reset your password online. To change your current password:'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { spacing: 'small', listType: 'nostyle' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      '1. Visit our Change Password page'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      '2. Type in your current password'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      '3. Enter your new password twice'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      '4. Click Save'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'Note: For more information, visit our ',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'FAQ'
                    ),
                    '.'
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
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep4b) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step3b") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Back'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
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
                    'You can make changes to your payment information by: '
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listType: 'nostyle', spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      '1. Visiting the ',
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        null,
                        'Manage Payment Information'
                      ),
                      ' section of your Account Details page.'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      '2. Clicking Edit or Remove Card next to the credit card you would like to edit.'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      '3. Clicking Add new card to add a new form of payment.'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'Note: For more information, visit our ',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'FAQ'
                    ),
                    '.'
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
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep4c) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step2a") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Back'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
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
                    'Audible plan members can return books online with our Great Listen Guarantee.'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'Click ',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: 'https://www.audible.com/purchase-history?&bp_ua=y' },
                      'here'
                    ),
                    ' to make a return.'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'Note: For more information on the Great Listen Guarantee, visit our ',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'FAQ'
                    ),
                    '. For membership fee refunds, please proceed by contacting Customer Service.'
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
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep4d) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step3c") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Back'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
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
                    'Audible members can purchase extra credits at a discounted rate, as long as certain membership criteria are met:'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { spacing: 'small', listType: 'nostyle' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      '1. You must be a current Audible member'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      '2. You must have been a member for at least 3 months'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      '3. You must have 1 credit or less in your account'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      '4. If you are an annual member, your membership renewal date must be at least 30 days away '
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'If eligible, you will see a "Purchase Extra Credits" link at the top of the screen under your name or login.'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'Note: For more information about Audible credits, visit our ',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'FAQ'
                    ),
                    '.'
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
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep4e) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step2a") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Back'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
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
                    'Visit our ',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'FAQ'
                    ),
                    ' page for other account-related questions.'
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
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep4f) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step3d") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Back'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
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
                    'You can deactivate your device by:'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listType: 'nostyle', spacing: 'small' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      '1. Visiting the Manage Your Content and Devices at Amazon.com'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      '2. Clicking Your Devices'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      '3. Clicking Deregister on the device you wish to deactivate'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'Note: For more information on managing your devices visit our ',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'FAQ'
                    ),
                    '.'
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
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep4g) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step3e") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Back'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
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
                    'You can purchase a Gift Membership by visiting our ',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { url: ' http://www.audible.com/mt/giftmembership/ref=a_mt_contactus-c41_dyk_giftcenter/?&bp_ua=y' },
                      'Gift Center'
                    ),
                    '.'
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: '3', spacing: 'small' },
                  'How would you like to contact us?'
                ),
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
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { cssClass: (0, _classnames2['default'])(fadeStep4h) },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Section,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { linkType: 'nav', onClick: this.handleClick.bind(this, "step3e") },
                    _react2['default'].createElement(
                      'div',
                      { className: 'bc-container bc-clearfix' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'small', spacingTop: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base' })
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 11, position: 'last' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Text,
                            null,
                            'Back'
                          )
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: '3', spacing: 'small' },
                  'How would you like to contact us?'
                ),
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

  return ContactUsMobile2;
})(_react2['default'].Component);

exports['default'] = ContactUsMobile2;
module.exports = exports['default'];
/*   step 2a  */ /*   step 2b  */ /*   step 2c  */ /*   step 3a - Login Assistance */ /*   step 3b - Update Account information */ /*   step 3c - Audible Credits */ /*   step 3d -Deactivate a device */ /*   step 3e - Gifts */ /*   step 4a - Change Password */ /*   step 4b - Add edit remove payment */ /*   step 4c - Return or Refund */ /*   step 4d - Audible Credits */ /*   step 4e - Other Account Questions */ /*   step 4f - deactivat a device */ /*   step 4g - Gifts */ /*   step 4h - Other Gift Question */