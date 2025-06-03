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

var WButtonsIOS = (function (_React$Component) {
  _inherits(WButtonsIOS, _React$Component);

  function WButtonsIOS() {
    _classCallCheck(this, WButtonsIOS);

    _get(Object.getPrototypeOf(WButtonsIOS.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(WButtonsIOS, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'bc-container' },
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { spacing: 'none', spacingTop: 'none' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { background: '#fff', hasBorder: false, paddingSize: 'small' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'large' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes" },
                      'IOS overview'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes" },
                      'Usage'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes" },
                      'Design'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes" },
                      'Interaciton & Motion'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes" },
                      'Specs'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes" },
                      'Revisions'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'primary' },
                  'Overview'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'updated this month and feedback from users was gathered. Lorem ipsum dolor sit amet, consectetur adipiscing. Sed en nibh sed purus dapibus cursus ne Updates made to call to action button.'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'primary' },
                  'Usage'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'updated this month and feedback from users was gathered. Lorem ipsum dolor sit amet, consectetur adipiscing. Sed en nibh sed purus dapibus cursus ne Updates made to call to action button.'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'primary' },
                  'Design'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'updated this month and feedback from users was gathered. Lorem ipsum dolor sit amet, consectetur adipiscing. Sed en nibh sed purus dapibus cursus ne Updates made to call to action button.'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'primary' },
                  'Interaction & Motion'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'updated this month and feedback from users was gathered. Lorem ipsum dolor sit amet, consectetur adipiscing. Sed en nibh sed purus dapibus cursus ne Updates made to call to action button.'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'primary' },
                  'Specs'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'updated this month and feedback from users was gathered. Lorem ipsum dolor sit amet, consectetur adipiscing. Sed en nibh sed purus dapibus cursus ne Updates made to call to action button.'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' })
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'primary' },
                  'Revisions'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Paragraph,
                  null,
                  'updated this month and feedback from users was gathered. Lorem ipsum dolor sit amet, consectetur adipiscing. Sed en nibh sed purus dapibus cursus ne Updates made to call to action button.'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'base' })
              )
            )
          )
        )
      );
    }
  }]);

  return WButtonsIOS;
})(_react2['default'].Component);

exports['default'] = WButtonsIOS;
module.exports = exports['default'];