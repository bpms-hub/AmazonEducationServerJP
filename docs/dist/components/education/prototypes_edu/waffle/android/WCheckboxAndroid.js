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

var WCheckboxAndroid = (function (_React$Component) {
  _inherits(WCheckboxAndroid, _React$Component);

  function WCheckboxAndroid() {
    _classCallCheck(this, WCheckboxAndroid);

    _get(Object.getPrototypeOf(WCheckboxAndroid.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(WCheckboxAndroid, [{
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
              'Check Boxes - ',
              _react2['default'].createElement(
                'i',
                null,
                'Single Language'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textSize: 'base', textColor: 'base' },
              'A single checkbox may be used as an acknowledgement in a dialogue. ',
              _react2['default'].createElement('br', null),
              ' Multiple checkboxes are useful in lists where non-exclusive options are presented, allowing a user to multi-select'
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
              _react2['default'].createElement('div', { id: 'design' }),
              _react2['default'].createElement('br', null),
              _react2['default'].createElement('br', null),
              _react2['default'].createElement('br', null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'mini' },
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
                    'Single language'
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listType: 'unordered', spacing: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      'Use a check box in a dialogue to acknowledge a message or enable a setting.'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      ' Use check boxes in menus to present multiple non-exclusive options (no such examples at present time).'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      'Provide a select all control when appropriate'
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      'Check box menu items can not be mutually exclusive.'
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
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/checkboxes/android/dsn_01._V285369721_.jpg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'edu_tertiary', textSize: 'base' },
                  'The single checkbox on this dialogue lets the user prevent the dialogue from automatically appearing in the future.'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 4, position: 'last', spacing: 'large' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'micro' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/checkboxes/android/dsn_02._V301936104_.jpg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textColor: 'edu_tertiary', textSize: 'base' },
                  'The same message and functionality, but using a different color palette.'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'base' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'micro' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/checkboxes/android/dsn_03._V300164186_.jpg' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'mini', spacingTop: 'mini', textAlign: 'center' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/checkboxes/android/1-3._V300266305_.jpg' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'edu_tertiary', textSize: 'base' },
                    'These check boxes contradict one another. They should be presented as radio buttons instead.'
                  )
                )
              ),
              _react2['default'].createElement('div', { id: 'specs' }),
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
                    { spacing: 'mini', spacingTop: 'micro' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: true },
                      'Specs'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8, position: 'last' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/checkboxes/android/spc_01._V299597286_.jpg' })
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
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'edu_tertiary', textSize: 'base', textBold: true },
                      'Checkboxes switch black'
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
                        'On: #333333, Opacity 100% '
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                        'Off: #333333, Opacity 54%'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                        'Disabled: #333333, Opacity 26%'
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
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'edu_tertiary', textSize: 'base', textBold: true },
                      'Checkboxes switch white'
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
                        'On: #FFFFFF, Opacity 100%'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                        'Off: #FFFFFF, Opacity 70%'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                        'Disabled: #FFFFFF, Opacity 30%'
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

  return WCheckboxAndroid;
})(_react2['default'].Component);

exports['default'] = WCheckboxAndroid;
module.exports = exports['default'];