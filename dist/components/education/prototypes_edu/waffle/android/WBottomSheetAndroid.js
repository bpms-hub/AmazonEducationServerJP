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

var WBottomSheetAndroid = (function (_React$Component) {
  _inherits(WBottomSheetAndroid, _React$Component);

  function WBottomSheetAndroid() {
    _classCallCheck(this, WBottomSheetAndroid);

    _get(Object.getPrototypeOf(WBottomSheetAndroid.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(WBottomSheetAndroid, [{
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
              'Bottom Sheet'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textSize: 'base', textColor: 'base' },
              'Functions as a container for temporary content that a user needs to interact with briefly in order to achieve their larger goal. AE utilizes some full screen bottom sheets as well as “normal” partial screen bottom sheets.'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
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
                    { textColor: 'edu_link', linkType: 'nav', app: false, url: '#design' },
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
                  null,
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Link,
                    { textColor: 'edu_link', linkType: 'nav', app: false, url: '#specs' },
                    'Specs'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { background: '#fff', hasBorder: false, paddingSize: 'none' },
              _react2['default'].createElement('div', { id: 'design' }),
              _react2['default'].createElement('br', null),
              _react2['default'].createElement('br', null),
              _react2['default'].createElement('br', null),
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
                        { textBold: true, textColor: 'base' },
                        'Design'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Non-Full Screen Bottom Sheets:'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'unordered', spacing: 'medium' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          'Its height is determined by its contents.'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          'Bottom sheets take precedence over current screen contents, which are covered by a semi-opaque overlay.'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        null,
                        'Full screen Bottom Sheets:'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'unordered', spacing: 'medium' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          'Have an X to dismiss.'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          ' Acts much like a new page, but is always dismissable and should have a title.'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          'Is generally only used for a large amount of content or for very significant content due to their disruptive nature.'
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
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/dsn_04._V300256200_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'edu_tertiary', textSize: 'base' },
                      'The guided learning bottom sheet asks users how difficult they find the current title.'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'small' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/dsn_05._V300743209_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'edu_tertiary', textSize: 'base' },
                      'This bottom sheet uses the full screen to display its contents.'
                    )
                  )
                ),
                _react2['default'].createElement('div', { id: 'interaction' }),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
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
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].List,
                          { listType: 'unordered', spacing: 'medium' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro' },
                            'Slides up from the bottom of the screen.'
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro' },
                            'Dismissable by hitting the Android back button.'
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro' },
                            'Taking an action sometimes dismisses the bottom sheet.'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          null,
                          'Full screen:'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].List,
                          { listType: 'unordered', spacing: 'medium' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro' },
                            'Dismissed by tapping the top left X, which is always present on a full screen bottom sheet.'
                          )
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          null,
                          'Not full screen:'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].List,
                          { listType: 'unordered', spacing: 'medium' },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro' },
                            'Does not have an X to dismiss'
                          ),
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].ListItem,
                            { spacing: 'micro' },
                            'Tapping outside the bottom sheet dismisses it.'
                          )
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
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/in_01._V300256200_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'small' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'edu_tertiary', textSize: 'base' },
                        'The narration speed control on the bottom right of the screen summons the bottom sheet.'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'small' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/in_02._V300256200_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'small' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'edu_tertiary', textSize: 'base' },
                        'The reader is overlaid as the bottom sheet slides up.'
                      )
                    )
                  )
                ),
                _react2['default'].createElement('div', { id: 'specs' }),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
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
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: '  http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/spc_01._V299068695_.jpg' })
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/spc_02._V299068695_.jpg' })
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(_AudibleUITags2['default'].GridColumn, { gridUnits: 4 }),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: '  http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/spc_03._V299068695_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'edu_tertiary', textSize: 'base', textBold: true },
                        'Text'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { listType: 'nostyle' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                        'English Text: 14sp Roboto Medium, #999999'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/bottomsheet/android/spc_04._V299068695_.jpg' })
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'edu_tertiary', textSize: 'base', textBold: true },
                        'Text'
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
                          { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                          'English Text: 14sp Roboto Medium, #333333'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                          'Translation Text: 12sp Noto Sans Regular, #333333'
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

  return WBottomSheetAndroid;
})(_react2['default'].Component);

exports['default'] = WBottomSheetAndroid;
module.exports = exports['default'];