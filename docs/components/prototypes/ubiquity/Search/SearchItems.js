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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Search = (function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    _get(Object.getPrototypeOf(Search.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Search, [{
    key: 'renderSearchResults',
    value: function renderSearchResults() {
      var rows = [];

      for (var x = 0; x < 10; x++) {
        rows.push(x);
      }

      var rowMap = rows.map(function (index) {
        return _react2['default'].createElement(
          'div',
          { key: index },
          _react2['default'].createElement(_cc2['default'].ProductListingColumn3, {
            hasBuyBox: true,
            hasAsin: true,
            bookTitle: 'First Meetings: In the Enderverse',
            bookAuthor: 'Orson Scott Card',
            bookNarrator: 'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki',
            bookSeries: 'Ender\'s Game',
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
        _react2['default'].createElement(
          _AudibleUITags2['default'].GridRow,
          { spacing: 'small' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 8 },
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              { spacing: 'micro' },
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textSize: 'medium' },
                'Results for '
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textSize: 'medium', textBold: true },
                '"Russian Books"'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textSize: 'base', textColor: 'secondary' },
                ' (525 results)'
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].GridRow,
              null,
              _react2['default'].createElement(
                _AudibleUITags2['default'].Text,
                { textColor: 'secondary' },
                'Relate Searches:',
                _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'micro' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'rusian literature, '
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'rusian drama, '
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Link,
                  null,
                  'rusian language'
                )
              )
            )
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].GridColumn,
            { gridUnits: 4, position: 'last', textAlign: 'right', spacingTop: 'mini' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].Dropdown,
              { inline: true },
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Relevance'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Best Selling'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Title'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Length'
              ),
              _react2['default'].createElement(
                _AudibleUITags2['default'].DropdownOption,
                null,
                'Customer Rating'
              )
            ),
            _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, null)
          )
        ),
        _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
        this.renderSearchResults(),
        _react2['default'].createElement(
          _AudibleUITags2['default'].Box,
          { backgroundColor: 'inverse', heightCss: '60px' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            { textColor: 'inverse' },
            'Progressive Load'
          )
        )
      );
    }
  }]);

  return Search;
})(_react2['default'].Component);

exports['default'] = Search;
module.exports = exports['default'];