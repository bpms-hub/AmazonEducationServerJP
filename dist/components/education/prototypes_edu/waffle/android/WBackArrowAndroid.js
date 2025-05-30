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

var WBackArrowAndroid = (function (_React$Component) {
  _inherits(WBackArrowAndroid, _React$Component);

  function WBackArrowAndroid() {
    _classCallCheck(this, WBackArrowAndroid);

    _get(Object.getPrototypeOf(WBackArrowAndroid.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(WBackArrowAndroid, [{
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
              'Back Arrow'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textSize: 'base', textColor: 'base' },
              'Returns the user to the previous screen.'
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
                  { textColor: 'edu_link', app: false, url: '#design-button' },
                  'Design'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].ListItem,
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  { textColor: 'edu_link', linkType: 'nav', app: false, url: '#specs-button' },
                  'Specs'
                )
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            null,
            _react2['default'].createElement('div', { id: 'design-button' }),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement('br', null),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { background: '#fff', hasBorder: false, paddingSize: 'none' },
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
                        'The Back Arrow is used on drill-down pages (aka secondary pages) and always appears on the left side of the top bar.'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro' },
                        'Don’t confuse the back arrow with the X used on full screen ',
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'edu_link', url: "/education/waffle/bottom-sheet", linkType: 'nav' },
                          'bottom sheets'
                        ),
                        '. (X dismisses a single sheet, while the arrow can take a user back through multiple levels.)'
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
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/backarrow/android/dsn_01._V300743436_.jpg' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridColumn,
                  { gridUnits: 4, position: 'last' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'mini' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/backarrow/android/dsn_02._V300743436_.jpg' })
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'base' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, gridPush: 4, spacing: 'none' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'edu_tertiary', textSize: 'base' },
                      'The back arrow on this category page returns the user to the list of categories.'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'edu_tertiary', textSize: 'base' },
                      'A somewhat unique use of the back arrow, this provides a means to exit search in the absence of the (now hidden) menu button'
                    )
                  )
                ),
                _react2['default'].createElement('div', { id: 'specs-button' }),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement('br', null),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'none' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 4 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      { spacing: 'small' },
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
                        'Arrow color depends on the background. Surrounding color depends on the page content.'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 8, position: 'last' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: ' http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/backarrow/android/spc_01._V300695506_.jpg' })
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
                      _AudibleUITags2['default'].List,
                      { listType: 'nostyle' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                        'Arrow: #ffffff on a #f1971c background'
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].ListItem,
                        { spacing: 'micro', textColor: 'edu_tertiary', textSize: 'base' },
                        'Tappable area: minimum 48dp'
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

  return WBackArrowAndroid;
})(_react2['default'].Component);

exports['default'] = WBackArrowAndroid;
module.exports = exports['default'];