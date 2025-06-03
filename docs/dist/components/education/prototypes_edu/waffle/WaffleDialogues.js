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

var _prototypesUbiquityCc = require('../../../prototypes/ubiquity/cc');

var _prototypesUbiquityCc2 = _interopRequireDefault(_prototypesUbiquityCc);

var _layout_eduAEHeaderJs = require("../../layout_edu/AEHeader.js");

var _layout_eduAEHeaderJs2 = _interopRequireDefault(_layout_eduAEHeaderJs);

var _layout_eduAESidebarJs = require("../../layout_edu/AESidebar.js");

var _layout_eduAESidebarJs2 = _interopRequireDefault(_layout_eduAESidebarJs);

var _layout_eduAEFooterJs = require("../../layout_edu/AEFooter.js");

var _layout_eduAEFooterJs2 = _interopRequireDefault(_layout_eduAEFooterJs);

var _iosWButtonsIOSJs = require("./ios/WButtonsIOS.js");

var _iosWButtonsIOSJs2 = _interopRequireDefault(_iosWButtonsIOSJs);

var _androidWDialoguesAndroidJs = require("./android/WDialoguesAndroid.js");

var _androidWDialoguesAndroidJs2 = _interopRequireDefault(_androidWDialoguesAndroidJs);

var WaffleDialogues = (function (_React$Component) {
  _inherits(WaffleDialogues, _React$Component);

  function WaffleDialogues() {
    _classCallCheck(this, WaffleDialogues);

    _get(Object.getPrototypeOf(WaffleDialogues.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(WaffleDialogues, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { background: '#222222' },
        _react2['default'].createElement(_layout_eduAEHeaderJs2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: '' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacingTop: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 3 },
              _react2['default'].createElement(_layout_eduAESidebarJs2['default'], null)
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 9, cssClass: 'bc-edu-container' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { background: '#fff', hasBorder: false, paddingSize: 'none' },
                _react2['default'].createElement(
                  _prototypesUbiquityCc2['default'].Tabs,
                  { spacingTop: 'base' },
                  _react2['default'].createElement(
                    _prototypesUbiquityCc2['default'].TabPanel,
                    { title: 'Android' },
                    _react2['default'].createElement(_androidWDialoguesAndroidJs2['default'], null)
                  ),
                  _react2['default'].createElement(
                    _prototypesUbiquityCc2['default'].TabPanel,
                    { title: '' },
                    _react2['default'].createElement(_iosWButtonsIOSJs2['default'], null)
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_layout_eduAEFooterJs2['default'], null)
      );
    }
  }]);

  return WaffleDialogues;
})(_react2['default'].Component);

exports['default'] = WaffleDialogues;
module.exports = exports['default'];
/* Content Section */