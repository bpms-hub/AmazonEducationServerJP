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

var AudibleSoftwarePC1 = (function (_React$Component) {
  _inherits(AudibleSoftwarePC1, _React$Component);

  function AudibleSoftwarePC1() {
    _classCallCheck(this, AudibleSoftwarePC1);

    _get(Object.getPrototypeOf(AudibleSoftwarePC1.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AudibleSoftwarePC1, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(_AudibleUITags2['default'].Breadcrumbs, { breadcrumbTrail: [{ name: "home", url: "/prototypes/brickcity" }, { name: "Audible Software" }], spacing: 'small', spacingTop: 'medium' }),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'medium' },
            _react2['default'].createElement(_AudibleUITags2['default'].Icon, { iconType: 'windows', verticalAlign: 'baseline' }),
            _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textSize: 'large' },
              'Audible Software for Windows PC'
            )
          ),
          _react2['default'].createElement(
            _cc2['default'].ProgressBarRow,
            { textSize: 'base' },
            _react2['default'].createElement(
              _cc2['default'].ProgressBar,
              { activeState: true, spacing: 'small', widthPercentage: 33.3 },
              'Choose a Device'
            ),
            _react2['default'].createElement(
              _cc2['default'].ProgressBar,
              { spacing: 'small', widthPercentage: 33.3 },
              'Install Software'
            ),
            _react2['default'].createElement(
              _cc2['default'].ProgressBar,
              { spacing: 'small', widthPercentage: 33.3 },
              'Download Audio'
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Box,
            { backgroundColor: 'secondary', spacing: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Heading,
              { textAlign: 'center' },
              'How do you want to listen?'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Paragraph,
              { textAlign: 'center' },
              '(No matter what you choose, you won\'t be limited to only one listening method)'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'micro', spacingTop: 'medium', textAlign: 'center', textSize: 'small', textColor: 'secondary' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2, gridPush: 2 },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { heightCss: '110px', spacingTop: 'base' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-ipod-icon', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/ipod._V288436753_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6, gridPull: 3, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: true, textSize: 'mini', textColor: 'base' },
                      'Apple iPod with iTunes'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { size: 'small', buttonType: 'primary' },
                  'Select'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2, gridPush: 3, textAlign: 'center' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { heightCss: '130px' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-kindle-icon', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/kindle._V288436753_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].Text,
                    { textBold: true, textSize: 'mini', textColor: 'base' },
                    'MP3 Player, Kindle, \u0003Mobile Phone, GPS'
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { size: 'small', buttonType: 'primary' },
                  'Select'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridColumn,
                { gridUnits: 2, position: 'last', gridPull: 2, textAlign: 'center' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { heightCss: '115px', spacingTop: 'small' },
                  _react2['default'].createElement(_AudibleUITags2['default'].Image, { cssClass: 'bc-laptop-icon', source: 'https://images-na.ssl-images-amazon.com/images/G/01/audibleweb/brickcity/1.0/prototypes/software/laptop._V288436753_.svg' })
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'small' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 7, gridPull: 3, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Text,
                      { textBold: true, textSize: 'mini', textColor: 'base' },
                      'Listen on My Computer'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Button,
                  { size: 'small', buttonType: 'primary' },
                  'Select'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return AudibleSoftwarePC1;
})(_react2['default'].Component);

exports['default'] = AudibleSoftwarePC1;
module.exports = exports['default'];