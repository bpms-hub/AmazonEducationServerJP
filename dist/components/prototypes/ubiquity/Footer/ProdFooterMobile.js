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

// eslint-disable-line no-unused-vars

var _react2 = _interopRequireDefault(_react);

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var _cc = require('../cc');

var _cc2 = _interopRequireDefault(_cc);

var ProdFooterMobile = (function (_React$Component) {
  _inherits(ProdFooterMobile, _React$Component);

  function ProdFooterMobile() {
    _classCallCheck(this, ProdFooterMobile);

    _get(Object.getPrototypeOf(ProdFooterMobile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ProdFooterMobile, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'footer',
        null,
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { backgroundColor: 'secondary', padding: 'medium' },
          !this.props.hideCategories ? _react2['default'].createElement(
            _cc2['default'].MobileLink,
            { url: "/prototypes/brickcity-mobile/category-archive", hasTopBorder: true, hideBottomBorder: true },
            'View All Categories'
          ) : null,
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'small' },
              _react2['default'].createElement(_AudibleUITags2['default'].Search, { value: 'Search' })
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].List,
            { listType: 'nostyle', spacing: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              null,
              _react2['default'].createElement(
                _cc2['default'].MobileLink,
                { app: true, url: "/prototypes/brickcity-mobile" },
                'Contact Us'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              null,
              _react2['default'].createElement(
                _cc2['default'].MobileLink,
                { app: true, url: "/prototypes/brickcity-mobile/help-center" },
                'Help'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].ListItem,
              null,
              _react2['default'].createElement(
                _cc2['default'].MobileLink,
                { app: true, url: "/prototypes/brickcity-mobile" },
                'Promo Code'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'micro' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                null,
                'Conditions of Use'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Pipe, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                null,
                'Privacy Policy'
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Pipe, null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { app: true, url: "/prototypes/brickcity" },
                'Full Site'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textColor: 'tertiary' },
              '© Copyright 1997-2015 Audible Inc.'
            )
          )
        )
      );
    }
  }]);

  return ProdFooterMobile;
})(_react2['default'].Component);

ProdFooterMobile.PropTypes = {
  hideCategories: _react.PropTypes.bool
};

exports['default'] = ProdFooterMobile;
module.exports = exports['default'];