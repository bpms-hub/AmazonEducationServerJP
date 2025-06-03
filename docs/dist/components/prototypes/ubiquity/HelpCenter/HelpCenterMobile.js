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

var _HeaderAquisitionHeaderMobile = require('../Header/AquisitionHeaderMobile');

var _HeaderAquisitionHeaderMobile2 = _interopRequireDefault(_HeaderAquisitionHeaderMobile);

var _FooterProdFooterMobile = require('../Footer/ProdFooterMobile');

var _FooterProdFooterMobile2 = _interopRequireDefault(_FooterProdFooterMobile);

var HelpCenterMobile = (function (_React$Component) {
  _inherits(HelpCenterMobile, _React$Component);

  function HelpCenterMobile() {
    _classCallCheck(this, HelpCenterMobile);

    _get(Object.getPrototypeOf(HelpCenterMobile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(HelpCenterMobile, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'mobile' },
        _react2['default'].createElement(_HeaderAquisitionHeaderMobile2['default'], null),
        _react2['default'].createElement(
          _cc2['default'].MobilePageTitle,
          { textAlign: 'center', first: true },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            { textColor: 'base' },
            'Help Center'
          )
        ),
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
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { textSize: 'large', spacing: 'base', headingLevel: 2 },
            'Popular Requests'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].List,
          { listType: 'nostyle', spacing: 'base' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { hasTopBorder: true },
              'Return Your Book'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              null,
              'Reset Your Password'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              null,
              'Cancel My Membership'
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { textSize: 'large', spacing: 'base', headingLevel: 2 },
            'Help Categories'
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].List,
          { listType: 'nostyle' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category", hasTopBorder: true },
              'How Audible Works'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category" },
              'Account'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category" },
              'Android Devices'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category" },
              'iOS Devices'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category" },
              'Website'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category" },
              'ADM'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category" },
              'iTunes'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category" },
              'Other Devices'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { url: "/prototypes/brickcity-mobile/help-center/category" },
              'Kindle Devices'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _cc2['default'].MobileLink,
              { hideBottomBorder: true, url: "/prototypes/brickcity-mobile/help-center/category" },
              'Windows Phone'
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooterMobile2['default'], { hideCategories: true })
      );
    }
  }]);

  return HelpCenterMobile;
})(_react2['default'].Component);

exports['default'] = HelpCenterMobile;
module.exports = exports['default'];