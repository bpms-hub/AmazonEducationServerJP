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

var _HeaderAquisitionHeaderMobile = require('../Header/AquisitionHeaderMobile');

var _HeaderAquisitionHeaderMobile2 = _interopRequireDefault(_HeaderAquisitionHeaderMobile);

var _FooterProdFooterMobile = require('../Footer/ProdFooterMobile');

var _FooterProdFooterMobile2 = _interopRequireDefault(_FooterProdFooterMobile);

var HelpCenterCategoryMobile = (function (_React$Component) {
  _inherits(HelpCenterCategoryMobile, _React$Component);

  function HelpCenterCategoryMobile() {
    _classCallCheck(this, HelpCenterCategoryMobile);

    _get(Object.getPrototypeOf(HelpCenterCategoryMobile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(HelpCenterCategoryMobile, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'mobile' },
        _react2['default'].createElement(_HeaderAquisitionHeaderMobile2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { backgroundColor: 'secondary', padding: 'large', paddingTop: 'large', spacing: 'base' },
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, null)
          )
        ),
        _react2['default'].createElement(
          _cc2['default'].MobilePageTitle,
          null,
          'Do I lose my credits when I cancel?'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].List,
          { listType: 'nostyle' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category/article" },
              'Billing'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category/article" },
              'Cancel'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category/article" },
              'Pause'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category/article" },
              'Refunds'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category/article" },
              'Login/Password'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category/article" },
              'Email Preferences'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category/article" },
              'Invoices'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category/article" },
              'Change Plan'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category/article", hideBottomBorder: true },
              'Merge with Amazon'
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooterMobile2['default'], { hideCategories: true })
      );
    }
  }]);

  return HelpCenterCategoryMobile;
})(_react2['default'].Component);

exports['default'] = HelpCenterCategoryMobile;
module.exports = exports['default'];