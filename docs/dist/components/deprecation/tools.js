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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var tools = (function (_React$Component) {
  _inherits(tools, _React$Component);

  function tools() {
    _classCallCheck(this, tools);

    _get(Object.getPrototypeOf(tools.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(tools, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_Header2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { spacing: 'large', spacingTop: 'large', textSize: 'extra-large' },
            'Tools'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 4 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { spacing: 'extra-large', hasBorder: true },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'base' },
                  'Sandbox ',
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textSize: 'small', textColor: 'secondary' },
                    '(beta)'
                  )
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'Prototyping tool for entering react tags to generate JSP and HTML code.'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { buttonType: 'primary', inline: true, url: "/tools/sandbox", app: true },
                  'Use Sandbox'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_Footer2['default'], null)
      );
    }
  }]);

  return tools;
})(_react2['default'].Component);

exports.tools = tools;
exports['default'] = tools;