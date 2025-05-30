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

var _CancelLayout = require('./CancelLayout');

var _CancelLayout2 = _interopRequireDefault(_CancelLayout);

var _HeaderProdHeader = require('../Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('../Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

var CancelCredits = (function (_React$Component) {
  _inherits(CancelCredits, _React$Component);

  function CancelCredits() {
    _classCallCheck(this, CancelCredits);

    _get(Object.getPrototypeOf(CancelCredits.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CancelCredits, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Box,
          { backgroundColor: 'inverse', heightCss: '500px', paddingSize: 'extra-large', spacing: 'large' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { textAlign: 'center', textSize: 'large', textColor: 'inverse' },
            'To be done by cancel stream'
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return CancelCredits;
})(_react2['default'].Component);

exports['default'] = CancelCredits;

// <CancelLayout>
//   <BC.Heading spacing="micro">If you cancel, you'll lose your 4 credits!</BC.Heading>
//   <BC.Paragraph spacing="large">
//     1 credit is good for any title. Cancel and your credits will be gone.
//   </BC.Paragraph>

//   <CC.ProductCarousel carouselTitle="Choose from Your Wish List" />

//   <BC.GridRow textAlign="right">
//     <BC.Button inline={true} buttonType="primary" app={true} url={"/prototypes/brickcity"}>Shop with Credits</BC.Button>
//     <BC.LetterSpace />
//     <BC.Button inline={true} app={true} url={"/prototypes/brickcity/cancel/form"}>Continue to Cancel</BC.Button>
//   </BC.GridRow>       
// </CancelLayout>
module.exports = exports['default'];