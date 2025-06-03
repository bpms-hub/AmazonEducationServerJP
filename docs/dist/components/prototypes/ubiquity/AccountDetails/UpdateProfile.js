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

var _HeaderProdHeader = require('../Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('../Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

var UpdateProfile = (function (_React$Component) {
  _inherits(UpdateProfile, _React$Component);

  function UpdateProfile() {
    _classCallCheck(this, UpdateProfile);

    _get(Object.getPrototypeOf(UpdateProfile.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(UpdateProfile, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(_AudibleUITags2['default'].Breadcrumbs, { breadcrumbTrail: [{
              name: "Home",
              url: "/prototypes/brickcity"
            }, {
              name: "Account Details",
              url: "/prototypes/brickcity/account-details-b"
            }, {
              name: "Update Profile"
            }], spacing: 'small' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacingTop: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 12, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { backgroundColor: 'primary', hasBorder: true, paddingSize: 'base', spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, spacing: 'small', textColor: 'base' },
                    'Update Your Name or Location'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    { textColor: 'tertiary' },
                    'If you wish to change the name or location associated with your Audible customer account, you may do so below.',
                    _react2['default'].createElement('br', null),
                    'Be sure to click the Save Changes button when you are done.'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Box,
                    { hasBorder: false, paddingSize: 'none', spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textBold: true },
                        'Please note: '
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary' },
                        'changes to your account settings on Audible will also change your settings on Amazon.com.'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 4 },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { headingLevel: 3 },
                          'Display Name'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'John Dough' })
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 4 },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { headingLevel: 3 },
                          'Email Address'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'johndough@audible.com' })
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'medium' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 4 },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { headingLevel: 3 },
                          'Password'
                        ),
                        _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: '•••••••••' })
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridColumn,
                        { gridUnits: 3 },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Button,
                          { buttonType: 'primary', inline: true },
                          'Save Changes'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return UpdateProfile;
})(_react2['default'].Component);

exports['default'] = UpdateProfile;
module.exports = exports['default'];