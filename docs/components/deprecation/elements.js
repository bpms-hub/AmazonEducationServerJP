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

var elements = (function (_React$Component) {
  _inherits(elements, _React$Component);

  function elements() {
    _classCallCheck(this, elements);

    _get(Object.getPrototypeOf(elements.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(elements, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_Header2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { spacing: 'extra-large', spacingTop: 'large' },
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
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'mini', textColor: 'tertiary' },
                  'Elements'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'micro', headingLevel: '3' },
                  'Layout'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { spacing: 'small', listType: 'nostyle', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/Box" },
                      'Box'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/Divider" },
                      'Divider'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/FixedGridRow" },
                      'Fixed Grid Row'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/GrixedGridColumn" },
                      'Fixed Grid Column'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/GridRow" },
                      'Grid Row'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/GridColumn" },
                      'Grid Column'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/Pipe" },
                      'Pipe'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/Section" },
                      'Section'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'micro', headingLevel: '3' },
                  'Typography'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { spacing: 'small', listType: 'nostyle', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/Heading" },
                      'Heading'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/LetterSpace" },
                      'Letterspace'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/Paragraph" },
                      'Paragraph'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/Text" },
                      'Text'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'micro', headingLevel: '3' },
                  'Lists'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { spacing: 'small', listType: 'nostyle', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/List" },
                      'List'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/ListItem" },
                      'ListItem'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'micro', headingLevel: '3' },
                  'Links'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { spacing: 'small', listType: 'nostyle', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/Link" },
                      'Link'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'micro', headingLevel: '3' },
                  'Buttons'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { spacing: 'small', listType: 'nostyle', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/Button" },
                      'Button'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'micro', headingLevel: '3' },
                  'Images'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { spacing: 'small', listType: 'nostyle', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/Image" },
                      'Image'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'micro', headingLevel: '3' },
                  'Forms'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { spacing: 'small', listType: 'nostyle', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/Checkbox" },
                      'Checkbox'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/Dropdown" },
                      'Dropdown'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/DropdownOption" },
                      'Dropdown Option'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/RadioButton" },
                      'Radio Button'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/TextArea" },
                      'Text Area'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/TextInput" },
                      'Text Input'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/ToggleSwitch" },
                      'Toggle Switch'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'micro', headingLevel: '3' },
                  'Meters'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { spacing: 'small', listType: 'nostyle', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/Meter" },
                      'Meter'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'micro', headingLevel: '3' },
                  'Inline Alerts'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { spacing: 'small', listType: 'nostyle', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/InlineAlert" },
                      'Inline Alert'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'micro', headingLevel: '3' },
                  'Tables'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { spacing: 'small', listType: 'nostyle', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/Table" },
                      'Table'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/TableColumn" },
                      'Table Column'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/TableColumnHeading" },
                      'Table Column Heading'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/TableRow" },
                      'Table Row'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'micro', headingLevel: '3' },
                  'Icons'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { spacing: 'small', listType: 'nostyle', textSize: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { app: true, linkType: 'nav', url: "/elements/Icon" },
                      'Icon'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridColumn,
                { side: 'right', fixedColumn: 'left', columnPadding: '40px' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { spacing: 'large', textSize: 'extra-large' },
                  'Elements'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'medium', textSize: 'large' },
                  'Layout'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'medium', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Box'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/box" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'base' },
                    'Box Padding'
                  ),
                  _react2['default'].createElement(
                    'div',
                    { style: { backgroundColor: 'rgba(255,0,0,0.25)' } },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { spacing: 'base', paddingSize: 'micro', onClick: function () {
                          return console.log('clicked');
                        } },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#fff' } },
                        'Padding Micro'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { style: { backgroundColor: 'rgba(255,0,0,0.25)' } },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { spacing: 'base', paddingSize: 'mini' },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#fff' } },
                        'Padding Mini'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { style: { backgroundColor: 'rgba(255,0,0,0.25)' } },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { spacing: 'base', paddingSize: 'small' },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#fff' } },
                        'Padding Small'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { style: { backgroundColor: 'rgba(255,0,0,0.25)' } },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { spacing: 'base', paddingSize: 'base' },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#fff' } },
                        'Padding Base'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { style: { backgroundColor: 'rgba(255,0,0,0.25)' } },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { spacing: 'base', paddingSize: 'medium' },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#fff' } },
                        'Padding Medium'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { style: { backgroundColor: 'rgba(255,0,0,0.25)' } },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { spacing: 'base', paddingSize: 'large' },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#fff' } },
                        'Padding Large'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { style: { backgroundColor: 'rgba(255,0,0,0.25)' } },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Box,
                      { spacing: 'base', paddingSize: 'extra-large' },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#fff' } },
                        'Padding Extra Large'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'base' },
                    'Box Background Colors'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Box,
                    { backgroundColor: 'base', spacing: 'base' },
                    'Background Color Base'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Box,
                    { backgroundColor: 'secondary', spacing: 'base' },
                    'Background Color Secondary'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Box,
                    { backgroundColor: 'inverse', spacing: 'base' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'inverse' },
                      'Background Color Inverse'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'base' },
                    'Box Borders'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Box,
                    { spacing: 'base', hasBorder: true },
                    'Default Box with Border'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Box,
                    { hasBorder: false, spacing: 'base' },
                    'Default Box with no Border'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'base' },
                    'Box With Images'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Box,
                    { paddingSize: 'base', backgroundImage: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/helpcenter/search_bg._V317609965_.jpg', hasBorder: false },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Paragraph,
                      { textColor: 'inverse' },
                      'Box with Image Background'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'medium', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Divider'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/dividers" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Regular'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'medium' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Thick'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { thick: true, spacing: 'medium' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3, spacing: 'micro' },
                    'Dotted'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { dividerType: 'dotted' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'medium', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Grid'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'large', textAlign: 'center' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2 },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#ccc' } },
                        '2'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2 },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#ccc' } },
                        '2'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2 },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#ccc' } },
                        '2'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2 },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#ccc' } },
                        '2'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2 },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#ccc' } },
                        '2'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, position: 'last' },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#ccc' } },
                        '2'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'large', textAlign: 'center' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 6 },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#ccc' } },
                        '6'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 6, position: 'last' },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#ccc' } },
                        '6'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].FixedGridRow,
                    { fixedColumn: 'left', fixedColumnWidth: 280 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].FixedGridColumn,
                      { side: 'left', fixedColumn: 'left', fixedColumnWidth: 280 },
                      _react2['default'].createElement(
                        'div',
                        { style: { backgroundColor: '#ccc' } },
                        'Fixed left 280px'
                      )
                    ),
                    _react2['default'].createElement(
                      'div',
                      { style: { backgroundColor: '#eee', height: '22px' } },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].FixedGridColumn,
                        { side: 'right', fixedColumn: 'left', columnPadding: '20px' },
                        'Fixed Grid Right Column Padding 20px'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'medium', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Vertical Spacing'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'micro'
                  ),
                  _react2['default'].createElement('div', { className: 'bc-padding-micro', style: { backgroundColor: '#ccc' } }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'mini'
                  ),
                  _react2['default'].createElement('div', { className: 'bc-padding-mini', style: { backgroundColor: '#ccc' } }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'small'
                  ),
                  _react2['default'].createElement('div', { className: 'bc-padding-small', style: { backgroundColor: '#ccc' } }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'base'
                  ),
                  _react2['default'].createElement('div', { className: 'bc-padding-base', style: { backgroundColor: '#ccc' } }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'medium'
                  ),
                  _react2['default'].createElement('div', { className: 'bc-padding-medium', style: { backgroundColor: '#ccc' } }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'large'
                  ),
                  _react2['default'].createElement('div', { className: 'bc-padding-large', style: { backgroundColor: '#ccc' } }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'extra-large'
                  ),
                  _react2['default'].createElement('div', { className: 'bc-padding-extra-large', style: { backgroundColor: '#ccc' } }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'double-large'
                  ),
                  _react2['default'].createElement('div', { className: 'bc-padding-double-large', style: { backgroundColor: '#ccc' } })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'double-large', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Pipes'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/pipe" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  'Copyright© ',
                  _react2['default'].createElement(_AudibleUITags2['default'].Pipe, null),
                  ' Privacy Policy ',
                  _react2['default'].createElement(_AudibleUITags2['default'].Pipe, null),
                  ' Terms & Conditions'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'medium', textSize: 'large' },
                  'Typography'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'medium', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Heading'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/heading" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    null,
                    'Heading Level 1'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic fugit accusantium eius sunt illum enim. In libero quos eligendi, ut, fuga laboriosam commodi laborum, veritatis rerum quod expedita voluptate veniam!'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2 },
                    'Heading Level 2'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic fugit accusantium eius sunt illum enim. In libero quos eligendi, ut, fuga laboriosam commodi laborum, veritatis rerum quod expedita voluptate veniam!'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 3 },
                    'Heading Level 3'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Paragraph,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic fugit accusantium eius sunt illum enim. In libero quos eligendi, ut, fuga laboriosam commodi laborum, veritatis rerum quod expedita voluptate veniam!'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'medium', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'LetterSpacing (Horizontal Spacing)'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/letterSpace" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  'micro',
                  _react2['default'].createElement(
                    'span',
                    { style: { backgroundColor: '#ccc' } },
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' })
                  ),
                  'mini',
                  _react2['default'].createElement(
                    'span',
                    { style: { backgroundColor: '#ccc' } },
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'mini' })
                  ),
                  'small',
                  _react2['default'].createElement(
                    'span',
                    { style: { backgroundColor: '#ccc' } },
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'small' })
                  ),
                  'base',
                  _react2['default'].createElement(
                    'span',
                    { style: { backgroundColor: '#ccc' } },
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'base' })
                  ),
                  'medium',
                  _react2['default'].createElement(
                    'span',
                    { style: { backgroundColor: '#ccc' } },
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'medium' })
                  ),
                  'large',
                  _react2['default'].createElement(
                    'span',
                    { style: { backgroundColor: '#ccc' } },
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'large' })
                  ),
                  'extra-large',
                  _react2['default'].createElement(
                    'span',
                    { style: { backgroundColor: '#ccc' } },
                    _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'extra-large' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'double-large', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Text'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/text" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textSize: 'extra-large' },
                      'extra-large'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textSize: 'large' },
                      'large'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textSize: 'medium' },
                      'medium'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textSize: 'base' },
                      'base'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textSize: 'small' },
                      'small'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textSize: 'mini' },
                      'mini'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: true },
                      'Text Bold'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textCapitalize: true },
                      'Text Capitalize'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textEmphasis: true },
                      'Text Emphasis'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textQuote: true },
                      'Text Quote'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textStrikethrough: true },
                      'Text Strikethrough'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textNormal: true },
                      'Text Normal'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'base' },
                      'text color base'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'secondary' },
                      'text color secondary'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'tertiary' },
                      'text color tertiary'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'inactive' },
                      'text color inactive'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'primary' },
                      'text color primary'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'active' },
                      'text color active'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'link' },
                      'text color link'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'medium', textSize: 'large' },
                  'Lists'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'double-large', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'List'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'base' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, spacing: 'micro' },
                        'Unordered'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].List,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              'List Item'
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              'List Item'
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              'List Item'
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              'List Item'
                            )
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, spacing: 'micro' },
                        'Ordered'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'ordered' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].List,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              'List Item'
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              'List Item'
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              'List Item'
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              'List Item'
                            )
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, spacing: 'micro' },
                        'Nostyle'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'nostyle' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item',
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].List,
                            null,
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              'List Item'
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              'List Item'
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              'List Item'
                            ),
                            _react2['default'].createElement(
                              _AudibleUITags2['default'].ListItem,
                              null,
                              'List Item'
                            )
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 12, position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, spacing: 'micro' },
                        'Direction: Horizontal'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listDirection: 'horizontal' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          null,
                          'List Item'
                        )
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'medium', textSize: 'large' },
                  'Links'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'double-large', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Link'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/links" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { listType: 'nostyle' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          null,
                          'Standard Link'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { linkType: 'nav' },
                          'Nav Link'
                        )
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'medium', textSize: 'large' },
                  'Buttons'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'double-large', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Button'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/buttons" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, textColor: 'tertiary', spacing: 'base' },
                    'Block Level Button (Default)'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 6 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, spacing: 'micro' },
                        'Standard Button'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { spacing: 'micro', buttonType: 'primary' },
                        'Primary'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { spacing: 'micro' },
                        'Default'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, spacing: 'micro' },
                        'Small Button'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { spacing: 'micro', buttonType: 'primary', size: 'small' },
                        'Primary'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { spacing: 'micro', size: 'small' },
                        'Default'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 6, position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Box,
                        { backgroundColor: 'inverse', paddingSize: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { headingLevel: 3, textColor: 'inverse', spacing: 'micro' },
                          'Standard Button'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Button,
                          { spacing: 'micro', buttonType: 'primary' },
                          'Primary'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Button,
                          { spacing: 'micro', inverse: true },
                          'Default'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { headingLevel: 3, textColor: 'inverse', spacing: 'micro' },
                          'Small Button'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Button,
                          { spacing: 'micro', buttonType: 'primary', size: 'small' },
                          'Primary'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Button,
                          { spacing: 'micro', size: 'small', inverse: true },
                          'Default'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { headingLevel: 2, textColor: 'tertiary', spacing: 'base' },
                    'Inline Button'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 6 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, spacing: 'micro' },
                        'Standard Button'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { inline: true, spacing: 'micro', buttonType: 'primary' },
                        'Primary'
                      ),
                      ' ',
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { inline: true, spacing: 'micro' },
                        'Default'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 3, spacing: 'micro' },
                        'Small Button'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { inline: true, spacing: 'micro', buttonType: 'primary', size: 'small' },
                        'Primary'
                      ),
                      ' ',
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Button,
                        { inline: true, spacing: 'micro', size: 'small' },
                        'Default'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 6, position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Box,
                        { backgroundImage: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/banner/audible_banner._V288474577_.jpg', paddingSize: 'base' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { headingLevel: 3, textColor: 'inverse', spacing: 'micro' },
                          'Standard Button'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Button,
                          { inline: true, spacing: 'micro', buttonType: 'primary' },
                          'Primary'
                        ),
                        ' ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Button,
                          { inline: true, spacing: 'micro', inverse: true },
                          'Default'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Heading,
                          { headingLevel: 3, textColor: 'inverse', spacing: 'micro' },
                          'Small Button'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Button,
                          { inline: true, spacing: 'micro', buttonType: 'primary', size: 'small' },
                          'Primary'
                        ),
                        ' ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Button,
                          { inline: true, spacing: 'micro', size: 'small', inverse: true },
                          'Default'
                        )
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'medium', textSize: 'large' },
                  'Images'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'double-large', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Image'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/image" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { imageWidth: '200px', source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/brickcity/1.0/logos/audible_logo._V314169480_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'medium', textSize: 'large' },
                  'Forms'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'medium', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Checkboxes'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/checkbox" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'mini', label: 'Checkbox Label' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'mini', checked: true, label: 'Checkbox Label' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'mini', disabled: true, label: 'Checkbox Label' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(_AudibleUITags2['default'].Checkbox, { spacing: 'mini', disabled: true, checked: true, label: 'Checkbox Label' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'medium', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Dropdowns'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { spacing: 'micro', headingLevel: '3' },
                    'Default'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Dropdown,
                    { spacing: 'base' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 1'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 2'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 3'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 4'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { spacing: 'micro', headingLevel: '3' },
                    'Inline'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Dropdown,
                    { inline: true },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 1'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 2'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 3'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].DropdownOption,
                      null,
                      'Option 4'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'medium', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Radio Buttons'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/radioButton" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { spacing: 'mini', label: 'Radio Button Label' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { spacing: 'mini', checked: true, label: 'Radio Button Label' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { spacing: 'mini', disabled: true, label: 'Radio Button Label' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(_AudibleUITags2['default'].RadioButton, { spacing: 'mini', disabled: true, checked: true, label: 'Radio Button Label' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'medium', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Text Area'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/textArea" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextArea, null)
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'medium', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Text Input'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/textInput" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { spacing: 'micro', headingLevel: '3' },
                    'Default'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { spacing: 'base', placeholder: 'placeholder text' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { spacing: 'micro', headingLevel: '3' },
                    'Inline'
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].TextInput, { placeholder: 'placeholder text', inline: true })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'double-large', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Toggle Switch'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/toggleSwitch" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ToggleSwitch,
                      null,
                      'This is a toggle switch'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ToggleSwitch,
                      { checked: true },
                      'This is a toggle switch'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'medium', textSize: 'large' },
                  'Meters'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'double-large', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Meter'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/Meter" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(_AudibleUITags2['default'].Meter, { percentage: 40 })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'medium', textSize: 'large' },
                  'Inline Alerts'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'double-large', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Inline Alerts'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/inlineAlert" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].InlineAlert,
                    { spacing: 'mini' },
                    'This is an inline error alert. ',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'Click Here'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].InlineAlert,
                    { alertType: 'info', spacing: 'mini' },
                    'This is an inline info alert. ',
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      null,
                      'Click Here'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'medium', textSize: 'large' },
                  'Tables'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'double-large', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Table'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Table,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumnHeading,
                        null,
                        'Eligible Products and Services'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumnHeading,
                        null,
                        'Value'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        null,
                        'Audible Free Trial Digital Membership'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        null,
                        '$5.00'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        null,
                        'Audible Free Trial Digital Membership'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        null,
                        '$5.00'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].TableRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        null,
                        'Audible Free Trial Digital Membership'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].TableColumn,
                        null,
                        '$5.00'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 2, spacing: 'medium', textSize: 'large' },
                  'Icons'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { spacing: 'double-large', hasBorder: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Heading,
                        { headingLevel: 2, spacing: 'base' },
                        'Icons'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last', textAlign: 'right' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { app: true, textSize: 'small', url: "/elements/icon" },
                        'View Tag Info'
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'add' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'add'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'add-circle' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'add-circle'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'amazon' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'amazon'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'android' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'android'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'apple' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'apple'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center', position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'archive' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'archive'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'calendar' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'calendar'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'caret-down' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'caret-down'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'caret-left' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'caret-left'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'caret-right' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'caret-right'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'caret-up' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'caret-up'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center', position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'cart' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'cart'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chat' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'chat'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'check' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'check'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-down' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'chevron-down'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'chevron-left'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-right' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'chevron-right'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center', position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-up' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'chevron-up'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'clock' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'clock'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'close' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'close'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'download' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'download'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'edit' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'edit'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'envelope' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'envelope'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center', position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'exclamation-triangle' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'exclamation-triangle'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'facebook' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'facebook'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'facebook-square' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'facebook-square'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'file' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'file'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'filter' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'filter'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center', position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'gift' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'gift'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'googleplus' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'googleplus'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'grid' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'grid'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'hamburger' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'hamburger'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'info-circle' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'info-circle'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'list' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'list'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'location' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'location'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center', position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'microphone' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'microphone'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'move-to-bottom' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'move-to-bottom'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'move-to-top' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'move-to-top'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'overflow-vertical' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'overflow-vertical'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'pause' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'pause'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'phone' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'phone'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center', position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'pin' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'pin'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'pinterest' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'pinterest'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'play' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'play'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'podcast' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'podcast'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'related' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'related'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'restore' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'restore'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center', position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'search' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'search'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'series' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'series'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'skip' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'skip'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'star' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'star'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'star-half-left' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'star-half-left'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'star-half-right' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'star-half-right'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center', position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'star-hollow' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'star-hollow'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'trash' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'trash'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'twitter' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'twitter'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'whispersync' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'whispersync'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 2, textAlign: 'center' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'windows' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'windows'
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_Footer2['default'], null)
      );
    }
  }]);

  return elements;
})(_react2['default'].Component);

exports['default'] = elements;
module.exports = exports['default'];
/*
<BC.Heading headingLevel={2} spacing="medium" textSize="large">Functional Links</BC.Heading>
<BC.Box spacing="double-large" hasBorder={true}>
 <BC.GridRow>
   <BC.GridColumn gridUnits={8}>
     <BC.Heading headingLevel={2} spacing="base">Link</BC.Heading>
   </BC.GridColumn>
   <BC.GridColumn gridUnits={4} position="last" textAlign="right">
     <BC.Link app={true} textSize="small" url={"/elements/links"}>View Tag Info</BC.Link>
   </BC.GridColumn>
 </BC.GridRow>
  <BC.Divider spacing="base" />
  <BC.GridRow spacing="micro">
   <BC.List listType="nostyle">
     <BC.ListItem>
       <BC.FunctionalLink iconType="android">Standard Link</BC.FunctionalLink>
     </BC.ListItem>
   </BC.List>
 </BC.GridRow>
</BC.Box>
*/