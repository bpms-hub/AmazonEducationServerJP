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

var ContactPhoneMobile = (function (_React$Component) {
  _inherits(ContactPhoneMobile, _React$Component);

  function ContactPhoneMobile(props) {
    _classCallCheck(this, ContactPhoneMobile);

    _get(Object.getPrototypeOf(ContactPhoneMobile.prototype), 'constructor', this).call(this, props);
    this.state = {
      activeElement: "step1"
    };
  }

  _createClass(ContactPhoneMobile, [{
    key: 'handleClick',
    value: function handleClick(element) {
      this.setState({
        activeElement: element
      });
    }
  }, {
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
            _AudibleUITags2['default'].Heading,
            { headingLevel: 2, spacing: 'small', spacingTop: 'medium' },
            'Talk with Audible Customer Service'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'small' },
            _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              { linkType: 'nav', app: true, url: '/prototypes/brickcity-mobile/contact2' },
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
            { headingLevel: 3, spacing: 'base' },
            'Enter your number and we\'ll call you'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'base' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textBold: true },
                'Country'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Dropdown,
                { spacing: 'small' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].DropdownOption,
                  null,
                  'United States'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].DropdownOption,
                  null,
                  'Canada'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].DropdownOption,
                  null,
                  'Guam'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].DropdownOption,
                  null,
                  'Porto Rico'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].DropdownOption,
                  null,
                  'Virginia Islands, U.S.'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].DropdownOption,
                  null,
                  'Other'
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textBold: true },
                'Your number'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(_AudibleUITags2['default'].TextInput, null)
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: '12' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { buttonType: 'primary', spacing: 'mini' },
                'Call Me Now'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                null,
                'Call Me in 5 Minutes'
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooterMobile2['default'], null)
      );
    }
  }]);

  return ContactPhoneMobile;
})(_react2['default'].Component);

exports['default'] = ContactPhoneMobile;
module.exports = exports['default'];