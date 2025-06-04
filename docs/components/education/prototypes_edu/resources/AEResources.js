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

var _layout_eduAEHeaderJs = require("../../layout_edu/AEHeader.js");

var _layout_eduAEHeaderJs2 = _interopRequireDefault(_layout_eduAEHeaderJs);

var _layout_eduAEFooterJs = require("../../layout_edu/AEFooter.js");

var _layout_eduAEFooterJs2 = _interopRequireDefault(_layout_eduAEFooterJs);

var AEResources = (function (_React$Component) {
  _inherits(AEResources, _React$Component);

  function AEResources(props, context) {
    _classCallCheck(this, AEResources);

    _get(Object.getPrototypeOf(AEResources.prototype), 'constructor', this).call(this, props, context);
  }

  _createClass(AEResources, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log(this.props.location.pathname)
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2['default'].createElement(
        'div',
        { background: '#222222' },
        _react2['default'].createElement(_layout_eduAEHeaderJs2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: '' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'none', spacingTop: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacingTop: 'large' },
              _react2['default'].createElement(_AudibleUITags2['default'].GridColumn, { gridUnits: 1 }),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 9, cssClass: 'bc-edu-container' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Box,
                  { background: '#fff', hasBorder: false, paddingSize: 'none', spacingTop: 'extra-large' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'base', textSize: 'large', spacing: 'base' },
                      'Amazon English '
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'medium' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textColor: 'base', textSize: 'base', spacing: 'secondary' },
                      'Find source files for Audible’s Amazon English application here. Design Style Guides, Pattern Library, collections of assets, and more. For additional information or questions, contact ',
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { textColor: 'base', url: 'mailto:ae-design@audible.com' },
                        _react2['default'].createElement(
                          'u',
                          null,
                          ' ae-design@audible.com'
                        )
                      ),
                      '.'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'large' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 3 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'base', textBold: true },
                          'Amazon English',
                          _react2['default'].createElement('br', null),
                          'Style Guide & UI Kit v1.2'
                        )
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridColumn,
                      { gridUnits: 8 },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'mini' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'base', textBold: true },
                          'Includes:'
                        )
                      ),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'mini' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'base', textBold: true },
                          'UI Kit: '
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'base' },
                          'Examples of the screens currently in use in Amazon English. Use it as a template for designing new pages rather than building them from scratch.'
                        )
                      ),
                      _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'medium' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'base', textBold: true },
                          'Style Guide: '
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Text,
                          { textColor: 'base' },
                          'Color palettes, fonts, logos and fundamental design elements from across the application. Refer to the style guide when creating new components or patterns for Amazon English.'
                        )
                      ),
                      _react2['default'].createElement(_AudibleUITags2['default'].Divider, { cssClass: 'bc-divider' }),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        { spacing: 'medium' },
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { url: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/resources/ANDROID_StyleGuide_UIKIT._V299212401_.zip' },
                            _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/resources/downloadicon._V300571770_.png' })
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'edu_link', url: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/resources/ANDROID_StyleGuide_UIKIT._V299212401_.zip' },
                          'Sketch | 37mb (zip)'
                        )
                      ),
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].GridRow,
                        null,
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].GridColumn,
                          { gridUnits: 1 },
                          _react2['default'].createElement(
                            _AudibleUITags2['default'].Link,
                            { url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/education/ae/resources/ANDROID_StyleGuide_UIKIT._V299211846_.pdf' },
                            _react2['default'].createElement(_AudibleUITags2['default'].Image, { source: 'http://g-ec2.images-amazon.com/images/G/01/audibleweb/education/ae/resources/downloadicon._V300571770_.png' })
                          )
                        ),
                        _react2['default'].createElement(
                          _AudibleUITags2['default'].Link,
                          { textColor: 'edu_link', url: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/education/ae/resources/ANDROID_StyleGuide_UIKIT._V299211846_.pdf' },
                          'PDF | 3.6mb'
                        )
                      )
                    )
                  ),
                  _react2['default'].createElement(_AudibleUITags2['default'].GridRow, null),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridRow,
                    { spacing: 'base' },
                    _react2['default'].createElement(_AudibleUITags2['default'].Divider, null)
                  )
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_layout_eduAEFooterJs2['default'], null)
      );
    }
  }]);

  return AEResources;
})(_react2['default'].Component);

exports['default'] = AEResources;
module.exports = exports['default'];
/*<AESidebar />*/ /* Content Section */