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

var _dataPrototypesProductsJson = require('../../../../data/prototypes/products.json');

var _dataPrototypesProductsJson2 = _interopRequireDefault(_dataPrototypesProductsJson);

var SeriesList = (function (_React$Component) {
  _inherits(SeriesList, _React$Component);

  function SeriesList() {
    _classCallCheck(this, SeriesList);

    _get(Object.getPrototypeOf(SeriesList.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SeriesList, [{
    key: 'renderBestSellers',
    value: function renderBestSellers() {
      var rows = [];

      for (var x = 1; x <= 7; x++) {
        rows.push(x);
      }

      var rowMap = rows.map(function (index) {
        return _react2['default'].createElement(
          'div',
          { key: index },
          _react2['default'].createElement(_cc2['default'].ProductListingColumn4, {
            seriesList: true,
            seriesNum: index,
            hasAsin: true,
            bookTitleLink: 'First Meetings: In the Enderverse',
            bookAuthor: 'Orson Scott Card',
            bookNarrator: 'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki',
            bookSeries: 'Ender\'s Game',
            bookRating: true,
            hasBuyBox: true
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
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { heightCss: '250px', spacing: 'medium', width: '100%', cssClass: 'bc-seriesList-Banner', spacingTop: 'medium' },
          _react2['default'].createElement(
            'div',
            { className: 'bc-container' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Section,
              { paddingTop: 'base', textColor: 'inverse', heightCss: '150px' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { textColor: 'inverse', spacing: 'micro' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'medium', textBold: true },
                  '7 Books'
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'medium' },
                  ' in Series'
                )
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].GridRow,
                { textColor: 'inverse' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Text,
                  { textSize: 'extra-large' },
                  'Chronicles of Narnia'
                )
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridRow,
            { spacing: 'small' },
            this.renderBestSellers()
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'large' }),
          _react2['default'].createElement(_FooterProdFooter2['default'], null)
        )
      );
    }
  }]);

  return SeriesList;
})(_react2['default'].Component);

exports['default'] = SeriesList;
module.exports = exports['default'];