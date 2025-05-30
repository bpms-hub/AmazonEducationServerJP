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

var Recommendations = (function (_React$Component) {
  _inherits(Recommendations, _React$Component);

  function Recommendations(props) {
    _classCallCheck(this, Recommendations);

    _get(Object.getPrototypeOf(Recommendations.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Recommendations, [{
    key: 'renderTabs',
    value: function renderTabs() {

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          _AudibleUITags2['default'].Section,
          { spacing: 'base' },
          _react2['default'].createElement(
            _AudibleUITags2['default'].Text,
            { textColor: 'base', textSize: 'small' },
            'View based on:',
            _react2['default'].createElement(_AudibleUITags2['default'].LetterSpace, { size: 'large' })
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            { textColor: 'base', textSize: 'small' },
            'Audible Purchases'
          ),
          _react2['default'].createElement(_AudibleUITags2['default'].Pipe, null),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Link,
            { textSize: 'small' },
            'Amazon Book and Kindle Purchases'
          )
        )
      );
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var rows = [];

      for (var x = 0; x < 5; x++) {
        rows.push(x);
      }

      var rowMap = rows.map(function (row, index) {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_cc2['default'].ProductListingColumn3, {
            bookTitle: 'First Meetings: In the Enderverse',
            bookAuthor: 'Orson Scott Card',
            bookNarrator: 'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki',
            bookRating: true,
            recommendations: true,
            hasRadioBtn: true
          })
        );
      });

      return rowMap;
    }
  }, {
    key: 'renderRestoreItems',
    value: function renderRestoreItems() {
      var rows = [];

      for (var x = 0; x < 5; x++) {
        rows.push(x);
      }

      var rowMap = rows.map(function (row, index) {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_cc2['default'].ProductListingColumn3, {
            bookTitle: 'First Meetings: In the Enderverse',
            bookAuthor: 'Orson Scott Card',
            bookNarrator: 'Gabrielle De Cuir, Amanda Karr, Stefan Kudnicki',
            bookRating: true,
            recommendations: true,
            recommendationsBtn: true
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
            _AudibleUITags2['default'].Heading,
            { headingLevel: '1', spacing: 'small', spacingTop: 'medium' },
            'Improve Your Recommendations'
          ),
          _react2['default'].createElement(
            _AudibleUITags2['default'].Section,
            { spacing: 'medium' },
            _react2['default'].createElement(
              _cc2['default'].Tabs,
              null,
              _react2['default'].createElement(
                _cc2['default'].TabPanel,
                { title: 'inspired by your purchases' },
                this.renderTabs(),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                this.renderItems()
              ),
              _react2['default'].createElement(
                _cc2['default'].TabPanel,
                { title: 'inspired by your wish list' },
                this.renderItems()
              ),
              _react2['default'].createElement(
                _cc2['default'].TabPanel,
                { title: 'removed items' },
                this.renderRestoreItems()
              )
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return Recommendations;
})(_react2['default'].Component);

exports['default'] = Recommendations;
module.exports = exports['default'];
/* Tab Navigation */ /* Tab1 - Inspired by Purchases */ /* Tab2 - Inspired by Wishlist */ /* Tab3 - Remove Items */