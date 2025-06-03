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

var WToggleAndroid = (function (_React$Component) {
  _inherits(WToggleAndroid, _React$Component);

  function WToggleAndroid() {
    _classCallCheck(this, WToggleAndroid);

    _get(Object.getPrototypeOf(WToggleAndroid.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(WToggleAndroid, [{
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
              'Toggle'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textSize: 'base', textColor: 'base' },
              'Allow user to switch back and forth between an item or attribute’s two possible states, such as on/off or selected/unselected. Amazon English uses both toggle buttons and toggle switches, depending on the scenario.'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'none' },
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
            _react2['default'].createElement('div', { id: 'design' }),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { background: '#fff', hasBorder: false, paddingSize: 'none' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
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
                      _AudibleUITags2['default'].Text,
                      null,
                      'Toggle Switches'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { listType: 'unordered', spacing: 'medium' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        ' Label is horizontally aligned with the switch'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        ' The entire row acts is the tap target'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        ' Animated switch slides on tap'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      'Toggle buttons'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { listType: 'unordered', spacing: 'medium' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        '  Button width depends on the length    of the labels'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'micro' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: '     http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/toggle/android/dsn_04._V299486961_.jpg' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacingTop: 'none' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'edu_tertiary', textSize: 'base', hasBold: true },
                      'This switch in the Reader options toggles TOEIC word highlighting on and off.'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'micro' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/toggle/android/dsn_03._V299486961_.jpg' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'edu_tertiary', textSize: 'base', hasBold: true },
                    'Toggle buttons in Refine feature allow users to limit results to content lasting a certain duration'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(_AudibleUITags2['default'].GridColumn, { gridUnits: 4 }),
                  _react2['default'].createElement(_AudibleUITags2['default'].GridColumn, { gridUnits: 4 })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement('div', { id: 'interaction' }),
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
                        'Interaction / Motion'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Buttons:'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'unordered', spacing: 'micro' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          'Entire button is touch target'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Switches:'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'unordered', spacing: 'medium' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          'Entire row acts as a tap target'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          'Switch is animated, slides on tap'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 8, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/toggle/android/in_01._V300999104_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'edu_tertiary', textSize: 'base' },
                      'Toggle switch as a full-width control, enabling or disabling the highlighting of TOEIC words.'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement('div', { id: 'specs' }),
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
                        'Specs'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 8, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/toggle/android/spc_01._V285375482_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 6 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'mini' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].List,
                          { listType: 'nostyle' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base', textBold: true },
                            'Toggle switch active'
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                            'Switch: #f7991c  50%'
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                            'Knob: #f7991c'
                          )
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 6, position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'mini' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].List,
                          { listType: 'nostyle' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base', textBold: true },
                            'Toggle switch inactive'
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                            'Switch: #e0dbcd  50%'
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                            'Knob: #cbc3b5'
                          )
                        )
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 8, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/toggle/android/spc_02._V285375482_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 6 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'mini' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].List,
                          { listType: 'nostyle' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro', textColor: 'edu_tertiary', textBold: true, textSize: 'base' },
                            'Toggle buttons'
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                            'Active: #f7991c fill color'
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                            'Inactive: 1dp #dddddd stroke, #ffffff fill color'
                          )
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 6, position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'mini' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].List,
                          { listType: 'nostyle' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro', textColor: 'edu_tertiary', textBold: true, textSize: 'base' },
                            'Buttons Text'
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                            'English Text: 14sp Roboto Medium, #ffffff (active), #999999 (inactive)'
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                            'Translation Text: 12sp Noto Sans Regular, #ffffff (active), #999999 (inactive)'
                          )
                        )
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

  return WToggleAndroid;
})(_react2['default'].Component);

exports['default'] = WToggleAndroid;
module.exports = exports['default'];