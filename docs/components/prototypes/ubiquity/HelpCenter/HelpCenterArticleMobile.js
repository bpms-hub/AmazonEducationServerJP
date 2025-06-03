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

var HelpCenterArticleMobile = (function (_React$Component) {
  _inherits(HelpCenterArticleMobile, _React$Component);

  function HelpCenterArticleMobile() {
    _classCallCheck(this, HelpCenterArticleMobile);

    _get(Object.getPrototypeOf(HelpCenterArticleMobile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(HelpCenterArticleMobile, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'mobile' },
        _react2['default'].createElement(_HeaderAquisitionHeaderMobile2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { backgroundColor: 'secondary', padding: 'large', paddingTop: 'large' },
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(_AudibleUITags2['default'].TextInput, null)
          )
        ),
        _react2['default'].createElement(
          _cc2['default'].MobilePageTitle,
          { spacing: 'base' },
          'Do I lose my credits when I cancel?'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Paragraph,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2, spacing: 'mini' },
            'Was this helpful?'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                null,
                'Yes'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                null,
                'No'
              )
            )
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  'Previous'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6, textAlign: 'right', position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'Next'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooterMobile2['default'], { hideCategories: true })
      );
    }
  }]);

  return HelpCenterArticleMobile;
})(_react2['default'].Component);

exports['default'] = HelpCenterArticleMobile;
module.exports = exports['default'];