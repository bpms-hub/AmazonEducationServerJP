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

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var AEFooter = (function (_React$Component) {
  _inherits(AEFooter, _React$Component);

  function AEFooter() {
    _classCallCheck(this, AEFooter);

    _get(Object.getPrototypeOf(AEFooter.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AEFooter, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _AudibleUITags2['default'].Section,
        { padding: 'medium', paddingTop: 'medium', backgroundColor: 'secondary' },
        _react2['default'].createElement(
          'footer',
          null,
          _react2['default'].createElement(
            'div',
            { className: 'bc-edu-footer' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'medium', textAlign: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 9, gridPush: 3 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'menu', cssClass: 'footer-list' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base', linkType: 'nav', url: 'https://w.amazon.com/index.php/Audible/BrickCity' },
                      'Audible.com'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'menu', cssClass: 'footer-list' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base', linkType: 'nav', app: true, url: "/changelog" },
                      'Design'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'menu', cssClass: 'footer-list' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base', linkType: 'nav', app: true, url: "/prototypes" },
                      'Develop'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'menu', cssClass: 'footer-list' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base', linkType: 'nav', url: 'mailto:audible-brickcity@amazon.com' },
                      'Api Reference'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'menu', cssClass: 'footer-list' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { textColor: 'base', linkType: 'nav', url: 'https://sage.amazon.com/questions/ask?tags=brickcity' },
                      'Career'
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { textAlign: 'left' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 6, gridPush: 3 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  null,
                  ' © Copyright 1997-2015  Audible Inc.'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Pipe, null),
                ' ',
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textColor: 'base', url: '' },
                  '| Conditions of Use '
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Pipe, null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textColor: 'base', url: '' },
                  '| Privacy Policy'
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].GridColumn, { gridUnits: 3 }),
              _react2['default'].createElement(_AudibleUITags2['default'].GridColumn, { gridUnits: 2 })
            )
          )
        )
      );
    }
  }]);

  return AEFooter;
})(_react2['default'].Component);

exports['default'] = AEFooter;
module.exports = exports['default'];