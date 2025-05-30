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

var _edu = require('../../../edu');

var _edu2 = _interopRequireDefault(_edu);

var WTabsAndroid = (function (_React$Component) {
  _inherits(WTabsAndroid, _React$Component);

  function WTabsAndroid() {
    _classCallCheck(this, WTabsAndroid);

    _get(Object.getPrototypeOf(WTabsAndroid.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(WTabsAndroid, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: '' },
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { spacing: 'none', spacingTop: 'none' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'mini' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textSize: 'large', textColor: 'base' },
              'Tabs'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textSize: 'base', textColor: 'base' },
              'Tabs are used as a means of navigation within a section of the app.'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].List,
              { listType: 'nostyle' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textColor: 'edu_link', app: false, url: '#design' },
                  'Design'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textColor: 'edu_link', linkType: 'nav', app: false, url: '#interaction' },
                  'Interaction / Motion'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'none' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textColor: 'edu_link', linkType: 'nav', app: false, url: '#specs' },
                  'Specs'
                )
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { background: '#fff', hasBorder: false, paddingSize: 'none' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement('div', { id: 'design' }),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'mini', spacingTop: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'base', textBold: true },
                      'Design'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { listType: 'unordered', spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        'Keep tab labels short!'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        'Avoid nested tabs.'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        ' Selected tab has orange label and    an orange underline.'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        '   Tabs have an on state and off state.'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        '  Only one tab can be active at a time.'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/tabs/android/in_01._V285971524_.jpg' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, gridPush: 4, spacing: 'base' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'edu_tertiary', textSize: 'base' },
                      'The home page in Amazon English has two tabs, the Categories list and the user’s downloaded titles.'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement('div', { id: 'interaction' }),
                  _react2['default'].createElement('br', null),
                  _react2['default'].createElement('br', null),
                  _react2['default'].createElement('br', null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'base', textBold: true },
                      'Interaction'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { listType: 'unordered', spacing: 'medium' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        'Any inactive tab is a tap target.'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'small' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/tabs/android/in_02._V298999638_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'edu_tertiary', textSize: 'base' },
                      'In transition: Tapping on “Categories” causes the orange line to slide left, as content slides in from the right.'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'small' },
                  _react2['default'].createElement('div', { id: 'specs' }),
                  _react2['default'].createElement('br', null),
                  _react2['default'].createElement('br', null),
                  _react2['default'].createElement('br', null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'base', textBold: true },
                      'Specs'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 8, position: 'last' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/tabs/android/spc_01._V285971524_.jpg' })
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'none' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, gridPush: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary', textBold: true, textSize: 'base' },
                        'Tabs specs'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'edu_tertiary', textSize: 'base' },
                        'Background: #ffffff'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'edu_tertiary', textSize: 'base' },
                        'Tappable area: 180dp (if two tabs) by 48dp'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last', spacing: 'base' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary', textSize: 'base', textBold: true },
                        'Text'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'edu_tertiary', textSize: 'base' },
                        'English Text: 14sp Roboto Medium, #333333'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'edu_tertiary', textSize: 'base' },
                        'Translation Text: 12sp Noto Sans Regular, #333333'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'edu_tertiary', textSize: 'base' },
                        'Selected State #f7991c'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return WTabsAndroid;
})(_react2['default'].Component);

exports['default'] = WTabsAndroid;
module.exports = exports['default'];