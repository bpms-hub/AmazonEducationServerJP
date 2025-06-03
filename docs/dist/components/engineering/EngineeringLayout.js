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

var EngineeringLayout = (function (_React$Component) {
  _inherits(EngineeringLayout, _React$Component);

  function EngineeringLayout() {
    _classCallCheck(this, EngineeringLayout);

    _get(Object.getPrototypeOf(EngineeringLayout.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(EngineeringLayout, [{
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
                      { title: 'Elements' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { spacing: 'mini', listType: 'nostyle', textSize: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/Box" },
                            'Box'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/Button" },
                            'Button'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/Checkbox" },
                            'Checkbox'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/Divider" },
                            'Divider'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/Dropdown" },
                            'Dropdown'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/DropdownOption" },
                            'Dropdown Option'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/FixedGridRow" },
                            'Fixed Grid Row'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/GrixedGridColumn" },
                            'Fixed Grid Column'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/GridRow" },
                            'Grid Row'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/GridColumn" },
                            'Grid Column'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/Heading" },
                            'Heading'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/Icon" },
                            'Icon'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/Image" },
                            'Image'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/InlineAlert" },
                            'Inline Alert'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/LetterSpace" },
                            'Letterspace'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/Link" },
                            'Link'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/List" },
                            'List'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/ListItem" },
                            'ListItem'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/Meter" },
                            'Meter'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/Paragraph" },
                            'Paragraph'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/Pipe" },
                            'Pipe'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/RadioButton" },
                            'Radio Button'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/Section" },
                            'Section'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/Table" },
                            'Table'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/TableColumn" },
                            'Table Column'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/TableColumnHeading" },
                            'Table Column Heading'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/TableRow" },
                            'Table Row'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/Text" },
                            'Text'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/TextArea" },
                            'Text Area'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/TextInput" },
                            'Text Input'
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { app: true, textColor: 'base', url: "/engineering/elements/ToggleSwitch" },
                            'Toggle Switch'
                          )
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].AccordionRow,
                      { title: 'Tutorials' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { spacing: 'mini', listType: 'nostyle', textSize: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(_AudibleUITags2['default'].Link, { textColor: 'base' })
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].AccordionRow,
                      { title: 'Tools' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { spacing: 'mini', listType: 'nostyle', textSize: 'small' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { url: "/engineering/tools/sandbox", textColor: 'base' },
                            'Sandbox'
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

  return EngineeringLayout;
})(_react2['default'].Component);

EngineeringLayout.PropTypes = {
  activeRow: _react.PropTypes.number
};

exports['default'] = EngineeringLayout;
module.exports = exports['default'];