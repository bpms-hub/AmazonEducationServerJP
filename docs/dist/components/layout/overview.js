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

var _prototypesUbiquityCc = require('../prototypes/ubiquity/cc');

var _prototypesUbiquityCc2 = _interopRequireDefault(_prototypesUbiquityCc);

var overview = (function (_React$Component) {
  _inherits(overview, _React$Component);

  function overview() {
    _classCallCheck(this, overview);

    _get(Object.getPrototypeOf(overview.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(overview, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_Header2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { spacingTop: 'medium', spacing: 'large' },
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { spacing: 'small' },
              'Welcome to Brick City'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              null,
              'Newark, New Jersey—Brick City. Home of Audible since 2007.'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              null,
              'Just as Audible is committed to revitalizing Newark, we are working to build a cohesive design system. Brick-by-solid-brick we are creating a set of standards and a UI toolkit on how to build Audible user interfaces.'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: '/design' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/brickcity_hp_categories_design._V286431245_.jpg', imageWidth: '100%', imageHeight: '100%' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: 'mailto:aud-design-platform@amazon.com' },
                  'Contact Us'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: '/engineering' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/brickcity_hp_categories_engineering._V286431245_.jpg', imageWidth: '100%', imageHeight: '100%' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: 'mailto:audible-platform-dev@amazon.com' },
                  'Contact Us'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4, position: 'last' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { app: true, url: '/prototyping' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/guidelines/brickcity_hp_categories_prototypes._V286431245_.jpg', imageWidth: '100%', imageHeight: '100%' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { url: 'mailto:aud-design-prototype@amazon.com' },
                  'Contact Us'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_Footer2['default'], null)
      );
    }
  }]);

  return overview;
})(_react2['default'].Component);

exports['default'] = overview;
module.exports = exports['default'];