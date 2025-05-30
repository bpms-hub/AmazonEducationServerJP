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

{
  /*
         TO DO:
  
        •paddingSize spacing on box √
        •Use spacing arrangement, not spacingTop √
  
        */}

var AccountDetailsMobile = (function (_React$Component) {
  _inherits(AccountDetailsMobile, _React$Component);

  function AccountDetailsMobile() {
    _classCallCheck(this, AccountDetailsMobile);

    _get(Object.getPrototypeOf(AccountDetailsMobile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AccountDetailsMobile, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeaderMobile2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacingTop: 'medium' },
            _react2['default'].createElement(
              _cc2['default'].MobilePageTitle,
              { textAlign: 'center', first: true },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 2 },
                'Account Details'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'medium' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'secondary', paddingSize: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacingTop: 'base' },
                  'Account Information'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 12, spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, spacingTop: 'medium', spacing: 'none' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { headingLevel: 3, spacing: 'micro' },
                      'Member Since:'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, spacingTop: 'medium', spacing: 'none' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'micro', textColor: 'base' },
                      '08-02-2011'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, spacing: 'none' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { spacing: 'micro', headingLevel: 3 },
                      'Membership Plan:'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, spacing: 'none' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'micro', textColor: 'base' },
                      'AudibleListener® Gold'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, spacing: 'none' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { spacing: 'micro', headingLevel: 3 },
                      'Next Credit Date:'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, spacing: 'none' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'micro', textColor: 'base' },
                      '10-05-2015'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, spacing: 'none' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Heading,
                      { spacing: 'micro', headingLevel: 3 },
                      'Audiobook Credits:'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, spacing: 'none' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { spacing: 'micro', textColor: 'base' },
                      '1'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'large' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacingTop: 'base' },
                    'My Details'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 12, spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacingTop: 'medium', spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, spacing: 'micro' },
                        'Name:'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacingTop: 'medium', spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'micro', textColor: 'base' },
                        'John Dough'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { spacing: 'micro', headingLevel: 3 },
                        'Phone Number:'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'micro', textColor: 'base' },
                        '1(234)567-8901'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { spacing: 'micro', headingLevel: 3 },
                        'Email Address:'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'micro', textColor: 'base' },
                        'johndough@audible.com'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { spacing: 'micro', headingLevel: 3 },
                        'Username'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'micro', textColor: 'base' },
                        'johndough'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { spacing: 'micro', headingLevel: 3 },
                        'Password'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 6, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Paragraph,
                        { spacing: 'micro', textColor: 'base' },
                        '********* ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          null,
                          'Change Password'
                        ),
                        ')'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { spacing: 'micro', headingLevel: 3 },
                        'Adult Content Filter:'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, spacing: 'none' },
                      _react2['default'].createElement(_AudibleUITags2['default'].ToggleSwitch, { checked: false })
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'large' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 12 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listType: 'nostyle', spacing: 'large' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      null,
                      _react2['default'].createElement(
                        _cc2['default'].MobileLink,
                        { app: true, url: "/prototypes/brickcity-mobile/payment-information", hasTopBorder: this.props.hideCategories ? true : null },
                        'Manage Payment Options'
                      )
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

  return AccountDetailsMobile;
})(_react2['default'].Component);

exports['default'] = AccountDetailsMobile;
module.exports = exports['default'];
/*Account Infomrmation*/