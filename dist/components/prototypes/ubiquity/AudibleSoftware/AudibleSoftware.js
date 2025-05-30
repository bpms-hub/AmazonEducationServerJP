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

var _cc = require('../cc');

var _cc2 = _interopRequireDefault(_cc);

var _HeaderProdHeader = require('../Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('../Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

var AudibleSoftware = (function (_React$Component) {
  _inherits(AudibleSoftware, _React$Component);

  function AudibleSoftware() {
    _classCallCheck(this, AudibleSoftware);

    _get(Object.getPrototypeOf(AudibleSoftware.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AudibleSoftware, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'medium', spacingTop: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              null,
              'Audible Software'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large', textSize: 'small', textColor: 'secondary' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3 },
                'PC or Mac'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 6, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Heading,
                { headingLevel: 3 },
                'Audible Mobile Apps'
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'large', textSize: 'small', textColor: 'secondary' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { heightCss: '185px' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-windowsPC-icon', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/windowsPC._V288436753_.svg' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textAlign: 'center', spacing: 'small', textColor: 'base' },
                  'Windows PC'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { textAlign: 'center', spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textAlign: 'center', textColor: 'secondary' },
                    'Windows 7, Vista, XP,\u00032000 and Windows based  handheld devices'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { buttonType: 'primary' },
                'Download'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { heightCss: '185px' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-apple-icon', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/macOSX._V288436753_.svg' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textAlign: 'center', spacing: 'small', textColor: 'base' },
                  'Mac OSX'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { textAlign: 'center', spacing: 'large' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textAlign: 'center', textColor: 'secondary' },
                    'Mac OSX and above'
                  )
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { buttonType: 'primary' },
                'Download'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2, gridPush: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { heightCss: '185px' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-ios-icon', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/apple-ios._V288436753_.svg' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textAlign: 'center', spacing: 'small', textColor: 'base' },
                  'Apple IOS'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { buttonType: 'primary' },
                'Learn More'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2, gridPush: 2 },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { heightCss: '185px' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-android-icon', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/android._V288436753_.svg' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textAlign: 'center', spacing: 'small', textColor: 'base' },
                  'Android'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { buttonType: 'primary' },
                'Learn More'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { gridUnits: 2, position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Section,
                { heightCss: '185px' },
                _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-windows-icon', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/windows._V288436753_.svg' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, textAlign: 'center', spacing: 'small', textColor: 'base' },
                  'Windows'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Button,
                { buttonType: 'primary' },
                'Learn More'
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return AudibleSoftware;
})(_react2['default'].Component);

exports['default'] = AudibleSoftware;
module.exports = exports['default'];