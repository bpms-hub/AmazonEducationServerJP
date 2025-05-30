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

var _cc = require('./cc');

var _cc2 = _interopRequireDefault(_cc);

var _HeaderProdHeader = require('./Header/ProdHeader');

var _HeaderProdHeader2 = _interopRequireDefault(_HeaderProdHeader);

var _FooterProdFooter = require('./Footer/ProdFooter');

var _FooterProdFooter2 = _interopRequireDefault(_FooterProdFooter);

var International2 = (function (_React$Component) {
  _inherits(International2, _React$Component);

  function International2(props) {
    _classCallCheck(this, International2);

    _get(Object.getPrototypeOf(International2.prototype), 'constructor', this).call(this, props);
    this.state = { selected: false };
  }

  _createClass(International2, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      this.setState({ selected: !this.state.selected });
    }
  }, {
    key: 'renderResults',
    value: function renderResults() {
      var rows = [];

      for (var x = 0; x < 10; x++) {
        rows.push(x);
      }

      var rowMap = rows.map(function () {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_cc2['default'].ProductListingColumn3, {
            hasBuyBox: true,
            hasAsin: true,
            bookTitle: 'First Meetings: In the Enderverse',
            bookAuthor: 'Orson Scott Card',
            bookNarrator: 'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki',
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
        _react2['default'].createElement(_HeaderProdHeader2['default'], null),
        _react2['default'].createElement(
          'div',
          { className: 'bc-container' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].FixedGridRow,
            { fixedColumn: 'left', fixedColumnWidth: 220, spacingTop: 'large' },
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', fixedColumnWidth: 220, side: 'left' },
              _react2['default'].createElement(_cc2['default'].BrowseSearch, { subcategories: true, filters: true, categoryUrl: '/prototypes/brickcity/international' })
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', side: 'right', columnPadding: '20px' },
              this.state.selected ? _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                  _AudibleUITags2['default'].GridRow,
                  { spacing: 'medium' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 6 },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textSize: 'large' },
                        'Doctor Who'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].GridRow,
                      null,
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Text,
                        { textSize: 'small', textColor: 'tertiary' },
                        'Showing 01-20 of 3,266 results'
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].GridColumn,
                    { gridUnits: 5, position: 'last' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Dropdown,
                      null,
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
                    )
                  )
                )
              ) : null,
              this.renderResults()
            )
          )
        )
      );
    }
  }]);

  return International2;
})(_react2['default'].Component);

exports['default'] = International2;
module.exports = exports['default'];