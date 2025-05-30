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

var WRadioButtonsAndroid = (function (_React$Component) {
  _inherits(WRadioButtonsAndroid, _React$Component);

  function WRadioButtonsAndroid() {
    _classCallCheck(this, WRadioButtonsAndroid);

    _get(Object.getPrototypeOf(WRadioButtonsAndroid.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(WRadioButtonsAndroid, [{
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
              'Radio Buttons'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textSize: 'base', textColor: 'base' },
              'A radio button allows users to select one option from a set. '
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
              _AudibleUITags2['default'].Box,
              { background: '#fff', hasBorder: false, paddingSize: 'none' },
              _react2['default'].createElement('div', { id: 'design' }),
              _react2['default'].createElement('br', null),
              _react2['default'].createElement('br', null),
              _react2['default'].createElement('br', null),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { spacing: 'medium' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4 },
                  _react2['default'].createElement('div', { id: 'design' }),
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
                      { listType: 'unordered', spacing: 'medium' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        'Provide a default option if appropriate,    typically the current selection.'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        ' If the user doesn’t need to see all the    options, consider using a drop down    instead as they take less space.'
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
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/radio_buttons/android/dsn_01._V286973016_.jpg' })
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textColor: 'tertiary', textSize: 'base' },
                    'The highlighting options are presented as radio buttons. In this instance, making a selection also closes the containing bottom sheet.'
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
                      { textColor: 'base', textBold: true },
                      'Specs'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      null,
                      'Tap target is the entire row on which the radio button is located.'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 8, position: 'last' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/radio_buttons/android/spc_01._V286973016_.jpg' })
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
                      { textColor: 'secondary', textSize: 'base', hasBold: true },
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
                        'On: #f7991c, opacity 40%'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                        'Off: #cbc3b5, opacity 40%'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                        'Disabled state: #cccccc, opacity 40%'
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
                      { textColor: 'secondary', textSize: 'base', hasBold: true },
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
                        'Button Height: 24dp'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro', textColor: 'tertiary', textSize: 'base' },
                        'Button Width: 24dp'
                      )
                    )
                  )
                )
              ),
              _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'large' })
            )
          )
        )
      );
    }
  }]);

  return WRadioButtonsAndroid;
})(_react2['default'].Component);

exports['default'] = WRadioButtonsAndroid;
module.exports = exports['default'];