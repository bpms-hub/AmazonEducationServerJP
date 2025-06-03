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

var _HeaderProdHeaderMobile = require('../Header/ProdHeaderMobile');

var _HeaderProdHeaderMobile2 = _interopRequireDefault(_HeaderProdHeaderMobile);

var _FooterProdFooterMobile = require('../Footer/ProdFooterMobile');

var _FooterProdFooterMobile2 = _interopRequireDefault(_FooterProdFooterMobile);

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var BestSellersMobile = (function (_React$Component) {
  _inherits(BestSellersMobile, _React$Component);

  function BestSellersMobile(props) {
    _classCallCheck(this, BestSellersMobile);

    _get(Object.getPrototypeOf(BestSellersMobile.prototype), 'constructor', this).call(this, props);
  }

  _createClass(BestSellersMobile, [{
    key: 'renderBestSellers',
    value: function renderBestSellers() {
      var rows = [];

      for (var x = 0; x < 3; x++) {
        rows.push(x);
      }

      var rowMap = rows.map(function () {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_cc2['default'].ProductListingMobile, {
            hasAsin: true,
            bookTitle: 'First Meetings: In the Enderverse',
            bookAuthor: 'Orson Scott Card',
            bookNarrator: 'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki',
            bookLength: '5 hrs & 18 mins, Unabridged',
            bookPrice: '14.95',
            bookRating: true
          })
        );
      });
      return rowMap;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_HeaderProdHeaderMobile2['default'], { member: false }),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Box,
          { backgroundColor: 'secondary', paddingSize: 'mini' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Heading,
            { headingLevel: '2' },
            'Audible Best Sellers'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'small', spacingTop: 'small' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                null,
                '5,567 Results'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridColumn,
              { textAlign: 'right', position: 'last' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Link,
                null,
                'Refine'
              )
            )
          )
        ),
        this.renderBestSellers(),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { textAlign: 'center', spacing: 'medium' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Box,
              { backgroundColor: 'secondary', paddingSize: 'mini', spacing: 'mini' },
              'Load Next 20'
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].Text,
              { textSize: 'small', textColor: 'secondary' },
              'Showing 1-20'
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooterMobile2['default'], null)
      );
    }
  }]);

  return BestSellersMobile;
})(_react2['default'].Component);

exports['default'] = BestSellersMobile;
module.exports = exports['default'];