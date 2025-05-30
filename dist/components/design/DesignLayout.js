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

var _layoutHeader = require('../layout/Header');

var _layoutHeader2 = _interopRequireDefault(_layoutHeader);

var _layoutFooter = require('../layout/Footer');

var _layoutFooter2 = _interopRequireDefault(_layoutFooter);

var DesignLayout = (function (_React$Component) {
  _inherits(DesignLayout, _React$Component);

  function DesignLayout() {
    _classCallCheck(this, DesignLayout);

    _get(Object.getPrototypeOf(DesignLayout.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DesignLayout, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_layoutHeader2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { spacingTop: 'large' },
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridRow,
              { fixedColumn: 'left', fixedColumnWidth: 200 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { side: 'left', fixedColumn: 'left', fixedColumnWidth: 200 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { backgroundColor: 'secondary', paddingSize: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Accordion,
                    { activeRow: 1, titleSize: 'small', titleCapitalize: true },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].AccordionRow,
                      { title: 'Principles' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { spacing: 'mini', listType: 'nostyle', textSize: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, url: "/design", textColor: 'base' },
                            'Our Principles'
                          )
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].AccordionRow,
                      { title: 'Color' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { spacing: 'mini', listType: 'nostyle', textSize: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, url: "/design/color-palette", textColor: 'base' },
                            'Color Palette'
                          )
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].AccordionRow,
                      { title: 'Typography' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { spacing: 'mini', listType: 'nostyle', textSize: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(_AudibleUITags2['default'].Link, { app: true, url: "/", textColor: 'base' })
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].AccordionRow,
                      { title: 'Iconography' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { spacing: 'mini', listType: 'nostyle', textSize: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(_AudibleUITags2['default'].Link, { app: true, url: "/", textColor: 'base' })
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].AccordionRow,
                      { title: 'Grid' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { spacing: 'mini', listType: 'nostyle', textSize: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(_AudibleUITags2['default'].Link, { app: true, url: "/", textColor: 'base' })
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].AccordionRow,
                      { title: 'Elements' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { spacing: 'mini', listType: 'nostyle', textSize: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(_AudibleUITags2['default'].Link, { app: true, url: "/", textColor: 'base' })
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].AccordionRow,
                      { title: 'Patterns' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { spacing: 'mini', listType: 'nostyle', textSize: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(_AudibleUITags2['default'].Link, { app: true, url: "/", textColor: 'base' })
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].AccordionRow,
                      { title: 'Downloads' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { spacing: 'mini', listType: 'nostyle', textSize: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, url: "/design/downloads", textColor: 'base' },
                            'Downloads'
                          )
                        )
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { side: 'right', fixedColumn: 'left', columnPadding: '40px' },
                this.props.children
              )
            )
          )
        ),
        _react2['default'].createElement(_layoutFooter2['default'], null)
      );
    }
  }]);

  return DesignLayout;
})(_react2['default'].Component);

DesignLayout.PropTypes = {
  activeRow: _react.PropTypes.number
};

exports['default'] = DesignLayout;
module.exports = exports['default'];