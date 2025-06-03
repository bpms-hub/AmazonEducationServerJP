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

var ColorPalette = (function (_React$Component) {
  _inherits(ColorPalette, _React$Component);

  function ColorPalette() {
    _classCallCheck(this, ColorPalette);

    _get(Object.getPrototypeOf(ColorPalette.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ColorPalette, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { spacing: 'base' },
          'Color'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 3, spacing: 'base' },
          'Download Swatches'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].List,
          null,
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              null,
              'PSD'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].ListItem,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].Link,
              null,
              'Sketch'
            )
          )
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 2, spacing: 'base' },
          'Typographic & Element Colors'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 2, spacing: 'base' },
          'Background Colors'
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Heading,
          { headingLevel: 2, spacing: 'base' },
          'Border & Lines'
        )
      );
    }
  }]);

  return ColorPalette;
})(_react2['default'].Component);

ColorPalette.PropTypes = {};

exports['default'] = ColorPalette;
module.exports = exports['default'];