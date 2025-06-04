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

var _layout_eduAEHeaderJs = require("../layout_edu/AEHeader.js");

var _layout_eduAEHeaderJs2 = _interopRequireDefault(_layout_eduAEHeaderJs);

var _layout_eduAESidebarJs = require("../layout_edu/AESidebar.js");

var _layout_eduAESidebarJs2 = _interopRequireDefault(_layout_eduAESidebarJs);

var _layout_eduAEFooterJs = require("../layout_edu/AEFooter.js");

var _layout_eduAEFooterJs2 = _interopRequireDefault(_layout_eduAEFooterJs);

var AEOverview = (function (_React$Component) {
  _inherits(AEOverview, _React$Component);

  function AEOverview() {
    _classCallCheck(this, AEOverview);

    _get(Object.getPrototypeOf(AEOverview.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AEOverview, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_layout_eduAEHeaderJs2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { spacingTop: 'medium', cssClass: 'overview-section-arrow' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { background: '#ed5907', heightCss: '478' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6, gridPush: 2, spacingTop: 'mini' },
              _react2['default'].createElement(_AudibleUITags2['default'].Image, { verticalAlign: 'bottom', source: 'https://images-na.ssl-images-amazon.com/images/G/01/education/branding/edu_cover_devices._V288526379_.png' })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { spacingTop: 'base', gridUnits: 6, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacingTop: 'none' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { spacing: 'none', textSize: 'extra-large', textColor: 'inverse', textBold: false },
                  'Welcome to Audible EDU'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  { textColor: 'inverse', textSize: 'large' },
                  'Build version 1.0'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacingTop: 'extra-large' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 4, gridPush: 2 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { background: 'primary', hasBorder: true, paddingSize: 'base', spacing: 'base' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8, spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textSize: 'medium', textColor: 'secondary' },
                    'Amazon English Updates'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4, textAlign: 'right', position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textColor: 'primary', linkType: 'nav', url: "/education/waffle/updates" },
                    'View All Updates'
                  )
                )
              ),
              _react2['default'].createElement('hr', null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacingTop: 'base', spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8, spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textSize: 'base', textColor: 'base' },
                    'Design Review'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4, textAlign: 'right', position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textColor: 'secondary', textSize: 'small', linkType: 'nav' },
                    'v0.9.3 Jan 22 2016'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'secondary', textSize: 'small' },
                  'Comprehensive review of all components and pages. Image updates and copy changes across the Pattern Library. Final versions designed, not yet implemented.'
                )
              ),
              _react2['default'].createElement('hr', null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacingTop: 'base', spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8, spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textSize: 'base', textColor: 'base' },
                    'General Updates'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4, textAlign: 'right', position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textColor: 'secondary', textSize: 'small', linkType: 'nav' },
                    'v0.9.2.2 Jan 13 2016'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'secondary', textSize: 'small' },
                  'Styling updates including: Font sizes; Header styles; Footer color and alignment ',
                  _react2['default'].createElement('br', null),
                  'LH navigation scrolling enabled ',
                  _react2['default'].createElement('br', null),
                  'Image updates for Buttons, Checkboxes ',
                  _react2['default'].createElement('br', null),
                  'UI bug fixes'
                )
              ),
              _react2['default'].createElement('hr', null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacingTop: 'base', spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8, spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textSize: 'base', textColor: 'base' },
                    'Styling Updates'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4, textAlign: 'right', position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textColor: 'secondary', textSize: 'small', linkType: 'nav' },
                    'v0.9.2.1 Jan 11 2016'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'secondary', textSize: 'small' },
                  'Site-wide styles updated including: Dual/Single Language, Do & Don’t',
                  _react2['default'].createElement('br', null),
                  'UI bug fixes'
                )
              ),
              _react2['default'].createElement('hr', null)
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 4, gridPull: 2, position: 'last' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { background: 'primary', hasBorder: true, paddingSize: 'base', spacing: 'large' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8, spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textSize: 'medium', textColor: 'secondary' },
                    'Project Cupcake Updates'
                  )
                )
              ),
              _react2['default'].createElement('hr', null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacingTop: 'base', spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8, spacing: 'micro' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textSize: 'base', textColor: 'base' },
                    'Coming soon...'
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

  return AEOverview;
})(_react2['default'].Component);

exports['default'] = AEOverview;
module.exports = exports['default'];