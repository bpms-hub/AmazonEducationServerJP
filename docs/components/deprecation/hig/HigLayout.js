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

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var HigLayout = (function (_React$Component) {
  _inherits(HigLayout, _React$Component);

  function HigLayout() {
    _classCallCheck(this, HigLayout);

    _get(Object.getPrototypeOf(HigLayout.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(HigLayout, [{
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
                  _AudibleUITags2['default'].Accordion,
                  { activeRow: this.props.activeRow, titleSize: 'base', titleBold: true },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].AccordionRow,
                    { title: 'Tutorials' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { spacing: 'mini', listType: 'nostyle', textSize: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { app: true, linkType: 'nav', url: "/tutorials/redline" },
                          'Redlining'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { app: true, linkType: 'nav', url: "/tutorials/grid" },
                          'Using the Grid'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].AccordionRow,
                    { title: 'Color Usage' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { spacing: 'mini', listType: 'nostyle', textSize: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { linkType: 'nav', url: "/hig/colors" },
                          'Colors'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].AccordionRow,
                    { title: 'Notification Patterns' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { spacing: 'mini', listType: 'nostyle', textSize: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { linkType: 'nav', url: "/hig/alerts" },
                          'Alerts'
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
        _react2['default'].createElement(_Footer2['default'], null)
      );
    }
  }]);

  return HigLayout;
})(_react2['default'].Component);

HigLayout.PropTypes = {
  activeRow: _react.PropTypes.number
};

exports['default'] = HigLayout;
module.exports = exports['default'];
/*
<BC.AccordionRow title="Actions and Navigation">
 <BC.List spacing="mini" listType="nostyle" textSize="base">
   <BC.ListItem spacing="micro">Coming Soon</BC.ListItem>
 </BC.List>
</BC.AccordionRow>
<BC.AccordionRow title="Prompt Usage">
 <BC.List spacing="mini" listType="nostyle" textSize="base">
   <BC.ListItem spacing="micro">Coming Soon</BC.ListItem>
 </BC.List>
</BC.AccordionRow>
<BC.AccordionRow title="Product and Asins">
 <BC.List spacing="mini" listType="nostyle" textSize="base">
   <BC.ListItem spacing="micro">Coming Soon</BC.ListItem>
 </BC.List>
</BC.AccordionRow>
<BC.AccordionRow title="Sample & Audio Patterns">
 <BC.List spacing="mini" listType="nostyle" textSize="base">
   <BC.ListItem spacing="micro">Coming Soon</BC.ListItem>
 </BC.List>
</BC.AccordionRow>
<BC.AccordionRow title="Accessibility">
 <BC.List spacing="mini" listType="nostyle" textSize="base">
   <BC.ListItem spacing="micro">Coming Soon</BC.ListItem>
 </BC.List>
</BC.AccordionRow> */