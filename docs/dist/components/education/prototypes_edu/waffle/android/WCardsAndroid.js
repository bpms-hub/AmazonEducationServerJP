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

var WCardsAndroid = (function (_React$Component) {
  _inherits(WCardsAndroid, _React$Component);

  function WCardsAndroid() {
    _classCallCheck(this, WCardsAndroid);

    _get(Object.getPrototypeOf(WCardsAndroid.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(WCardsAndroid, [{
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
              'Cards'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textSize: 'base', textColor: 'base' },
              'A card is a container sheet that serves as an entry point to more detailed information. Cards have padding to keep each one separate from the next. For scenarios calling for more contiguous lists, see ',
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                { textColor: 'edu_link', url: "/education/waffle/tiles" },
                'Tiles'
              ),
              '.'
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
                  { textColor: 'edu_link', app: false, url: '#interaction' },
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
          _react2['default'].createElement('div', { id: 'design' }),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { background: '#fff', hasBorder: false, paddingSize: 'none' },
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
                        'Cards have rounded corners.'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        'Use cards for heterogeneous content.'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        'The padding between each card helps separate their contents.'
                      )
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4 },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/cards/android/dsn_01._V300737772_.jpg' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/cards/android/ds_03._V285873849_.jpg' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, gridPush: 4, spacing: 'large' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'edu_tertiary', textSize: 'base' },
                      'Categories: Each card contains several titles from a single category.'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'edu_tertiary', textSize: 'base' },
                      'Downloaded titles: Each card contains several actions specific to that title.'
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
                        _AudibleUITags2['default'].Text,
                        null,
                        'Number on the left reflect dot’s position Touch targets:'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].List,
                        { listType: 'unordered', spacing: 'medium' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          'Cards may be dismissible'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          'Cards may be draggable'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro' },
                          'Tapping a card invokes its main action; cards may contain additional actions invoked by buttons, links, images, etc.'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 8, position: 'last', spacing: 'base' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: '  http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/cards/android/in_01._V299048711_.jpg' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].List,
                      { listType: 'nostyle' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'edu_tertiary', textSize: 'base' },
                          '1. Main action: Open details'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'edu_tertiary', textSize: 'base' },
                          '2. Secondary action: Download'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    null,
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 4, gridPush: 4 },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/cards/android/in_02._V300737772_.jpg' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'edu_tertiary', textSize: 'base' },
                        'Swiping the card to either direction allows the user to remove the file from their device.'
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
                        _AudibleUITags2['default'].Text,
                        { textColor: 'base', textBold: true },
                        'Specs'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8, position: 'last' },
                      _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/cards/android/spc_01._V298846575_.jpg' })
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
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textColor: 'edu_tertiary', textSize: 'base', textBold: true },
                        'Card specs'
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
                          'Background: #ffffff'
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].ListItem,
                          { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                          'Radius: 2dp'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(_AudibleUITags2['default'].GridRow, { spacing: 'mini' }),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'mini' },
                      _react2['default'].createElement(_AudibleUITags2['default'].List, { listType: 'nostyle' })
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

  return WCardsAndroid;
})(_react2['default'].Component);

exports['default'] = WCardsAndroid;
module.exports = exports['default'];