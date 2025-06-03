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

var _ubiquityCc = require('../../ubiquity/cc');

var _ubiquityCc2 = _interopRequireDefault(_ubiquityCc);

var _ubiquityHeaderProdHeaderMobile = require('../../ubiquity/Header/ProdHeaderMobile');

var _ubiquityHeaderProdHeaderMobile2 = _interopRequireDefault(_ubiquityHeaderProdHeaderMobile);

var _ubiquityFooterProdFooterMobile = require('../../ubiquity/Footer/ProdFooterMobile');

var _ubiquityFooterProdFooterMobile2 = _interopRequireDefault(_ubiquityFooterProdFooterMobile);

var AccountDetailsLayoutMobile = (function (_React$Component) {
  _inherits(AccountDetailsLayoutMobile, _React$Component);

  function AccountDetailsLayoutMobile() {
    _classCallCheck(this, AccountDetailsLayoutMobile);

    _get(Object.getPrototypeOf(AccountDetailsLayoutMobile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AccountDetailsLayoutMobile, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_ubiquityHeaderProdHeaderMobile2['default'], null),
        _react2['default'].createElement(
          _ubiquityCc2['default'].MobilePageTitle,
          { url: "/prototypes/brickcity-mobile", textAlign: 'center', first: true },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            { textColor: 'base' },
            'Account'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].List,
            { style: { whiteSpace: 'nowrap', overflow: 'scroll' }, listDirection: 'horizontal', id: this.props.id },
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              { spacing: 'micro' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  app: true,
                  textBold: this.props.location.pathname === '/prototypes/brickcity-mobile/account-details',
                  url: '/prototypes/brickcity-mobile/account-details',
                  textColor: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { cssClass: 'bc-relative', paddingSize: 'small' },
                  'Overview',
                  _react2['default'].createElement('span', {
                    style: {
                      display: 'block',
                      height: '5px',
                      position: 'absolute',
                      left: '0',
                      right: '0',
                      bottom: '0'
                    },
                    className: this.props.location.pathname === '/prototypes/brickcity-mobile/account-details' ? 'bc-color-background-active' : null })
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
              _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              { spacing: 'micro' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  app: true,
                  textBold: this.props.location.pathname === '/prototypes/brickcity-mobile/account-details/billing',
                  url: '/prototypes/brickcity-mobile/account-details/billing',
                  textColor: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { cssClass: 'bc-relative', paddingSize: 'small' },
                  'Payment',
                  _react2['default'].createElement('span', {
                    style: {
                      display: 'block',
                      height: '5px',
                      position: 'absolute',
                      left: '0',
                      right: '0',
                      bottom: '0'
                    },
                    className: this.props.location.pathname === '/prototypes/brickcity-mobile/account-details/billing' ? 'bc-color-background-active' : null })
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
              _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              { spacing: 'micro' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  app: true,
                  textBold: this.props.location.pathname === '/prototypes/brickcity-mobile/account-details/purchase-history',
                  url: '/prototypes/brickcity-mobile/account-details/purchase-history',
                  textColor: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { cssClass: 'bc-relative', paddingSize: 'small' },
                  'Purchase History',
                  _react2['default'].createElement('span', {
                    style: {
                      display: 'block',
                      height: '5px',
                      position: 'absolute',
                      left: '0',
                      right: '0',
                      bottom: '0'
                    },
                    className: this.props.location.pathname === '/prototypes/brickcity-mobile/account-details/purchase-history' ? 'bc-color-background-active' : null })
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
              _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              { spacing: 'micro' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                {
                  app: true,
                  textBold: this.props.location.pathname === '/prototypes/brickcity-mobile/account-details/preferences',
                  url: '/prototypes/brickcity-mobile/account-details/preferences',
                  textColor: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { cssClass: 'bc-relative', paddingSize: 'small' },
                  'Preferences',
                  _react2['default'].createElement('span', {
                    style: {
                      display: 'block',
                      height: '5px',
                      position: 'absolute',
                      left: '0',
                      right: '0',
                      bottom: '0'
                    },
                    className: this.props.location.pathname === '/prototypes/brickcity-mobile/account-details/preferences' ? 'bc-color-background-active' : null })
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
              _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
            )
          ),
          this.props.children
        ),
        _react2['default'].createElement(_ubiquityFooterProdFooterMobile2['default'], null)
      );
    }
  }]);

  return AccountDetailsLayoutMobile;
})(_react2['default'].Component);

exports['default'] = AccountDetailsLayoutMobile;
module.exports = exports['default'];