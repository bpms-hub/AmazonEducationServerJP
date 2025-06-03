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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _AudibleUITags = require('AudibleUITags');

var _AudibleUITags2 = _interopRequireDefault(_AudibleUITags);

var MobilePageTitle = (function (_React$Component) {
  _inherits(MobilePageTitle, _React$Component);

  function MobilePageTitle() {
    _classCallCheck(this, MobilePageTitle);

    _get(Object.getPrototypeOf(MobilePageTitle.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MobilePageTitle, [{
    key: 'render',
    value: function render() {
      var staticClasses = ['bc-link-mobile'];

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _AudibleUITags2['default'].Link,
          { linkType: 'nav', app: this.props.url ? true : null, url: this.props.url ? this.props.url : null },
          _react2['default'].createElement(
            'div',
            { className: 'bc-clearfix' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { background: '#F9F9F9', paddingSize: 'micro' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].FixedGridRow,
                { fixedColumn: 'left', spacing: 'micro', spacingTop: 'mini', fixedColumnWidth: 0 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridColumn,
                  { fixedColumn: 'left', side: 'left', fixedColumnWidth: 0 },
                  _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'chevron-left', textColor: 'base', verticalAlign: 'bottom' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].FixedGridColumn,
                  { fixedColumn: 'left', side: 'right', columnPadding: '0px' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Heading,
                    { textSize: 'large', textAlign: 'center', headingLevel: 2 },
                    this.props.children
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return MobilePageTitle;
})(_react2['default'].Component);

MobilePageTitle.PropTypes = {
  id: _react.PropTypes.string,
  cssClass: _react.PropTypes.string,
  spacing: _react.PropTypes.string,
  url: _react.PropTypes.node,
  first: _react.PropTypes.bool
};

exports['default'] = MobilePageTitle;
module.exports = exports['default'];
/*  <BC.Divider spacing={this.props.spacing} /> */