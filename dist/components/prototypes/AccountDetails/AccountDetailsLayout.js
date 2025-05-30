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

var _ubiquityHeaderProdHeader = require('../ubiquity/Header/ProdHeader');

var _ubiquityHeaderProdHeader2 = _interopRequireDefault(_ubiquityHeaderProdHeader);

var _ubiquityFooterProdFooter = require('../ubiquity/Footer/ProdFooter');

var _ubiquityFooterProdFooter2 = _interopRequireDefault(_ubiquityFooterProdFooter);

var AccountDetailsLayout = (function (_React$Component) {
  _inherits(AccountDetailsLayout, _React$Component);

  function AccountDetailsLayout(props, context) {
    _classCallCheck(this, AccountDetailsLayout);

    _get(Object.getPrototypeOf(AccountDetailsLayout.prototype), 'constructor', this).call(this, props, context);
  }

  _createClass(AccountDetailsLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.props.location.pathname);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_ubiquityHeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { spacingTop: 'medium', spacing: 'mini' },
            'Account Details'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 12, position: 'last', spacingTop: 'micro' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].List,
                { listDirection: 'horizontal', id: this.props.id, cssClass: 'bc-tab-set' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].ListItem,
                  { spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    {
                      app: true,
                      textBold: this.props.location.pathname === '/prototypes/brickcity/account-details' || this.props.location.pathname === '/prototypes/brickcity/account-details/switch-membership',
                      url: '/prototypes/brickcity/account-details',
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
                        className: this.props.location.pathname === '/prototypes/brickcity/account-details' || this.props.location.pathname === '/prototypes/brickcity/account-details/switch-membership' ? 'bc-color-background-active' : null })
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
                      textBold: this.props.location.pathname === '/prototypes/brickcity/account-details/billing',
                      url: '/prototypes/brickcity/account-details/billing',
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
                        className: this.props.location.pathname === '/prototypes/brickcity/account-details/billing' ? 'bc-color-background-active' : null })
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
                      textBold: this.props.location.pathname === '/prototypes/brickcity/account-details/purchase-history',
                      url: '/prototypes/brickcity/account-details/purchase-history?orderType=orders',
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
                        className: this.props.location.pathname === '/prototypes/brickcity/account-details/purchase-history' ? 'bc-color-background-active' : null })
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
                      textBold: this.props.location.pathname === '/prototypes/brickcity/account-details/preferences',
                      url: '/prototypes/brickcity/account-details/preferences',
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
                        className: this.props.location.pathname === '/prototypes/brickcity/account-details/preferences' ? 'bc-color-background-active' : null })
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                  _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: 'tertiary' })
                )
              ),
              this.props.children
            )
          )
        ),
        _react2['default'].createElement(_ubiquityFooterProdFooter2['default'], null)
      );
    }
  }]);

  return AccountDetailsLayout;
})(_react2['default'].Component);

AccountDetailsLayout.contextTypes = {
  location: _react2['default'].PropTypes.object
};

exports['default'] = AccountDetailsLayout;
module.exports = exports['default'];