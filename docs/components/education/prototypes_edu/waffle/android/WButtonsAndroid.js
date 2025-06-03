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

var WButtonsAndroid = (function (_React$Component) {
  _inherits(WButtonsAndroid, _React$Component);

  function WButtonsAndroid() {
    _classCallCheck(this, WButtonsAndroid);

    _get(Object.getPrototypeOf(WButtonsAndroid.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(WButtonsAndroid, [{
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
              'Buttons'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textSize: 'base', textColor: 'base' },
              'A button clearly communicates what action will occur when the user touches it. It consists of text, an image, or both. The Tap target is the entire button. There are four main button styles used in Amazon English.'
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
                  { textColor: 'edu_link', linkType: 'nav', app: false, url: '#overview' },
                  'Overview'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textColor: 'edu_link', app: false, url: '#primary-button' },
                  'Primary Button'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textColor: 'edu_link', linkType: 'nav', app: false, url: '#small-button' },
                  'Small Button'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                { spacing: 'none' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textColor: 'edu_link', linkType: 'nav', app: false, url: '#text-button' },
                  'Text Button'
                )
              )
            )
          ),
          _react2['default'].createElement('div', { id: 'overview' }),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { background: '#fff', hasBorder: false, paddingSize: 'none' },
            _react2['default'].createElement('div', { id: 'overview' }),
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
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base', textBold: true },
                        'Primary Button'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'This is a primary button to invoke an action. It should be the main call to action on the screen.'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 8, position: 'last' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/ovr_01._V286595274_.jpg' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/ovr_01._V286595274_.jpg' }),
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/ovr_01._V286595274_.jpg' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base', textBold: true },
                        'Text Button'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'These buttons consist of text only. They are used on transactional dialogues.'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 8, position: 'last' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/ovr_04._V286595274_.jpg' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base', textBold: true },
                        'Small Button'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'This button is much smaller and is used in situations where the action doesn’t need to command hierarchy on the screen.'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 8, position: 'last' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/ovr_03._V286595274_.jpg' })
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                null,
                _react2['default'].createElement(_AudibleUITags2['default'].GridColumn, { gridUnits: 8 })
              ),
              _react2['default'].createElement('div', { id: 'primary-button' }),
              _react2['default'].createElement('br', null),
              _react2['default'].createElement('br', null),
              _react2['default'].createElement('br', null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'edu_primary', textSize: 'medium', textBold: true },
                  'Primary Button -'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'base', textSize: 'medium', textBold: false },
                  ' ',
                  _react2['default'].createElement(
                    'i',
                    null,
                    'Dual Language ( ',
                    _react2['default'].createElement(
                      'i',
                      null,
                      '3 states'
                    ),
                    ')'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'mini' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'base', textBold: true },
                  'Overview'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textBold: false },
                  'This is a primary button to invoke an action The main call to action on a page, the Primary Button may be displayed alone or in conjunction with other (non-primary) buttons.'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'base' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'base', textBold: true },
                      'Design'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listType: 'unordered', spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      'Appears to the right of any secondary button(s) or above if space will not allow.'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      'Button labels are actions, often starting with a verb.'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      'A Primary Button with Icon can be used for a particularly important call to action.'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_01._V300739957_.jpg' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'tertiary', textSize: 'base' },
                    'Sign-in is the main call to action when the app launches.'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'small' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_02._V300739957_.jpg' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'tertiary', textSize: 'base' },
                    'A primary button with icon has even more priority. This is appropriate for Listen & Read as the main purpose of the app.'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'base' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Text, { textColor: '#333333', textBold: true })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, gridPush: 4, spacing: 'base' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: '  http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/do._V301935058_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'tertiary', textSize: 'base' },
                      'Use action-oriented button text that clearly communicates its associated action and completes the sentence, “As a user, I want to ____.”'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_03._V299213393_.jpg' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_03_02._V299213393_.jpg' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, gridPush: 4, spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'mini', spacingTop: 'mini' },
                        _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: '  http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/do._V301935058_.jpg' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'tertiary', textSize: 'base' },
                        'Use action-oriented button text that clearly communicates its associated action and completes the sentence, “As a user, I want to ____.”'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, position: 'last' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'mini', spacingTop: 'mini' },
                        _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/dont._V301935058_.jpg' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'tertiary', textSize: 'base' },
                        'Do not use two primary buttons on the same screen. Pick the most important or most common action for the primary button.'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base', textBold: true },
                        'Specs'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/spc_01._V299216823_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary', textSize: 'base', textBold: true },
                        'Button states'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'nostyle' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Pressed state: 65% #f7991c'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Disabled state: 40% #f7991c'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/spc_02._V299216823_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary', textSize: 'base', textBold: true },
                        'Specs'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'nostyle' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'English Text: 14sp Roboto Medium, #ffffff'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Translation Text: 12sp Noto Sans Regular, #ffffff'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Button Height: 48dp'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Button text left and right minimum padding: 16dp'
                        )
                      )
                    )
                  )
                ),
                _react2['default'].createElement('div', { id: 'text-button' }),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'edu_primary', textSize: 'medium', textBold: true },
                    'Text Button'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'base', textSize: 'medium', textBold: false },
                    '- Dual Language (',
                    _react2['default'].createElement(
                      'i',
                      null,
                      'borderless'
                    ),
                    ')'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'base', textBold: true },
                    'Overview'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textBold: false },
                    'Text buttons are lightweight, consisting of text only. They are more subtle and have less prominence than the other button styles.'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base', textBold: true },
                        'Screen Samples'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { listType: 'unordered', spacing: 'medium' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        'Used on transactional dialogues. These are lightweight buttons that consist of text only.'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        'May be useful for infrequently used actions, or when another button style would be too prominent.'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: '       http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_06._V300739957_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'tertiary', textSize: 'base' },
                        'Text buttons in a sign out dialogue.'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: '      http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_07._V300739957_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'tertiary', textSize: 'base' },
                        'Undo text button: undoing a deletion is important when needed, but is unlikely to be used frequently.'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base', textBold: true },
                        'Design Specs'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: '      http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/spc_05._V286595274_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary', textSize: 'base', textBold: true },
                        'Button states'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'nostyle' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          '2. Pressed(bg): 65% #dddddd'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          '3. Disabled text(bg): 40% #dddddd'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: '        http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/spc_06._V286595274_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary', textSize: 'base', textBold: true },
                        'Specs'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'nostyle' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'English Text: 14sp Roboto Medium, #f7991c'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Translation Text: 12sp Noto Sans Regular, #f7991c'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Text Button Height: 48dp'
                        )
                      )
                    )
                  )
                ),
                _react2['default'].createElement('div', { id: 'small-button' }),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'base', textSize: 'medium', textBold: true },
                    'Small Button'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'base', textSize: 'medium', textBold: false },
                    '-',
                    _react2['default'].createElement(
                      'i',
                      null,
                      'Single Language'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'base', textBold: true },
                    'Overview'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textBold: false },
                    'Small buttons are used when space is limited, and when the action(s) associated don’t need to be given visual priority on the screen.'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base', textBold: true },
                        'Design'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { listType: 'unordered', spacing: 'medium' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        'Single language due to space constraints'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        'Don’t place it too close to other controls - the touch target is taller than the height of the button itself.'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_04._V300739957_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini', spacingTop: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: '  http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/do._V301935058_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'tertiary', textSize: 'base' },
                      'Use small buttons for actions that might not be the sole or most important function on a  page.'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: '     http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_05._V300739957_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'mini', spacingTop: 'mini' },
                        _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/menus/dont._V301935058_.jpg' })
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'tertiary', textSize: 'base' },
                        'Small button would not be appropriate for Listen and Read as it’s the main function of the app. Multiple small buttons create a confusing hierarchy.'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'base' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base', textBold: true },
                        'Design Specs'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'small' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/spc_03._V286595274_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary', textSize: 'base', textBold: true },
                        'Button states for Small Button'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'nostyle' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Hover state: 100%, border #f7991c'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Pressed state: 100%, bg #f7991c'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Disabled state: 40%, border #999999'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary', textSize: 'base', textBold: true },
                        'Button states for Hanshi'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'nostyle' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Hover state: 100%, border #cbc3b5'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Pressed state: 100%, bg #cbc3b5'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Disabled state: 40%, border #cbc3b5'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'small' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/spc_04._V286595274_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary', textSize: 'base', textBold: true },
                        'Specs for Small Button'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'nostyle' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'English Text: 14sp Roboto Medium, #ffffff'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Background: #ffffff'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'secondary', textSize: 'base', textBold: true },
                        'Specs for Hashi'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'nostyle' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'English Text: 14sp Roboto Medium, #ffffff'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Background: #f2eee8'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Minimum Button Height: 28dp'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                          'Tabable Area: 48dp'
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

  return WButtonsAndroid;
})(_react2['default'].Component);

exports['default'] = WButtonsAndroid;
module.exports = exports['default'];
/*
<BC.ListItem spacing="mini">
 <BC.Link textColor="edu_link" app={false} url="#">Secondary Button (TBD)</BC.Link>
</BC.ListItem>
*/ /*
   <BC.GridRow spacing="medium">
    <BC.GridColumn gridUnits={4}>
      <BC.GridRow spacing="mini" spacingTop="micro">
        <BC.Text  textColor="base" textBold={true}>Secondary Button [TBD]</BC.Text>
      </BC.GridRow>
      <BC.GridRow>
        <BC.Text>
          This button is secondary in hierarchy to the primary button. As of December 2015 Amazon English has no secondary buttons.
        </BC.Text>
      </BC.GridRow>
    </BC.GridColumn>
     <BC.GridColumn gridUnits={8} position="last">
       <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/ovr_02._V286595274_.jpg"></BC.Image>
       <BC.Image source=" http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/ovr_02._V286595274_.jpg"></BC.Image>
     </BC.GridColumn>
   </BC.GridRow>
   */ /*
      <BC.Divider  spacing="large"/>
      <div id="secondary-button" />
      <BC.GridRow spacing="base">
       <BC.Text textColor="primary" textSize="medium" textBold={true}>Secondary Button:</BC.Text>
       <BC.Text textColor="base" textSize="medium" textBold={false}>Dual Language (3 states)</BC.Text>
      </BC.GridRow>
      <BC.GridRow spacing="mini">
       <BC.Text textBold={true}>Overview</BC.Text>
      </BC.GridRow>
      <BC.GridRow spacing="medium">
       <BC.Text textBold={false}>
         Secondary buttons only appear as companions to a Primary Button and provide an alternate course of action.
       </BC.Text>
      </BC.GridRow>
      <BC.GridRow spacing="medium">
       <BC.GridColumn gridUnits={4}>
         <BC.GridRow spacing="base">
           <BC.Text textBold={true}>Design</BC.Text>
         </BC.GridRow>
         <BC.List listType="unordered" spacing="medium">
           <BC.ListItem spacing="micro">
             It’s possible to have multiple Secondary Buttons, but use them cautiously.
           </BC.ListItem>
           <BC.ListItem spacing="micro">
             If numerous options are needed, buttons may not be the right element.
           </BC.ListItem>
         </BC.List>
       </BC.GridColumn>
        <BC.GridColumn gridUnits={8} position="last">
         <BC.Box background="#f8f6f3" hasBorder={false} paddingSize="large" heightCss="490" spacing="micro"></BC.Box>
         <BC.Text textColor="tertiary" textSize="mini">
           Do not use two primary buttons as they compete against one another. Pick the most important or most common action
         </BC.Text>
       </BC.GridColumn>
      </BC.GridRow>
      <BC.GridRow spacing="medium">
       <BC.GridColumn gridUnits={4}>
         <BC.GridRow spacing="base">
           <BC.Text textBold={true}>Design Specs</BC.Text>
         </BC.GridRow>
         <BC.List listType="unordered" spacing="medium">
           <BC.ListItem spacing="micro">Lorem Ipsum</BC.ListItem>
           <BC.ListItem spacing="micro">Lorem Ipsum</BC.ListItem>
         </BC.List>
       </BC.GridColumn>
        <BC.GridColumn gridUnits={4}>
          <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_sec_01._V286931567_.jpg"/>
         <BC.GridRow spacing="mini">
           <BC.Text textColor="secondary" textSize="small" hasBold={true} >Button states</BC.Text>
         </BC.GridRow>
         <BC.GridRow spacing="mini">
           <BC.List listType="nostyle">
             <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Hover state: 100% #f7991c</BC.ListItem>
             <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Pressed state: 65% #f7991c</BC.ListItem>
             <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Disabled state: 40% #999999</BC.ListItem>
           </BC.List>
         </BC.GridRow>
        </BC.GridColumn>
        <BC.GridColumn gridUnits={4} position="last">
         <BC.Image source="http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/buttons/android/dsn_sec_02._V286931567_.jpg"/>
          <BC.GridRow spacing="mini">
            <BC.Text textColor="secondary" textSize="small" hasBold={true} >Specs</BC.Text>
         </BC.GridRow>
         <BC.GridRow spacing="mini">
           <BC.List listType="nostyle">
             <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">English Text: 14sp Roboto Medium, #f7991c</BC.ListItem>
             <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Translation Text: 12sp Noto Sans Regular, #f7991c</BC.ListItem>
             <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Border: #f7991c</BC.ListItem>
             <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Background: #ffffff</BC.ListItem>
             <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Button Height: 48dp</BC.ListItem>
             <BC.ListItem spacing="micro"  textColor="tertiary" textSize="mini">Button text left and right minimum padding: 16dp</BC.ListItem>
            </BC.List>
          </BC.GridRow>
       </BC.GridColumn>
      </BC.GridRow>
      <BC.Divider  spacing="large"/>
      */ /*
         <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Translation Text: 12sp Noto Sans Regular, #ffffff</BC.ListItem>
         */ /*
            <BC.ListItem spacing="micro"  textColor="tertiary" textSize="base">Translation Text: 12sp Noto Sans Regular, #fffff</BC.ListItem>
            */