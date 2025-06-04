'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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

var International = (function () {
  function International() {
    _classCallCheck(this, International);
  }

  _createClass(International, [{
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
              _react2['default'].createElement(
                _AudibleUITags2['default'].Box,
                { backgroundColor: 'secondary' },
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Heading,
                  { headingLevel: 3, spacing: 'mini', textCapitalize: true },
                  'Categories'
                ),
                _react2['default'].createElement(_AudibleUITags2['default'].Divider, { spacing: 'small' }),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].List,
                  { listType: 'nostyle' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                      'Mysteries & Thrillers'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                      'Sci-Fi & Fantasy'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                      'History'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                      'Science & Technology'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                      'Classics'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                      'Bios & Memoirs'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                      'Business'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                      'Self Development'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                      'Romance'
                    )
                  ),
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].ListItem,
                    { spacing: 'mini' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].Link,
                      { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                      'Fiction'
                    )
                  )
                ),
                _react2['default'].createElement(
                  _AudibleUITags2['default'].Expander,
                  { anchor: false, hideText: 'Less Categories', showText: 'More Categories' },
                  _react2['default'].createElement(
                    _AudibleUITags2['default'].List,
                    { listType: 'nostyle' },
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                        'Teens'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                        'Kids'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                        'Nonfiction'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                        'Comedy'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                        'Foreign Language'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                        'Erotica & Sexuality'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                        'Health & Fitness'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                        'Language'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                        'Live Events'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                        'Newspapers & Magazines'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                        'Radio & TV'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                        'Religion & Spirituality'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                        'Sports'
                      )
                    ),
                    _react2['default'].createElement(
                      _AudibleUITags2['default'].ListItem,
                      { spacing: 'micro' },
                      _react2['default'].createElement(
                        _AudibleUITags2['default'].Link,
                        { linkType: 'nav', app: true, url: "/prototypes/brickcity/international2" },
                        'Travel & Adventure'
                      )
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _AudibleUITags2['default'].FixedGridColumn,
              { fixedColumn: 'left', side: 'right', columnPadding: '20px' },
              this.renderResults()
            )
          )
        ),
        _react2['default'].createElement(_FooterProdFooter2['default'], null)
      );
    }
  }]);

  return International;
})();

exports['default'] = International;
module.exports = exports['default'];
/* Category */